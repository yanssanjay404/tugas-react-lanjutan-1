import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { genres as initialGenres, authors as initialAuthors } from './data';
import GenreForm from './components/GenreForm';
import GenreList from './components/GenreList';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';

function App() {
  const [genres, setGenres] = useState(initialGenres);
  const [authors, setAuthors] = useState(initialAuthors);

  const addGenre = (genre) => {
    setGenres([...genres, { id: Date.now(), ...genre }]);
  };

  const addAuthor = (author) => {
    setAuthors([...authors, { id: Date.now(), ...author }]);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Panel: Genre & Author</h2>
      <Row>
        {/* Beri jarak bawah saat mobile */}
        <Col md={6} className="mb-4">
          <Card body>
            <GenreForm onAdd={addGenre} />
            <GenreList genres={genres} />
          </Card>
        </Col>

        <Col md={6}>
          <Card body>
            <AuthorForm onAdd={addAuthor} />
            <AuthorList authors={authors} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
