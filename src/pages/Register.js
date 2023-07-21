import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from 'redux/auth/authOperations';


export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(register({name, email, password}))
  }
  const buttonStyles = {
    backgroundColor: 'rgb(215 206 140)', 
    color: 'rgb(64, 60, 60)', 
    fontSize: '25px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };
  return (
    <>
      <div></div>
      <form style={{display:'flex', flexDirection:'column', width:'320px', margin:'0 auto'}} onSubmit={handleSubmit}>
        <TextField id="standard-basic-name" label="name" variant="standard" type='text' name='name'/>
        <TextField id="standard-basic-email" label="email" variant="standard" type='email' name='email'/>
        <TextField id="standard-basic-password" label="password" variant="standard" type='password' name='password'/>
        <button  style={buttonStyles} type='submit'>Register</button>
      </form>
    </>
  )
}
