import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Logout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Hỏi xác nhận đúng như giao diện gốc
    const isConfirmed = window.confirm('Thoát khỏi hệ thống')

    if (isConfirmed) {
      logout() // Xóa state user + localStorage
      navigate('/Account/Login', { replace: true })
    } else {
      // Nếu nhấn Cancel thì quay lại trang Tin tức
      navigate('/News', { replace: true })
    }
  }, [logout, navigate])

  return null
}