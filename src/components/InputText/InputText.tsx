import { FormHelperText, Input, InputLabel } from "@mui/material";

const InputText = () => {
  return (
    <>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </>
  );
};

export default InputText;
