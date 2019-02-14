import React from 'react';
import PropTypes from 'prop-types';

const USP = ({ title, description }) => (
  <>
    <h6 align="center" className="mdc-typography--headline6 mdc-theme--secondary u-my--0">
      {title}
    </h6>
    <p align="center" className="mdc-typography--body1 mdc-theme--secondary u-mt--8">
      {description}
    </p>
  </>
);

USP.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default USP;
