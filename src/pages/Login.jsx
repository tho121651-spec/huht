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
            <h2 className="form-signin-heading">{loginConfig.title}</h2>

            {error && (
              <div className="form-group">
                <span className="text-danger" style={{ fontSize: '13px', color: '#a94442' }}>
                  {error}
                </span>
              </div>
            )}

            {loginConfig.fields.map((field) => (
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

      {/* Footer */}
      <footer>
        <div className="row">
          <div className="col-xs-12 text-center nopadding">
            <p>
              <a href="http://huht.hueuni.edu.vn" style={{ color: '#fff' }} target="_blank" rel="noreferrer">
                {loginConfig.footer.schoolName}
              </a>
            </p>
            <p>
              <span className="glyphicon glyphicon-home"></span> {loginConfig.footer.address}
            </p>
            <p>
              <span className="glyphicon glyphicon-phone"></span> {loginConfig.footer.contact}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}