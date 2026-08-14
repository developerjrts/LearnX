import { Alert, Snackbar } from "@mui/material"

interface props {
    open: boolean,
    message: string,
    severity: "error" | "info" | "success" | "warning",
    onClose: () => void
}

const Toast = ({message, open, severity, onClose}:props) => {
  return (
    <Snackbar
    open={open}
    autoHideDuration={4000}
    onClose={onClose}
    anchorOrigin={{
        vertical: "top",
        horizontal: "right"
    }}
    >
        <Alert
        onClose={onClose}
        severity={severity}
        >
            {message}
        </Alert>
    </Snackbar>
  )
}

export default Toast