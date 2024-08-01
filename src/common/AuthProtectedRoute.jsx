import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from "prop-types";
import {authStatus} from "../features/auth/slice/authStatus.js";

const AuthProtectedRoute = ({children}) => {
    const location = useLocation();
    const {status} = useSelector((state) => state.auth);

    const isLoggedIn = status === authStatus.SUCCEEDED;

    if (!isLoggedIn) {
        return <Navigate to="/auth" state={{from: location}} replace/>;
    }

    return children;
};

AuthProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProtectedRoute;