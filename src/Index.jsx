import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';

export default function Index() {
    const [conteudo, setConteudo] = useState(<Sobre />);


    return (
        <>
        <Container>

            <Row>
                <Col>
                    <h1 className="display-4 text-center">WANDERSON DUARTE ALVES</h1>
                </Col>
            </Row>
            
            <Row>
                <Col xs={4}>
                <Card>
                    <Card.Img variant="top" src="./img/perfil.png" />
                    <Card.Body>
                        <Card.Title>Analista de Sistemas</Card.Title>
                        <Card.Text>
                            ReactJS | Laravel | Flask | Visão Computacional
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" onClick={() => setConteudo(<Sobre />)}>
                                    Sobre mim
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" onClick={() => setConteudo(<Experiencia />)}>
                                    Experiência Profissional
                                </Button>
                            </div>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Card.Link href="https://www.linkedin.com/in/wanderson-duarte-alves-810325177/">
                                <Image src="./img/linkedin.png" fluid  style={{width: 30}} />
                                wanderson-duarte-alves-810325177
                            </Card.Link>
                        </div>
                        {/* <div className="d-grid gap-2">
                            <Card.Link href="#">
                            </Card.Link>
                        </div> */}

                        <hr />

                        <div className="d-grid gap-2">
                            <Link to="/mensagem">Enviar Mensagem</Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col>{conteudo}</Col>
            </Row>
        </Container>
        </>
    )
}