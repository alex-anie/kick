import PropTypes from 'prop-types';

export default function UserIcon({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

UserIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

UserIcon.defaultProps = {
    height: 24,
    width: 24,
};
