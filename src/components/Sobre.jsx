import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Sobre() {
    return (
        <>
            <Card>
                <Card.Header className="text-center">Sobre mim</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        <p>Desenvolvedor Web Full Stack com mais de 2 (dois) anos de experiência.</p>

                            
                    </Card.Text>    
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>   
        </>
    )
}