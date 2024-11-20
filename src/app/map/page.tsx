import App from '@/components/MapComponent';
import { Container } from 'react-bootstrap';

const MapPage = () => (
  <Container className="justify-content-center">
    <h1 className="text-center p-4">Need Directions?</h1>
    <App />
  </Container>
);

export default MapPage;
