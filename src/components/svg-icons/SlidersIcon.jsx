import PropTypes from 'prop-types';

export function SlidersIcon({width, height, className, stroke, strokeWidth}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
        <line x1="4" x2="4" y1="21" y2="14" />
        <line x1="4" x2="4" y1="10" y2="3" />
        <line x1="12" x2="12" y1="21" y2="12" />
        <line x1="12" x2="12" y1="8" y2="3" />
        <line x1="20" x2="20" y1="21" y2="16" />
        <line x1="20" x2="20" y1="12" y2="3" />
        <line x1="1" x2="7" y1="14" y2="14" />
        <line x1="9" x2="15" y1="8" y2="8" />
        <line x1="17" x2="23" y1="16" y2="16" />
      </svg>
    );
  }
  
  SlidersIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

SlidersIcon.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};