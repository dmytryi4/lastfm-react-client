import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SimilarArtist extends Component {

    render(){
        const similarArtist = this.props.similar.artist;
        
        console.log( similarArtist );
        return (
            <Container>
                <Row>
                    {similarArtist.map( artist => (
                        <Col key={artist.name} xs={6} md={3} className="similar-artist">
                            <img src={artist.image[5]['#text']} alt={artist.name}/>
                            <h3 className="similar-artist__name">{artist.name}</h3>
                            <Link to={`/singleArtist/${artist.name}`}>{artist.name}</Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default SimilarArtist;
