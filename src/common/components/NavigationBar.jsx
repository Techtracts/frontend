import '../styles/NavigationBar.css';
import backArrow from '../../assets/svgs/back-yellow.svg';
import logo from '../../assets/logo.png';
import placeholderProfilePic from '../../assets/profile.png';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const NavigationBar = ({showBackIcon, onBackTap}) => {
    let navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className={'navbar--group'}>
                {showBackIcon &&
                    <img src={backArrow} alt="Back" className="navbar--back-icon" onClick={() => {
                        navigate(-1)
                        onBackTap && onBackTap()
                    }}/>
                }
                {/* <img src={logo} alt="Logo" className="logo"/> */}
                <h1 className="navbar--title">Juris AI</h1>
            </div>

            <img src={placeholderProfilePic} alt="Profile" className="profile-pic"/>
        </nav>
    );
};

NavigationBar.propTypes = {
    showBackIcon: PropTypes.bool,
    onBackTap: PropTypes.func,
}

NavigationBar.defaultProps = {
    showBackIcon: false,
}

export default NavigationBar;