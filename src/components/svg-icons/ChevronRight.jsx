import PropTypes from 'prop-types';

export default function ChevronRight({width, height, className, stroke, strokeWidth}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

ChevronRight.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

ChevronRight.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};