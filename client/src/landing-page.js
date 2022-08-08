import Banner from "./bannerImg.png"
import "./landing-page.css"
import { Link } from "react-router-dom"

const LandingPage= () =>{
    return (
        <>
        <div className="landing-container">
            <img src={Banner} alt="BannerImage"></img>
            <div className="banner-name">
            <h2>
                10x Team 04
            </h2>
            <Link to="/postview"><button >Enter</button></Link>
            </div>
        </div>
        </>
    )
}
export default LandingPage;