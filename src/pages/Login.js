import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux/auth/authOperations';


export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formLogin = e.currentTarget;
    dispatch(logIn({ email: formLogin.elements.email.value, password: formLogin.elements.password.value, })
    );
    formLogin.reset();
  }
  const buttonStyles = {
    backgroundColor: 'rgb(215 206 140)', 
    color: 'rgb(64, 60, 60', 
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
      <form  onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', width:320, margin:'30px auto'}}>
        <TextField id="standard-basic-email" label="email" variant="standard"  type='email' name="email" />
        <TextField id="standard-basic-password" label="password" variant="standard" type='password'name="password" />
        <button style={buttonStyles} type='submit'>login</button>
      </form>
    </>
  )
}
