import PropTypes from 'prop-types';

export default function SearchIcon({width, height, className,}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  )
}

SearchIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className:PropTypes.string,
}

SearchIcon.defaultProps = {
    height: 24,
    width: 24,
    className: "main-grid-item-icon"
};
