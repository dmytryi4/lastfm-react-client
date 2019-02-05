import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import { Icon } from '@mdi/react';
import { mdiShare } from '@mdi/js'

import './similarArtists.scss'

class SimilarArtist extends Component {

    render(){
        const similarArtist = this.props.similar.artist;
        const params = {
            slidesPerView: 4,
            spaceBetween: 30,
            observer: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                400: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };
                
        return (
            <div className="similar-artists">
                <Container>
                    <Row>
                        <Col>
                            <Swiper {...params} shouldSwiperUpdate>
                                {similarArtist.map( artist => (
                                    <div key={artist.name} className="similar-artists__item">
                                        <Link to={`/singleArtist/${artist.name}`}>
                                            <img src={artist.image[5]['#text']} alt={artist.name}/>
                                        </Link>
                                        <div className="similar-artists__content">
                                            <h3 className="similar-artists__name">
                                                <Link to={`/singleArtist/${artist.name}`}> {artist.name}</Link>
                                            </h3>
                                            <a 
                                                href={artist.url} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="top-playlist__last-fm-link"
                                            >
                                            Go to last.fm
                                            <Icon path={mdiShare} size={'12px'}/>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SimilarArtist;
