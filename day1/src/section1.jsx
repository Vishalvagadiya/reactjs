import './App.css';

function Section1(){
    return(
        <section>
        <div className="slider-area">
            <div className="head-back">
                <div className="slider-container">
                    <div className="slider-main">
                        <div className="slider-sub">
                            <div className="slider_text">
                                <h1>We Care <br/> <span>Your Pets</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod.</p>
                                <p className="contact-button">Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dog-thumb">
                    <img src={"./image/dog.png.webp"} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}
export default Section1;