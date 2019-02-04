import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.scss';
import logo from './../../logo.png';

const Header = () => {
    return (
        <header>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col>
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;