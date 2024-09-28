import PropTypes from 'prop-types';

export default function Trash({width, height, className, strokeWidth}) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
  )
}

Trash.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
}

Trash.defaultProps = {
  className: 'main-grid-item-icon', 
  width: 24,
  height: 24,
  strokeWidth: 2,
};
