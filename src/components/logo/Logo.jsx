import PropTypes from 'prop-types';

export default function Logo({Icon, propsStyle, className}) {
  return (
    <div className="flex gap-1">
        <Icon {...propsStyle}/>
        <p className={className}>Kick</p>
    </div>
  )
}

Logo.propTypes = {
    Icon: PropTypes.elementType,
    propsStyle: PropTypes.object,
    className: PropTypes.string,
}

