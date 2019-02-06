import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Icon from '@mdi/react'
import {  mdiShare, mdiPlay } from '@mdi/js';
import './topTracksList.scss';

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
                            <img src={ track.image.length ? track.image[3]['#text'] : 'https://via.placeholder.com/300' }  alt={track.name} className="top-playlist_photo"/>
                            <div className="top-playlist__icon"><Icon path={mdiPlay} size={'22px'} color="#fff" ></Icon></div>
                          </div>
                          <div className="top-playlist__content">
                              <h3>{track.name.toLowerCase()}</h3>
                              <div className="top-playlist__author-name">
                                    <Link to={`/singleArtist/${track.artist.name}`}>{track.artist.name}</Link>
                              </div>
                              <a 
                                href={track.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="top-playlist__last-fm-link"
                              >
                              Go to last.fm
                              <Icon path={mdiShare} size={'12px'}/>
                              </a>
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