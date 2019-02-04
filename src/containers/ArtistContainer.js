import React, { Component } from 'react';
import { fetchArtistInfo } from '../actions/singleArtistActions';
import { connect } from 'react-redux';
import SingleArtist from './../components/singleArtist/singleArtist';


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

        const { artist } = this.props;
        return  (
            <SingleArtist 
                artist={artist}
            />
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
  
export default connect(mapStateToProps)(Artist);