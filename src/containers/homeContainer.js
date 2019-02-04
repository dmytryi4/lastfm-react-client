import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import TopTrackslist from '../components/topTracksList/topTracksList';
import { fetchTopTracks } from '../actions/topTrackActions';

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(fetchTopTracks(1, 12));
  }

  render() {
    const { tracks } = this.props;

    return (
      <Fragment>
          <TopTrackslist tracks={tracks}/>
      </Fragment>
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

export default connect(mapStateToProps)(Home);
