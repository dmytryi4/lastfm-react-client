import React, { Component } from 'react';
import { fetchTopTracks } from '../actions/topTrackActions';
import { connect } from 'react-redux';
import TopTrackslist from '../components/topTracksList/topTracksList';

class TopTrackslistContainer extends Component {

    componentDidMount(){
      this.props.dispatch(fetchTopTracks(1, 12));
    }
    
    onClick ( page, limit ) {
      this.props.dispatch(fetchTopTracks(page, limit));
    }

    render(){
        const tracks = this.props.tracks.track;

        return (
           <TopTrackslist tracks={tracks} />
        );
    }
}

function mapStateToProps(state ){
  return {
    loading: state.topTrackReducer.loading,
    error: state.topTrackReducer.error,
    tracks: state.topTrackReducer.tracks
  }
}

export default connect(mapStateToProps)(TopTrackslistContainer);