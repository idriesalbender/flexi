import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, fullWidth }) => (
  <div className={[`o-container`, fullWidth ? 'o-container--full-width' : ''].join(' ').trim()}>
    {children}
  </div>
);

Container.defaultProps = {
  fullWidth: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

export default Container;
