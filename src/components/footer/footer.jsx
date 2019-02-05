import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.scss';
import footerLogo from './../../footer-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className="footer__logo">
                                <img src={footerLogo} alt=""/>
                            </div>
                            <div className="footer__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                                Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </div>
                        </Col>
                        <Col xs={6} sm={2}>
                            <h3 className="footer__title">Usefull Links</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Music</a></li>
                                <li><a href="/">Live</a></li>
                                <li><a href="/">Charts</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={2}>
                            <h3 className="footer__title">Follow Us</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Youtube</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={2}>
                            <h3 className="footer__title">Help</h3>
                            <ul>
                                <li><a href="/">Customer Support</a></li>
                                <li><a href="/">Track my music</a></li>
                                <li><a href="/">Community support</a></li>
                                <li><a href="/">Community guidelines</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={2}>
                            <h3 className="footer__title">Account</h3>
                            <ul>
                                <li><a href="/">Inbox</a></li>
                                <li><a href="/">Settings</a></li>
                                <li><a href="/">Subscribe</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row className="justify-content-center text-center">
                        <div className="footer__copyright">All Rights Reserved. Powered by Podolski</div>
                    </Row>
                </Container>
            </div>
           

        </footer>
    )
}

export default Footer;