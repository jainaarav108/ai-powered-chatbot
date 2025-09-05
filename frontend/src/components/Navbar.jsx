import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/login">Login</Link> |{' '}
      <Link to="/community/1">Community</Link>
    </nav>
  )
}

export default Navbar