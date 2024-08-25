import PropTypes from 'prop-types';

export default function VerticalDotLines({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}

VerticalDotLines.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

VerticalDotLines.defaultProps = {
    height: 24,
    width: 24,
};
