
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
    }

    return (
        <li className={css.item} key={contact.id}>
        <p className={css.text}>
            {contact.name}: {contact.phone}
        </p>
        <button className={css.button} onClick={handleDeleteClick}>
            Delete
        </button>
        </li>
    );
    }