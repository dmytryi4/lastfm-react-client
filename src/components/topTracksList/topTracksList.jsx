import React, { Component, Fragment } from 'react';
import './topTracksList.css';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { fetchTopTracks } from './../../actions/topTrackActions';
import { connect } from 'react-redux';

class TopTrackslist extends Component {
  
   render(){
        const tracks = this.props.tracks.track;

        return (
          <Fragment>
            <Container>
                <Row className="top-playlist top-playlist-wrapper">
                      {tracks.map(track => (
                        <Col xs={6} md={3} key={track.name} className="top-playlist__item">
                          <div className="top-playlist__image">
                            <img src={ track.image.length ? track.image[3]['#text'] : 'https://via.placeholder.com/300' } className="top-playlist_photo"/>
                          </div>
                          <div className="top-playlist__content">
                              <h3>{track.name}</h3>
                              <div className="top-plyalist__author-name">
                                  <h4><a href={track.url} target="_blank">LastFmLink</a></h4>
                                  <Link to={`/singleArtist/${track.artist.name}`}>{track.artist.name}</Link>
                              </div>
                          </div>
                        </Col>
                        )
                      )}
                </Row>
              </Container>
          </Fragment>
        );
    }
}

export default TopTrackslist;