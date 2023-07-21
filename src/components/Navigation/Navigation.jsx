import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <nav className={css.container_navigation}>
            <NavLink className={css.link} to="/">Home</NavLink>
            {isLoggedIn && (<NavLink className={css.link} to="/contacts">Contacts</NavLink>)}
        </nav>
)
}
export default Navigation;