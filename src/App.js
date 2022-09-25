import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className='container d-flex flex-column justify-content-center pt-5' >
      <a href="https://gomycode.com" target={"_blank"}><img src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp" alt=""/> </a> 
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{"color": "white"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{"color": "white"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" style={{"color": "black"}}/>
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <h2 className='mx-auto' style={{"color": "white"}}>Realised by <a href="https://github.com/AnasBeast" target={"_blank"} style={{"textDecoration": "none", "color": "red"}}>AnasBeast</a></h2>
    </div>
  );
}

export default App;