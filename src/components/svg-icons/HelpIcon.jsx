import PropTypes from 'prop-types';

export default function HelpIcon({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
    
  )
}

HelpIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

HelpIcon.defaultProps = {
    height: 24,
    width: 24,
};
