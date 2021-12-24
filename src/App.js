import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import Upload from './components/upload/Upload';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
      <Nav />
      <Upload />
      <ImagesList />
    </Container>
  );
}

export default App;
