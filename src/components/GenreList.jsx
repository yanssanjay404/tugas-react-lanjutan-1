import { ListGroup } from 'react-bootstrap';

export default function GenreList({ genres }) {
  return (
    <div className="mt-4">
      <h5>Genre List</h5>
      <ListGroup>
        {genres.map((genre) => (
          <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
