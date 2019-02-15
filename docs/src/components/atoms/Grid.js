import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({
  children,
  noGutter,
  className,
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  alignXl,
}) => {
  const CLASSLIST = [
    'o-grid',
    noGutter ? 'o-grid--no-gutter' : '',
    alignXs ? `o-grid-xs-align-items--${alignXs}` : '',
    alignSm ? `o-grid-sm-align-items--${alignSm}` : '',
    alignMd ? `o-grid-md-align-items--${alignMd}` : '',
    alignLg ? `o-grid-lg-align-items--${alignLg}` : '',
    alignXl ? `o-grid-xl-align-items--${alignXl}` : '',
  ];

  return (
    <div className={`${className} ${CLASSLIST.join(' ').replace('  ', ' ')}`.trim()}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  noGutter: false,
  className: '',
  alignXs: null,
  alignSm: null,
  alignMd: null,
  alignLg: null,
  alignXl: null,
};

Grid.propTypes = {
  className: PropTypes.string,
  alignXs: PropTypes.string,
  alignSm: PropTypes.string,
  alignMd: PropTypes.string,
  alignLg: PropTypes.string,
  alignXl: PropTypes.string,
  children: PropTypes.node.isRequired,
  noGutter: PropTypes.bool,
};

export default Grid;
