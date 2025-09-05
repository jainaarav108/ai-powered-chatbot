import React, { useEffect, useState } from 'react'
import { healthCheck } from '../api'

function Home() {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    healthCheck().then(data => setStatus(data.status || 'Unknown'))
  }, [])

  return (
    <div>
      <h1>Welcome to Threaddit</h1>
      <p>API Health: {status}</p>
    </div>
  )
}

export default Home