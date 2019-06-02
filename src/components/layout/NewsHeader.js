import React from 'react';

function NewsHeader() {
  return (
    <header style={headerStyle}>
      <h1>News</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '35px'
}

export default NewsHeader;