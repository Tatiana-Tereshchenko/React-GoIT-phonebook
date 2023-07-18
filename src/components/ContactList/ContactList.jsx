import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

import { getStatusFilter } from 'redux/selectors';
import { getContacts } from 'redux/selectors';

import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
      
    return (
        <div>
            <ul className={css.item_contact}>
              {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
        </ul>
        
    </div>
    );
  }
