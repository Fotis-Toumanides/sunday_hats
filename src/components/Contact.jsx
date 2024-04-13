import Image from 'react-bootstrap/Image';
import BandForest from '../assets/sh-forest.jpg';

export default function Contact() {
    return(
        <div>
        <h2 className='mt-4'>CONTACT</h2>
            <Image src={BandForest} width={500} fluid rounded className='m-4'/>
            <h4 className='p-4'>Contact us at: <strong>sundayhats@yahoo.com</strong></h4>
        </div>
    )
}