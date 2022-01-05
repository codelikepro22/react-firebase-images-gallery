import { Backdrop, CircularProgress } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Loading = () => {
  const { loading } = useAuth();
  return (
    <Backdrop
      open={loading}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 999 }}
    >
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
};

export default Loading;
