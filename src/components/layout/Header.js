import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  background: '#3c3836',
  color: '#f9f5d7',
  padding: '10px'
}

const linkStyle = {
  color: '#f9f5d7'
}

export default Header