import './App.css';

function Section2() {
    return (
        <section>
            <div className="service_area">
                <div className="service-container">
                    <div className="service-main ">
                        <div className="service-sub">
                            <div className="section-title">
                                <h3>Services for every dog</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-ext-sub">
                            <div className="single-service">
                                <div className="service_thumb">
                                    <div className="service-icon">
                                        <img src="/image/service_icon_1.png.webp" alt="Service Icon" />
                                    </div>

                                </div>
                                <div className="service_content">
                                    <h3>Pet Boarding</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-ext-sub">
                            <div className="single-service active">
                                <div className="service_thumb">
                                    <div className="service-icon">
                                        <img src="image/service_icon_2.png.webp" alt="" />
                                    </div>
                                </div>
                                <div className="service_content">
                                    <h3>Healthy Meals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-ext-sub">
                            <div className="single-service">
                                <div className="service_thumb">
                                    <div className="service-icon">
                                        <img src="image/service_icon_3.png.webp" alt="" />
                                    </div>
                                </div>
                                <div className="service_content">
                                    <h3>Pet Spa</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section2;