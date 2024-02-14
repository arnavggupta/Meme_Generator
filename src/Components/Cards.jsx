import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Cards(props) {
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"15px" , marginBottom:"15px"}}>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
       
        <Button onClick={() => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
  
  );
}

export default Cards;