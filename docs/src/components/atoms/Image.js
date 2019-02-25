import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ children, description }) => (
  <figure className="u-my--24">
    {children}
    {description ? (
      <figcaption className="mdc-typography--caption">{description}</figcaption>
    ) : null}
  </figure>
);

Image.defaultProps = {
  description: null,
};

Image.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Image;
