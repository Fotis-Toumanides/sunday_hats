import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fotis from '../assets/fotis.jpg';
import Maria from '../assets/maria.jpg';
import Nick from '../assets/nick.jpg';
import SHband1 from '../assets/sh-onstage.jpg';
import SHband2 from '../assets/sh-onstage3.jpg';

export default function CarouselHeader() {
  const imageStyle = {
    width: '100%', // Set the width to 100% to make the image responsive
    height: '640px', // Set the height as desired
    objectFit: 'cover', // Maintain aspect ratio and cover entire space
  };

    return (
    <Carousel fade className='mt-4'>
      <Carousel.Item>
      <img
      style={imageStyle}
      src={Fotis} // Use the imported image
      alt="Fotis Toumanides"
    />
        <Carousel.Caption>
          <h3>Fotis - Bass & Vocals</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={imageStyle}
      src={Maria} // Use the imported image
      alt="Mary Sypoula"
    />
        <Carousel.Caption>
          <h3>Mary - Keys & Vocals</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={imageStyle}
      src={Nick} // Use the imported image
      alt="Nick Kaklanis"
    />
        <Carousel.Caption>
          <h3>Nick - Drums</h3>         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={imageStyle}
      src={SHband1} // Use the imported image
      alt="Sunday Hats Live"
    />
        <Carousel.Caption>
          <h3>On Stage</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={imageStyle}
      src={SHband2} // Use the imported image
      alt="Sunday Hats Live"
    />
        <Carousel.Caption>
          <h3>On Stage</h3>         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
