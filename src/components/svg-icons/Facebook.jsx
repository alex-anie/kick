import PropTypes from 'prop-types';

export default function Facebook({width, height, className, fill, strokeWidth, stroke}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
  )
}

Facebook.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

Facebook.defaultProps = {
    height: 24,
    width: 24,
    fill: 'black',
    className: "main-grid-item-icon",
    stroke: "currentColor",
    strokeWidth: 2
};
