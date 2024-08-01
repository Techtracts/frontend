import PropTypes from "prop-types";
import '../styles/IconTitle.css';

function IconTitle({src, title}) {
    return (
        <div className="icon-title">
            <img className="icon-title--icon" src={src} alt="icon" />
            <div className="icon-title--title">
                {title}
            </div>
        </div>
    )
}

IconTitle.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default IconTitle;