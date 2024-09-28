
import PropTypes from 'prop-types';

export default function XIcon({width, height, className, fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} fill={fill} viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
  )
}

XIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    fill: PropTypes.string
}

XIcon.defaultProps = {
    height: 24,
    width: 24,
    fill: 'black',
    className: "main-grid-item-icon"
};
