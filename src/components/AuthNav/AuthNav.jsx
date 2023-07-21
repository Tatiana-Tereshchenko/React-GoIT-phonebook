import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={css.auth_container}>
            <NavLink  className={css.link}  to="/register" component="nav">Register</NavLink>
            <NavLink className={css.link} to="/login">Log In</NavLink>
        </div>
    )
}

export default AuthNav;

