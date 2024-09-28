import PropTypes from 'prop-types';

export default function TransLineIcon({height, width}) {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <filter x="0%" y="0%" width="100" height="100%" id="a"/><circle fill="#F5F5F5" cx="50" cy="50" r="50"/><g transform="translate(16.4 20.7)"><path d="M62.8 3.7L15 4.4a5.4 5.4 0 00-5.1 6.3l3.6 20.4c1.2 3.2 2.6 5.3 5.2 5.4l27.2-.4c5.2 0 7.3-3.7 7.7-4.3 1-1.6 13-19 13.9-20.8.3-.6.4-2 .4-2 0-2.8-2.4-5.4-5.1-5.3z" fill="#F90"/><path d="M14 4.7a5.5 5.5 0 00-4.3 3.8L7 5.6H2.4A2.7 2.7 0 010 2.8C0 1.4 1 .2 2.4.1h7.1V0h.1l4.5 4.7z" fill="#C9C9C9"/><path d="M42.2 36.2l-23.5.3c-1 0-1.8-.3-2.5-.8-1.3-1-2.1-2.5-2.7-4.6l-.3-1.5L10 10.7c-.2-.8-.1-1.7.1-2.6.7-2 2.5-3.3 4.4-3.6L25 4.3l17 31.9z" fill="#FFB048"/><path d="M59.2 45.4a2.9 2.9 0 01-3.1 2l-.7.1H14.8l-8-8.2c-1-1.2-1-3 .2-4.1l5.8-6 .3 1.6c.6 2.1 1.4 3.7 2.6 4.6l-1.6 1.7a1 1 0 000 1.4l3.1 3.2h38.2a10 10 0 011 0 2.8 2.8 0 011.6.4 3 3 0 011.2 3.3z" fill="#C9C9C9"/><circle fill="#535353" cx="23.5" cy="53.3" r="4.6"/><ellipse fill="#535353" cx="49.5" cy="53.3" rx="4.9" ry="4.6"/></g><path d="M59 36.6a9.6 9.6 0 10-17.2 9 9.6 9.6 0 0017.1-9zm-6.7 8.1l-3.2 4.6-1.7-5.3-5.3-1.6 4.6-3.3-.2-5.5 4.5 3.3 5.3-1.9-1.8 5.3 3.4 4.5h-5.6z" fill="#FFF"/></svg>
  )
}

TransLineIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}

TransLineIcon.defaultProps = {
    height: 100,
    width: 100
};
