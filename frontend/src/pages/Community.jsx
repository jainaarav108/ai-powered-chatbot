import React from 'react'
import { useParams } from 'react-router-dom'

function Community() {
  const { id } = useParams()
  return (
    <div>
      <h2>Community: {id}</h2>
      <p>Community details and posts coming soon.</p>
    </div>
  )
}

export default Community