import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SimilarArtists from '../similarArtists/similarArtists';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiTag } from '@mdi/js'

import './singleArtist.scss';


class SingleArtist extends Component {

    _renderMarkup( content ){
        return { __html: content };
    }

    render (){

        const { name, bio, tags, similar, image } = this.props.artist;
        const tagsArray = tags.tag;
        const photo = image !== undefined ? image[5]['#text'] : 'https://via.placeholder.com/300';

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
                            <div className="single-artist__rectangle">
                                <img src={photo} alt={name} className="single-artist__image"/>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            <h3 className="single-artist__name">{name}</h3>
                            <div className="single-artist__content" dangerouslySetInnerHTML={ this._renderMarkup( bio.summary) }/>
                            {/* <p>{bio.content}</p> */}
                            <div className="single-artist__bottom">
                                <h3><Icon path={mdiTag} size={'15px'}></Icon> Tags:</h3>
                                <div className="single-artist__tags">
                                    {tagsArray.map(tag => (
                                        <a key={tag.name} className="single-artist__tag" href={tag.url}>{tag.name}</a>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="title-container">
                    <Row>
                        <Col><h3 className="title-section">Similar Artists</h3></Col>
                    </Row>
                </Container>
                <SimilarArtists similar={similar}/>
            </Fragment>
        );
    }
}
 
export default SingleArtist;