import { bandNews } from "../assets/data";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

export default function News() {
    return(
        <Container>
            <Row>
                {bandNews.map((bandNew) => {
                    return(
                        <Col key={bandNew.id} sm={12} md={6} lg={4} className='my-2' >
                            
                            <Card border="0"  >
                                <Card.Img variant="top" src={bandNew.pic}   />
                                <Card.Body>
                                <Card.Title>{bandNew.caption}</Card.Title>
                                <Card.Text>
                                    {bandNew.description}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{bandNew.date}</small>
                                </Card.Footer>
                        </Card>

                        </Col>
                    )
                })}
                
                
            </Row>
        </Container>
    )
}