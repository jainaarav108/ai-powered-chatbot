import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  const { id } = useParams()
  return (
    <div>
      <h2>Post: {id}</h2>
      <p>Post details and comments coming soon.</p>
    </div>
  )
}

export default Post