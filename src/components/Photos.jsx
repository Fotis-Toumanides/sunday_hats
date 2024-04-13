import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { photos } from '../assets/data';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import MydModalWithGrid from '../ui/PhotoShow';
import Modal from 'react-bootstrap/Modal';

export default function Photos() {
    
    const [pic, setPic] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function handleShow(picture){ 
        setShow(true)
        setPic(picture)
    };

    return(
        <Container className='mt-4'>
        <h2>PHOTOS</h2>
            <Row>
                {photos.map((photo) => {
                    return(
                        <Col key={photo.id} xs={12} md={6} lg={4} className='my-2 w-25 photo-hover' onClick={() => handleShow(photo.pic)}>
                            <Image src={photo.pic} fluid rounded />
                        </Col>
                    )
                })}
                
                <Modal size='lg' show={show} onClick={handleClose} onHide={handleClose}>
                    <Modal.Body>
                        <Image src={pic} fluid />
                    </Modal.Body>
                </Modal>
            </Row>
        </Container>
    )
}