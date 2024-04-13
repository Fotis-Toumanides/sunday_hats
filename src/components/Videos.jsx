import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { youtubes } from '../assets/data';
import thub from '../assets/devilsdaughter-thub.jpg';
import { useState } from 'react';
import Ratio from 'react-bootstrap/Ratio';

export default function ShowVideo(){
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/izue4hG5ECI?si=NbZ-TxSMxY3Jy3Pb');

    function handleShowVideo(url){
        setVideoUrl(url)
    }
    return(
        <Container fluid className='d-flex flex-sm-column'>
        <Row className='d-flex flex-column flex-md-row justify-content-end'>
        <Col>
        
        <div style={{ maxWidth: 800, height: 'auto' }} className='mt-4'>
        <Ratio aspectRatio="16x9">
        <iframe 
            className="embed-responsive-item" 
            src={videoUrl}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            loading="lazy"
        >
        
        </iframe>
        </Ratio>
        </div>
        </Col>
        <Col>
        <ul>
            {youtubes.map((youtube) => {
                return(                                 
                        <li className='d-flex m-2 p-2 align-middle border' key={youtube.id} onClick={() => handleShowVideo(youtube.url)}>
                            <Image className='px-4 w-50 h-50 m-w-300' src={youtube.thub} style={{'borderRadius':'12px'}} />
                            <div className='text-start'>
                            <p className='m-2 fs-md-4'>{youtube.title}</p>
                            <p className='m-2 fs-md-6'>{youtube.time}</p>
                            </div>
                            
                        </li>                   
                )
            })}
            </ul>  
            </Col>
            </Row>
        </Container>
    )
}