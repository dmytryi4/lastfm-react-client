import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SimilarArtists from '../similarArtists/similarArtists';
import { Link } from 'react-router-dom';

import './singleArtist.scss';

class SingleArtist extends Component {

    _renderMarkup( content ){
        return { __html: content };
    }

    render (){

        const { name, bio, tags, similar, image } = this.props.artist;
        const tagsArray = tags.tag;
        const photo = image != undefined ? image[5]['#text'] : 'https://via.placeholder.com/300';

        return  (
            <Fragment>
                <Container className="single-artist">
                    <Row className="single-artist__back-home">
                        <Col>
                            <Link to="/"><Button variant="primary">Back to Home</Button></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="single-artist__image-wrapper">
                            <img src={photo} alt={name} className="single-artist__image"/>
                        </Col>
                        <Col xs={12} md={9}>
                            <h3 className="single-artist__name">{name}</h3>
                            <div className="single-artist__content" dangerouslySetInnerHTML={ this._renderMarkup( bio.content) }/>
                            {/* <p>{bio.content}</p> */}
                            <div className="single-artist__tags">
                                {tagsArray.map(tag => (
                                    <a key={tag.name} className="single-artist__tag" href={tag.url}>{tag.name}</a>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <SimilarArtists similar={similar}/>
            </Fragment>
        );
    }
}
 
export default SingleArtist;