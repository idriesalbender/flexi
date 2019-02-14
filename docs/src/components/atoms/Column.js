import React from 'react';
import PropTypes from 'prop-types';

const Column = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  alignXl,
  alignContentXs,
  alignContentSm,
  alignContentMd,
  alignContentLg,
  alignContentXl,
  className,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
}) => {
  const CLASSLIST = [
    `o-col-xs-${xs}`,
    sm ? `o-col-sm-${sm}` : '',
    md ? `o-col-md-${md}` : '',
    lg ? `o-col-lg-${lg}` : '',
    xl ? `o-col-xl-${xl}` : '',
    offsetXs ? `o-col-xs-offset-${offsetXs}` : '',
    offsetSm ? `o-col-sm-offset-${offsetSm}` : '',
    offsetMd ? `o-col-md-offset-${offsetMd}` : '',
    offsetLg ? `o-col-lg-offset-${offsetLg}` : '',
    offsetXl ? `o-col-xl-offset-${offsetXl}` : '',
    alignXs ? `o-col-xs-align-self--${alignXs}` : '',
    alignSm ? `o-col-sm-align-self--${alignSm}` : '',
    alignMd ? `o-col-md-align-self--${alignMd}` : '',
    alignLg ? `o-col-lg-align-self--${alignLg}` : '',
    alignXl ? `o-col-xl-align-self--${alignXl}` : '',
    alignContentXs ? `o-col-xs-align-content--${alignContentXs}` : '',
    alignContentSm ? `o-col-sm-align-content--${alignContentSm}` : '',
    alignContentMd ? `o-col-md-align-content--${alignContentMd}` : '',
    alignContentLg ? `o-col-lg-align-content--${alignContentLg}` : '',
    alignContentXl ? `o-col-xl-align-content--${alignContentXl}` : '',
  ];

  return (
    <div
      className={`${className} ${CLASSLIST.join(' ')
        .replace('  ', ' ')
        .trim()}`}
    >
      {children}
    </div>
  );
};

Column.defaultProps = {
  alignXs: null,
  alignSm: null,
  alignMd: null,
  alignLg: null,
  alignXl: null,
  alignContentXs: null,
  alignContentSm: null,
  alignContentMd: null,
  alignContentLg: null,
  alignContentXl: null,
  className: '',
  offsetXs: null,
  offsetSm: null,
  offsetMd: null,
  offsetLg: null,
  offsetXl: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

Column.propTypes = {
  alignXs: PropTypes.string,
  alignSm: PropTypes.string,
  alignMd: PropTypes.string,
  alignLg: PropTypes.string,
  alignXl: PropTypes.string,
  alignContentXs: PropTypes.string,
  alignContentSm: PropTypes.string,
  alignContentMd: PropTypes.string,
  alignContentLg: PropTypes.string,
  alignContentXl: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  offsetXs: PropTypes.number,
  offsetSm: PropTypes.number,
  offsetMd: PropTypes.number,
  offsetLg: PropTypes.number,
  offsetXl: PropTypes.number,
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Column;
