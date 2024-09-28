import PropTypes from 'prop-types';

export default function KickIcon(
    {
    height, 
    width,
    fill
    }
) {
  return (
    <svg width={width} height={height} viewBox="0 0 109 109" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="97" height="97" rx="18" stroke="#F97316" strokeWidth="12"/>
        <rect x="34" y="34" width="41" height="41" rx="7" fill="#F97316" stroke="#F97316" strokeWidth="12"/>
    </svg>
)
}

KickIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    fill: PropTypes.string
}

KickIcon.defaultProps = {
    height: 109,
    width: 109,
    fill: "none"
};

