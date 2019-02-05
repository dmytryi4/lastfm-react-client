import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.scss';
import logo from './../../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col>
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;