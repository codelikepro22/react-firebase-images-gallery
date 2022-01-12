import { Add } from '@mui/icons-material';
import { Fab, Input } from '@mui/material';
import { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from '../user/Login';

const Form = ({ setFiles }) => {
  const { currentUser, setModal } = useAuth();
  const fileRef = useRef();

  const handleClick = () => {
    if (!currentUser) {
      return setModal({ isOpen: true, title: 'Login', content: <Login /> });
    }

    fileRef.current.click();
  };

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    fileRef.current.value = null;
  };
  return (
    <form>
      <Input
        type="file"
        inputProps={{ multiple: true }}
        sx={{ display: 'none' }}
        inputRef={fileRef}
        onChange={handleChange}
      />
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <Add fontSize="large" />
      </Fab>
    </form>
  );
};

export default Form;
