import PropTypes from 'prop-types';

export default function ChartIcon({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

ChartIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

ChartIcon.defaultProps = {
    height: 24,
    width: 24,
};
