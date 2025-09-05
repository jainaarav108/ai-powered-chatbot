import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Community from './pages/Community'
import Post from './pages/Post'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/community/:id" element={<Community />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  )
}

export default Router