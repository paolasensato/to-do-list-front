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
import { FormEvent, useState } from "react";
import Feedback, { feedbackProps } from "../../components/Feedback";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const SubscribePage = () => {
  const [formValues, setFormValues] = useState({});
  const [feedback, setFeedback] = useState<feedbackProps>();
  const [loading, setLoading] = useState<boolean>(false);

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

      await axios.post("/users", formValues);

      setFeedback({
        message: "Registro realizado com sucesso",
        open: true,
        severity: "success",
      });

      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        setFeedback({
          message: response?.data,
          open: true,
          severity: "error",
        });
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
          Registre-se
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            id="name"
            name="name"
            label="Nome"
            margin="normal"
            variant="standard"
            onChange={handleOnChange}
            disabled={loading}
            fullWidth
            autoFocus
            required
          />
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
            <Link href="/login" variant="body2">
              {"Tem uma conta? Entrar"}
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

export default SubscribePage;
