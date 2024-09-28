import Link from "next/link"
import PropTypes from 'prop-types';

export default function OrangeBtn({href, text, className}) {
  return (
    <Link href={href} className="block">
        <button className={`uppercase bg-orange-600 text-white font-bold  px-4 rounded-md w-full ${className}`}>{text}</button>
    </Link>
  )
}

OrangeBtn.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
}

OrangeBtn.defaultProps = {
    className: 'uppercase  bg-orange-600 text-white font-bold  px-4 rounded-md w-full', 
    href: '',
    text: 'Follow',
};
