import React from 'react'
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from "react";





export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    
    return (
    <div  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
    <ContactForm />
    <Filter />
    <ContactList  />
    </div>
)
}
