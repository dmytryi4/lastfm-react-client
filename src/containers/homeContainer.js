import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import TopTrackslist from '../components/topTracksList/topTracksList';
import { fetchTopTracks } from '../actions/topTrackActions';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Preloader from '../components/preloader/preloader';

class Home extends Component {

  constructor(props){
    super(props);

    // this.LoadMorehandler = this.LoadMorehandler.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchTopTracks(1, 12));
  }

  // LoadMorehandler (page) {
  //   this.props.dispatch(fetchTopTracks(2, 12));
  // }

  render() {
    const { loading, error, tracks } = this.props;
    console.log( this.props );

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <Preloader/>;
    }

    return (
      <Fragment>
          <Container className="title-container">
            <Row>
              <Col><h3 className="title-section">Most Popular Tracks</h3></Col>
            </Row>
          </Container>
          <TopTrackslist tracks={tracks}/>
          <Button variant="primary">Load More</Button>
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
