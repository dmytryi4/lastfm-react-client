import React, { Component } from 'react';
import { fetchArtistInfo } from '../../actions/singleArtistActions';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import SimilarArtist from '../similarArtist/similarArtist';
import { Link } from 'react-router-dom';


class SingleArtist extends Component {

    componentDidMount() {
        const name = this.props.match.params.name || '';
        this.props.dispatch( fetchArtistInfo( name ) );
    }

    _renderMarkup( content ){
        return { __html: content };
    }

    render (){

        const { artist } = this.props;
        const { name, bio, tags, similar, image } = artist;
        const tagsArray = tags.tag;
        const photo = image != undefined ? image[5]['#text'] : 'https://via.placeholder.com/300';

        return  (
            <Container className="single-artist">
                <Row>
                    <Col>
                        <Link to="/">Back to Home</Link>
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
                <Row>
                    <SimilarArtist similar={similar}/>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state ){
    // console.log( state );
    return {
        loading: state.singleArtistReducer.loading,
        error: state.singleArtistReducer.error,
        artist: state.singleArtistReducer.artist
    }
}
  
export default connect(mapStateToProps)(SingleArtist);