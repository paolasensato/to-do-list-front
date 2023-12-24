import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import Feedback, { feedbackProps } from "../../components/Feedback";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({});
  const [feedback, setFeedback] = useState<feedbackProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const userStore = useUserStore();

  const navigate = useNavigate();

  const handleOnChange = (e: any) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e?.preventDefault();

      setLoading(true);

      const { data } = await axios.post("/users/login", formValues);

      const user = {
        name: data.user.name,
        token: data.token,
      };

      userStore.setUser(user);

      setFeedback({
        message: "Login realizado com sucesso",
        open: true,
        severity: "success",
      });

      navigate("/home");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;

        if (response?.data[403]) {
          setFeedback({
            message: response?.data[403],
            open: true,
            severity: "error",
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        variant="elevation"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Entre para continuar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            type="email"
            autoComplete="email"
            margin="normal"
            variant="standard"
            onChange={handleOnChange}
            disabled={loading}
            fullWidth
            autoFocus
            required
          />
          <TextField
            id="password"
            name="password"
            label="Senha"
            type="password"
            margin="normal"
            variant="standard"
            onChange={handleOnChange}
            autoComplete="current-password"
            disabled={loading}
            fullWidth
            required
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Entrar
          </Button>
          <Grid item>
            <Link href="/subscribe" variant="body2">
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Box>
      </Paper>
      <Feedback
        message={feedback?.message}
        open={feedback?.open}
        severity={feedback?.severity}
        onClose={() => setFeedback({ ...feedback, open: false })}
      />
    </Container>
  );
};

export default LoginPage;
