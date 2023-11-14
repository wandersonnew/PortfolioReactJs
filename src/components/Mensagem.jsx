import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

export default function Mensagem() {
    return (
        <Container>
            <h1 className='display-4 text-center mb-4'>Enviar Mensagem</h1>

            <div className='mb-4'>
                <Link to="/">
                    <Image src="./img/back.png" fluid  style={{width: 30}} />
                </Link>
            </div>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Enviar
                    </Button>
                </div>
            </Form>
        </Container>
    )
}