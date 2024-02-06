import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const MoviesList = ({ children }) => {
  return <ul>{children}</ul>;
};

// Dodajemy propTypes
MoviesList.propTypes = {
  children: PropTypes.node, // Definiujemy, że children może być dowolnym elementem renderowalnym
};

export default MoviesList;
