import PropTypes from 'prop-types';

export default function ArrowLeft({width, height, className, strokeWidth, stroke}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
        <line x1="19" x2="5" y1="12" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    );
  }
  
  ArrowLeft.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
  }

  ArrowLeft.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};