import PropTypes from 'prop-types';

export function FileIcon({width, height, className, stroke, strokeWidth}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <polyline points="10 9 9 9 8 9" />
      </svg>
    );
  }

FileIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
}

FileIcon.defaultProps = {
    height: 24,
    width: 24,
    strokeWidth: 2,
    stroke: 'currentColor',
    className: "main-grid-item-icon"
};