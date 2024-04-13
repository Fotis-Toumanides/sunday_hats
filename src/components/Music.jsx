import { spotis } from "../assets/data";

export default function Music() {
    return(
        <div class="container">
  <div class="row justify-content-center">
  <div class="col-12 col-sm-10">
        {spotis.map((spoti) => {
            return( 
                    
            <iframe 
                key={spoti.id} 
                style={{'borderRadius':'12px'}} 
                src={spoti.url} 
                
                height="auto" 
                frameBorder="0" 
                className="mt-2 mx-2 " 
                allowFullScreen="" 
                allow="autoplay; 
                clipboard-write; 
                encrypted-media; 
                fullscreen; 
                picture-in-picture" 
                loading="lazy"
            >
            </iframe>)
            
        })}
        </div>  
        </div>
        </div>
        
    )
}