import React from 'react';

function EventHeader() {
  return (
    <header style={headerStyle}>
      <h1>Events</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  marginBottom: '35px',
  marginTop: '40px'
}

export default EventHeader;