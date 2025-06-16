import { ListGroup } from 'react-bootstrap';

export default function AuthorList({ authors }) {
  return (
    <div className="mt-4">
      <h5>Author List</h5>
      <ListGroup>
        {authors.map((author) => (
          <ListGroup.Item key={author.id}>{author.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
