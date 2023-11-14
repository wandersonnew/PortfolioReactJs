import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Experiencia() {
    return (
        <>
            <Card>
                <Card.Header className="text-center">Experiência Profissional</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        
                                <div> <b>Santa Casa de Misericórdia de Sobral</b>
                                    <span style={{float: "right"}}> <b>2021 - 2023</b> </span>
                                </div>
                                <div>Programador
                                    <span style={{float: "right"}}>Sobral - CE</span>
                                </div>

                                <ul className='mt-4'>
                                    <li>
                                        Suporte remoto e presencial aos usu ́arios dos sistemas.
                                    </li>
                                    <li>
                                        Levantamento e análise de requisitos. Implementações de novos softwares e correções ou atualizações nos sistemas.
                                    </li>
                                    <li>
                                        Planejamento e criação de bancos de dados, e desenvolvimento de relatórios personalizados.
                                    </li>
                                    <li>
                                        Desenvolvimento de sistemas com as tecnologias HTML, Javascript, CSS e PHP, bancos de dados Oracle DB, SQL
                                        Server, MySQL, Firebird.
                                    </li>
                                </ul>

                                <hr />

                                <div> <b>Unimed</b>
                                    <span style={{float: "right"}}> <b>2023 - Exercendo</b> </span>
                                </div>
                                <div>Analista de Sistemas
                                    <span style={{float: "right"}}>Sobral - CE</span>
                                </div>
                                
                                
                                
                                
                                
                            
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>   
        </>
    )
}