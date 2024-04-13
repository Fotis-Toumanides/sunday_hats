import BandForest from '../assets/sh-forest.jpg'
export default function NotFound(){
    return(
        <div>
            <img src={BandForest} width={500} fluid rounded className='mt-4'/>
            <h4>Page Not Found</h4>
        </div>
    )
}