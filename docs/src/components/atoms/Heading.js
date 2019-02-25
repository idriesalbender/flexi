import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, size, ...rest }) => {
  const Header = `h${size}`;
  return (
    <Header className={`mdc-typography--headline${size} mdc-theme--secondary`} {...rest}>
      {children}
    </Header>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Heading;
