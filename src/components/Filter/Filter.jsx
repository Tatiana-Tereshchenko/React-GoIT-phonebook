import React from 'react';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';

import css from './Filter.module.css';


export const Filter = () => {
  const dispatch = useDispatch();


  const handleFilterChange = (event) => {
    const filterEvent = event.target.value;
    dispatch(setContactsFilter(filterEvent));
  };

    return (
      <label className={css.label}>
        Filter contacts by name:
        <input className={css.text} type="text"  onChange={handleFilterChange} />
      </label>
    );
  }
