import React from 'react';
import './main.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="max-width">
                <div className="footer-container">
                    <div className="footer-contact">
                        <h3>Bryan Stephens</h3>
                        <a href="mailto:contact@bryanstephens.ca">contact@bryanstephens.ca</a>
                        <p className="preamble">
                            I’m a Web Developer living in Toronto, Canada. I build accessibile web applications.
                        </p>
                    </div>
                    <div className="footer-menus">
                        <div className="footer-main-menu">
                            <h4>Menu</h4>
                            <ul>
                                <li>
                                    <a href="#AboutMe">About</a>
                                </li>
                                <li>
                                    <a href="#Services">Services</a>
                                </li>
                                {/* <li>
                                    <a href="#">Privacy</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="footer-online-menu">
                            <h4>Online</h4>
                            <ul>
                                <li>
                                    <a href="https://github.com/stephens-bryan">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/bryan-stephens-48544a111/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-contact-menu">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="mailto:contact@bryanstephes.ca">contact@bryanstephens.ca</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-breakline">
                        <br />
                    </div>
                    <div className="footer-copyright">
                        <p>{new Date().getFullYear()} Bryan Stephens</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;