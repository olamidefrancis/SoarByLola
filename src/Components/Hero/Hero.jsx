
import './Hero.css'
import video1 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.32.53.mp4'
import video2 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.29.58.mp4'
import video3 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.33.44.mp4'

const Hero=()=> {
    return (
        <div className="heroContainer">
            <div className="heroContainer___video1">
               
                <video src={video1} autoPlay muted loop playsInline  className="heroVideo">

                </video>
            </div>
            <div className="heroContainer___video2">
                <video src={video2} autoPlay muted loop playsInline  className="heroVideo">

                </video>
            </div>
            <div className="heroContainer___video3">
                <video src={video3} autoPlay muted loop playsInline  className="heroVideo" >

                </video>
            </div>

        </div>
    )
}

export default Hero
