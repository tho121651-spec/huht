import React, { createContext, useContext, useState } from 'react'
import { mockUsers } from '../data/menu.js' // Đường dẫn tới file menu/mockUsers của bạn

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const login = (studentId, password) => {
    // So sánh ép kiểu String và loại bỏ khoảng trắng thừa
    const foundUser = mockUsers.find(
      (u) =>
        String(u.studentId).trim() === String(studentId).trim() &&
        String(u.password).trim() === String(password).trim()
    )

    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('user', JSON.stringify(foundUser))
      return { success: true }
    } else {
      return { success: false, message: 'Mã sinh viên hoặc mật khẩu không chính xác!' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)