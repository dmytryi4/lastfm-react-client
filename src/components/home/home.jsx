import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Playlist from './../topTracks/topTracksList';
import { fetchTopTracks } from './../../actions/topTrackActions';

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(fetchTopTracks(1, 12));
  }

  render() {
    const { tracks } = this.props;

    console.log(this.props );
    console.log( tracks["@attr"].page );
    console.log( tracks["@attr"].perPage );
    console.log( tracks["@attr"].total );
    
    return (
      <Fragment>
        <Container>
          <Playlist tracks={tracks}/>
        </Container>;
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

export default connect(mapStateToProps)(Home);
// export default withRouter(connect(mapStateToProps)(Home))
