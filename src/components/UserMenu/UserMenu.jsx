import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import css from './UserMenu.module.css';


const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const onLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className={css.box}>
            {user ? (
                <>
                    <div className={css.button_box}>{user.name}</div>
                    <Button onClick={onLogout} variant="outlined" endIcon={<ExitToAppIcon />} size="medium">
                        Logout
                    </Button>
                </>
            ) : (
                <Button onClick={onLogout} variant="outlined" endIcon={<ExitToAppIcon />} size="medium">
                    Logout
                </Button>
            )}
        </div>
    )
}

export default UserMenu;