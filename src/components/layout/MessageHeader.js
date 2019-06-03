import React from 'react';

function MessageHeader() {
  return (
    <header style={headerStyle}>
      <h1>Tasks</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '30px',
  marginBottom: '35px',
  marginTop: '40px'
}

export default MessageHeader;