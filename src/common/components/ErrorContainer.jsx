import PropTypes from "prop-types";
import '../styles/ErrorContainer.css';

const ErrorContainer = ({msg}) => {
    return (
        <div className={"error-container"}>
            <div className={"error-container--message"}>
                <p> ⚠ &nbsp;&nbsp;&nbsp; {msg}</p>
            </div>
        </div>
    )
}

ErrorContainer.propTypes = {
    msg: PropTypes.string.isRequired
}

export default ErrorContainer;