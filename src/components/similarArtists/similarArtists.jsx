import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';

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
                480: {
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
                                        <img src={artist.image[5]['#text']} alt={artist.name}/>
                                        <Link to={`/singleArtist/${artist.name}`}> <h3 className="similar-artists__name">{artist.name}</h3></Link>
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
