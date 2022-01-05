import { Close } from '@mui/icons-material';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useAuth } from '../context/AuthContext';

const Notify = () => {
  const alertRef = useRef();
  const {
    alert: { isAlert, severity, message, timeout },
    setAlert,
  } = useAuth();

  useEffect(() => {
    alertRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });

    let timer;
    if (timeout) {
      timer = setTimeout(() => {
        setAlert({ ...alert, isAlert: false });
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <Box sx={{ mb: 2 }} ref={alertRef}>
      <Collapse in={isAlert}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="Close"
              size="small"
              onClick={() => setAlert({ ...alert, isAlert: false })}
            >
              <Close fontSize="small" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Notify;
