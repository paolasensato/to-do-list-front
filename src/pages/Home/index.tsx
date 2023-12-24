import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import useUserStore from "../../store/userStore";

const HomePage = () => {
  const [user, setUser] = useState<string>();

  const userStore = useUserStore();

  useEffect(() => {
    setUser(userStore.user.name!);
  }, []);

  return (
    <>
      <Typography variant="h1">{`Bem vindo, ${user}!`}</Typography>
    </>
  );
};

export default HomePage;
