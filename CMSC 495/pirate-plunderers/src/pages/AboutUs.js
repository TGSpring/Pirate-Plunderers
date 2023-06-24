import background from "../images/about_us_background.mp4";
import BackButton from "../components/BackButton";

const AboutUs = () => {

    return (
        <>
            <video autoPlay loop muted className="bg-vid">
                <source src={background} type="video/mp4" />
            </video>
            <div className="container">
                <div className="main-content-top">
                    <h1>Meet the team</h1>
                </div>

                <div className="main-content-bottom">
                    <div className="section-container">
                        <div>
                            <h5>Ryan</h5>
                        </div>
                        <div>
                            <h5>Benjamin</h5>
                        </div>
                        <div>
                            <h5>Tyler</h5>
                        </div>
                        <div>
                            <h5>Angelo</h5>
                        </div>
                    </div>
                </div>
                <div className="button-section">
                    <div>
                        <BackButton />
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutUs;