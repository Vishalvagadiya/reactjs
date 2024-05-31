import './App.css';

function Footer(){
    return(        
        <footer className="footer">
            <div className="footer_top">
                <div className="footer-container">
                    <div className="footer-sub">
                        <div className="footer-ext-sub">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Contact Us
                                </h3>
                                <ul className="address_line">
                                    <li>+555 0000 565</li>
                                    <li><p >Demomail@gmail.Com</p></li>
                                    <li>700, Green Lane, New York, USA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-ext-sub">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Our Servces
                                </h3>
                                <ul className="links">
                                    <li><p >Pet Insurance</p></li>
                                    <li><p >Pet surgeries </p></li>
                                    <li><p >Pet Adoption</p></li>
                                    <li><p >Dog Insurance</p></li>
                                    <li><p >Dog Insurance</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-ext-sub">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Quick Link
                                </h3>
                                <ul className="links">
                                    <li><p >About Us</p></li>
                                    <li><p >Privacy Policy</p></li>
                                    <li><p >Terms of Service</p></li>
                                    <li><p >Login info</p></li>
                                    <li><p >Knowledge Base</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-ext-sub ">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <p >
                                        <img src="image/logo.png.webp" alt=""/>
                                    </p>
                                </div>
                                <p className="address_text">239 E 5th St, New York
                                    NY 10003, USA
                                </p>
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <p >
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </p>
                                        </li>
                                        <li>
                                            <p >
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </p>
                                        </li>
                                        <li>
                                            <p >
                                                <i className="fa-brands fa-google-plus-g"></i>
                                            </p>
                                        </li>
                                        <li>
                                            <p >
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="copy-right-container">
                    <div className="copy-right-main"></div>
                    <div className="copy-right-sub">
                        <div className="copy-right-ext-sub">
                            <p className="copy_right">
                                Copyright © Anipat at 2024
                                All rights reserved | This template is made with
                                <i className="fa-regular fa-heart"></i> by
                                <p >Vishal Vagadiya</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;