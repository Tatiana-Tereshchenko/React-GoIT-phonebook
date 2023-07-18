
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = ( ) => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const nameImput = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (contacts.some(({ name }) => name === nameImput)) {
        return alert(`${nameImput} is already in contacts`);
    }

        dispatch(addContact({name:nameImput, phone:number }));
    form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.text}
            type="text"
            name="name"
            placeholder="Name"
            value={contacts.name}
            required
        />
        <input className={css.text}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={contacts.name}
            required
        />
        <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
    }
