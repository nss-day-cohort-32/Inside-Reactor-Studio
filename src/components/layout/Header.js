import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Nutshell</h1>
    </header>
  )
}

const headerStyle = {
  background: 'rgb(140, 100, 100)',
  color: '#fff',
  textAlign: 'center',
  padding: '30px',
  fontFamily: 'bombing, arial',
  marginBottom: '30px'
}

export default Header;