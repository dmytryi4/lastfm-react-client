import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import TopTrackslist from '../components/topTracksList/topTracksList';
import { fetchTopTracks } from '../actions/topTrackActions';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  
  componentDidMount(){
    this.props.dispatch(fetchTopTracks(
      this.props.tracks['@attr'].page, 
      this.props.tracks['@attr'].perPage ));
  }

  render() {
    const {  error, tracks } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <Fragment>
          <Container className="title-container">
            <Row>
              <Col><h3 className="title-section">Most Popular Tracks</h3></Col>
            </Row>
          </Container>
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

export default withRouter(connect(mapStateToProps)(Home) );
