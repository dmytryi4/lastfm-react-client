import React, { Component } from 'react';
import { fetchArtistInfo } from '../actions/singleArtistActions';
import { connect } from 'react-redux';
import SingleArtist from './../components/singleArtist/singleArtist';
import { withRouter } from 'react-router-dom';
class Artist extends Component {

    componentDidMount() {
        const name = this.props.match.params.name || '';
        this.props.dispatch( fetchArtistInfo( encodeURIComponent(name) ) );
    }

    componentDidUpdate(prevProps) {
        const prevName = prevProps.match.params.name;
        const name = this.props.match.params.name || '';
        if (prevName !== name) {
            this.props.dispatch( fetchArtistInfo( encodeURIComponent(name) ) );
        }
    }

    render (){

        const { error, artist } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        return  (
            <SingleArtist 
                artist={artist}
            />
        );
    }
}

function mapStateToProps(state ){
    return {
        loading: state.singleArtistReducer.loading,
        error: state.singleArtistReducer.error,
        artist: state.singleArtistReducer.artist
    }
}
  
export default withRouter( connect(mapStateToProps)(Artist) );