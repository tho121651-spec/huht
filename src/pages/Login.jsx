import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginConfig } from '../data/menu.js'
import '../styles/Login.css'

export default function Login() {
  const [formData, setFormData] = useState({ studentId: '', password: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const baseUrl = import.meta.env.BASE_URL

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // 1. Kiểm tra rỗng
    if (!formData.studentId.trim() || !formData.password.trim()) {
      setError('Vui lòng nhập đầy đủ Mã sinh viên và Mật khẩu!')
      return
    }

    // 2. Thực hiện Đăng nhập
    const res = login(formData.studentId, formData.password)
    
    if (res.success) {
      // 3. Chuyển hướng tới trang Tin tức (/News)
      navigate('/News', { replace: true })
    } else {
      setError(res.message)
    }
  }

  return (
    <div className="login-body">
      <div className="hitec-signin">
        {/* Cột trái */}
        <div className="hitec-col-image text-center">
          <div className="hitec-signin-logo">
            <a href="/">
              <img src={`${baseUrl}login/logo_huht.png`} alt="Logo HUHT" />
            </a>
          </div>
          <div className="hitec-signin-image">
            <img src={`${baseUrl}login/bg_building.png`} alt="HUHT Campus" />
          </div>
        </div>

        {/* Cột phải */}
        <div className="hitec-col-signin">
          <form onSubmit={handleSubmit} className="hitec-form-signin">
            <img src={`${baseUrl}login/student_office_badge.png`} alt="Badge" />
            <h2 className="form-signin-heading">{loginConfig?.title || 'SINH VIÊN'}</h2>

            {error && (
              <div className="form-group">
                <span className="text-danger" style={{ fontSize: '13px', color: '#a94442' }}>
                  {error}
                </span>
              </div>
            )}

            {loginConfig?.fields?.map((field) => (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="form-control input-lg"
                  placeholder={field.placeholder}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button className="btn btn-lg btn-primary btn-block btn-custom" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>

      {/* Footer hiển thị chuẩn cả icon SVG và text */}
      <footer>
        <div className="footer-container">
          <p className="footer-title">
            <a href="http://huht.hueuni.edu.vn" target="_blank" rel="noreferrer">
              {loginConfig?.footer?.schoolName || 'Trường Du lịch, Đại học Huế'}
            </a>
          </p>
          <p className="footer-info">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffffff" style={{ verticalAlign: '-2px', marginRight: '5px' }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            {loginConfig?.footer?.address || '22 Lâm Hoằng, Thành phố Huế'}
          </p>
          <p className="footer-info">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffffff" style={{ verticalAlign: '-2px', marginRight: '5px' }}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {loginConfig?.footer?.contact || 'Điện thoại: 0234.3897755 - Fax: 0234.3897744'}
          </p>
        </div>
      </footer>
    </div>
  )
}