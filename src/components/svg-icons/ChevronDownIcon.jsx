import PropTypes from 'prop-types';

export default function ChevronDownIcon({width, height, className}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

ChevronDownIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string
}

ChevronDownIcon.defaultProps = {
    height: 24,
    width: 24,
    className: "main-grid-item-icon"
};
