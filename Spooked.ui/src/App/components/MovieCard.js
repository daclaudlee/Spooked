import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import MovieDetailModal from './MovieDetailModal';

function MovieCard({ movieObj }) {
  return (
    <div>
  <Card color='dark' className='movieCard'>
    {
      movieObj.watched === true
        ? <div className='favBtn'>
            <i className='fas fa-heart fa-2x' style={{ color: 'orangered' }}></i>
          </div>
        : ''
    }

    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
    />
    <MovieDetailModal
      movieObj={movieObj}
    />
  </Card>
</div>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.object
};

export default MovieCard;
