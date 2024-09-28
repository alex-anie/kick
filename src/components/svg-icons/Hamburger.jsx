import PropTypes from 'prop-types';

export default function Hamburger({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <line x1="21" x2="3" y1="10" y2="10" />
        <line x1="21" x2="3" y1="6" y2="6" />
        <line x1="21" x2="3" y1="14" y2="14" />
        <line x1="21" x2="3" y1="18" y2="18" />
    </svg>
)
}

Hamburger.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

Hamburger.defaultProps = {
    height: 24,
    width: 24,
};

