import './AuthPage.css'
import {useEffect, useState} from "react";
import SwitchText from "./components/SwitchText.jsx";
import {AuthType} from "./AuthType.js";
import {useSelector, useDispatch} from "react-redux";
import {loginUser, registerUser} from "./slice/actions.js";
import {authStatus} from "./slice/authStatus.js";
import ErrorContainer from "../../common/components/ErrorContainer.jsx";
import CTAButton from "../../common/components/CTAButton.jsx";
import CircularProgressIndicator from "../../common/components/CircularProgressIndicator.jsx";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
    let [currentAuthType, changeAuthType] = useState(AuthType.LOGIN);
    let [formData, setFormData] = useState({email: '', password: ''});

    const dispatch = useDispatch();

    function handleChange(event) {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function getEmailDiv() {
        return <div className={"form-group"}>
            <label className={"auth-section--label"} htmlFor={"email"}>Email</label>
            <input name={"email"} type={"text"} value={formData.email} onChange={handleChange}/>
        </div>;
    }

    function getPasswordDiv() {
        return <div className={"form-group"}>
            <label className={"auth-section--label"} htmlFor={"password"}>Password</label>
            <input name={"password"} type={"password"} value={formData.password} onChange={handleChange}/>
        </div>;
    }


    function handleSubmit(event) {
        event.preventDefault()
        if (currentAuthType === AuthType.LOGIN) {
            dispatch(loginUser(formData));
            return;
        }

        dispatch(registerUser(formData));
    }

    function switchAuthType() {
        if (currentAuthType === AuthType.LOGIN) {
            changeAuthType(AuthType.SIGN_UP);
        } else {
            changeAuthType(AuthType.LOGIN);
        }
    }

    function getCTAButton() {
        return (
            <CTAButton
                text={currentAuthType === AuthType.LOGIN ? 'Login' : 'Register'}
            />
        )
    }

    const authState = useSelector(state => state.auth);
    const { token, status, error } = authState;
    const isLoading = status === authStatus.LOADING;
    const errorExists = status === authStatus.FAILED && error !== null;

    const navigate = useNavigate();
    useEffect(() => {
        if (status === authStatus.SUCCEEDED) {
            navigate('/');
        }
    }, [status, token, navigate]);

    return (
        <section className={"auth-section"}>
            <div className={"auth-section--container"}>
                {/* <img src={logo} alt={'logo'} className={'auth-section--logo'}/> */}
                <h1 className={"auth-section--title"}>Juris AI</h1>
                <form className={"auth-section--form"} onSubmit={handleSubmit}>
                    {getEmailDiv()}
                    <div style={{height: '20px'}}/>
                    {getPasswordDiv()}
                    <SwitchText
                        currentAuthType={currentAuthType}
                        onClick={switchAuthType}
                    />
                    <div style={{height: '10px'}}/>
                    {errorExists &&
                        <ErrorContainer msg={error}/>
                    }
                    <div className={"auth-section--cta-container"}>
                        {isLoading ? <CircularProgressIndicator/> : getCTAButton()}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AuthPage;
