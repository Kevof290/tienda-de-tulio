import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Navbar          from './components/Navbar'
import ProtectedRoute  from './components/ProtectedRoute'

// Páginas públicas
import Home            from './pages/Home'
import Login           from './pages/Login'
import Register        from './pages/Register'

// Páginas privadas
import Gallery         from './pages/Gallery'
import ProductDetail   from './pages/ProductDetail'
import Profile         from './pages/Profile'
import CreatePost      from './pages/CreatePost'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/login"      element={<Login />} />
          <Route path="/register"   element={<Register />} />

          <Route path="/gallery"    element={
            <ProtectedRoute><Gallery /></ProtectedRoute>
          }/>
          <Route path="/product/:id" element={
            <ProtectedRoute><ProductDetail /></ProtectedRoute>
          }/>
          <Route path="/profile"    element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          }/>
          <Route path="/create"     element={
            <ProtectedRoute><CreatePost /></ProtectedRoute>
          }/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App