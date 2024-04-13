import CarouselHeader from "../components/Carousel"
import News from "../components/News"

export default function Home() {
    return (
        <>
            <CarouselHeader />
            <div>
                <h2 className="m-4">NEWS</h2> 
            </div>
            <News/>
        </>
    )
}