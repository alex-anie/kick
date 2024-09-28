import PropTypes from 'prop-types';

export default function Recycle({width, height, stroke, strokeWidth, className}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
        <polyline points="1 4 1 10 7 10" />
        <polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
    )
}

Recycle.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
  }

  Recycle.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};