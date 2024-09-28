import PropTypes from 'prop-types';

export default function InfoIcon({width, height, className, stroke, strokeWidth}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>
  )
}

InfoIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

InfoIcon.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};