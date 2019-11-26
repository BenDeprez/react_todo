import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        TodoList
      </h1>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  background: '#3c3836',
  color: '#f9f5d7',
  padding: '10px'
}

export default Header