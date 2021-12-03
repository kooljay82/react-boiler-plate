import React from 'react';
import PropTypes from 'prop-types';

const Welcome = function ({ message }) {
  return (
    <>
      <div>
        <p>{message}</p>
      </div>
    </>
  );
};

Welcome.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Welcome;
