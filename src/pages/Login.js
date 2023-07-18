import { TextField } from '@mui/material'
import React from 'react'

export default function login() {
  return (
    <>
      <div>login</div>
      <form style={{display:'flex', flexDirection:'column', width:320, margin:'0 auto'}}>
        <TextField id="standard-basic-email" label="email" variant="standard" type='email'/>
        <TextField id="standard-basic-password" label="password" variant="standard" type='password' />
        <button type='submit'>login</button>
      </form>
    </>
  )
}
