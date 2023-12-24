import { Alert, AlertColor, Snackbar } from "@mui/material";

export type feedbackProps = {
  open?: boolean;
  severity?: AlertColor | undefined;
  message?: string;
  onClose?: () => void | undefined;
};

const Feedback = (props: feedbackProps) => {
  const { open, severity, message, onClose } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      key={"bottom" + "right"}
    >
      <Alert severity={severity} sx={{ width: "100%" }} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Feedback;
