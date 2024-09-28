
  import PropTypes from 'prop-types';

export default function StarIcon({width, height, className, fill, strokeWidth, stroke}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
  )
}

StarIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

StarIcon.defaultProps = {
    height: 24,
    width: 24,
    fill: 'black',
    className: "main-grid-item-icon",
    stroke: "currentColor",
    strokeWidth: 2
};
