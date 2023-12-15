import { Container } from '@mui/material';
import DenseAppBar from './components/DenseAppBar';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
export const App = () => {
  return (
    <>
      <DenseAppBar />
      <Container>
        <Formulario />
      </Container>
      <Footer />
    </>
  );
};
