import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => (
  <p className="mdc-typography--body1 u-my--16">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
