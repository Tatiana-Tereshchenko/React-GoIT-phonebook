import React from 'react'
import foto  from 'image/foto.jpg';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${foto})`,
      height: '100vh',
      display: 'flex',
      fontSize: 70,
      color: 'rgb(64, 60, 60)',
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      
    }}>Phonebook that will make your life easier!</div>
  )
}
