import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cardapp = () => {

  const style= {

image:{
width:20,
height:20,

}

  }
  return (
    
    <>
    
    <div  className='container'  >

    <Card style={{ width: '18rem' }}>
    
     <Card.Img variant="top" src="./image/chocolate.jpeg" />
     
      <Card.Body>
        <Card.Title style={{fontSize:20,}}>Cup Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </div>

</>
  )
}

export default Cardapp