import { Button, Container, FormControl, Paper } from "@mui/material";
import InputText from "../../components/InputText/InputText";

const LoginPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      maxWidth="xl"
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <FormControl>
          <InputText />
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default LoginPage;
