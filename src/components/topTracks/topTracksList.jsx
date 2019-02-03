import React, { Component, Fragment } from 'react';
import './topTracksList.css';
import { Link } from 'react-router-dom';
import {Pagination, Col, Row} from 'react-bootstrap';
import { fetchTopTracks } from './../../actions/topTrackActions';
import { connect } from 'react-redux';

class Playlist extends Component {

    componentDidMount(){
      this.props.dispatch(fetchTopTracks(1, 12));
    }
    
    onClick ( page, limit ) {
      this.props.dispatch(fetchTopTracks(page, limit));
    }

    render(){
        const tracks = this.props.tracks.track;

        let active = 2;
        // const totalPages = tracks["@attr"].totalPages / tracks["@attr"].total;
        let items = [];
        for (let number = 1; number <= 20; number++) {
          items.push(
            <Pagination.Item 
              key={number} 
              // active={number === active}
              onClick = { (event) => {
                this.onClick(number, 12);
              }} 
            >
              {number}
            </Pagination.Item>,
          );
        }

        return (
          <Fragment>
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
            <Row><Pagination>{items}</Pagination></Row>
          </Fragment>
        );
    }
}

function mapStateToProps(state ){
  // console.log( state );
  return {
    loading: state.topTrackReducer.loading,
    error: state.topTrackReducer.error,
    tracks: state.topTrackReducer.tracks
  }
}

export default connect(mapStateToProps)(Playlist);