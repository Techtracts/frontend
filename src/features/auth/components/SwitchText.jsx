import * as PropTypes from "prop-types";
import {AuthType} from "../AuthType.js";
import '../styles/SwitchText.css';

function SwitchText({currentAuthType, onClick}) {
    const isLogin = currentAuthType === AuthType.LOGIN;

    return <div className={"switch-text--container"}>
        <p className={"switch-text--qtn-text"}>{isLogin ? "Don't have an account?" : "Already have an account?"}
            &nbsp;
            <a className={"hyperlink-text"} onClick={onClick}>
                {isLogin ? "Sign up" : "Login"}
            </a>
        </p>
    </div>;
}

SwitchText.propTypes = {
    currentAuthType: PropTypes.string,
    onClick: PropTypes.func
};

export default SwitchText;