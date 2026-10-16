import { createContext, useContext, useState } from 'react'

const API_URL = 'http://localhost:8000/api/auth/login'

const AuthContext = createContext(null)

function readSession() {
  const accessToken = sessionStorage.getItem('access_token')
  const userId = sessionStorage.getItem('user_id')
  if (!accessToken || !userId) {
    return null
  }
  return { accessToken, userId }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession)

  async function login(email, password) {
    let response
    try {
      response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
    } catch {
      throw new Error('Could not reach the server')
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const detail = data.detail
      throw new Error(typeof detail === 'string' ? detail : 'Login failed')
    }

    sessionStorage.setItem('access_token', data.access_token)
    sessionStorage.setItem('user_id', String(data.user_id))
    setSession({ accessToken: data.access_token, userId: data.user_id })
  }

  function logout() {
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('user_id')
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
