import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { mainMenu } from '../data/menu.js'

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [collapsed, setCollapsed] = useState(true)
  const navRef = useRef(null)

  useEffect(() => {
    function handleOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenIndex(null)
    }
    function handleEsc(event) {
      if (event.key === 'Escape') setOpenIndex(null)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className="row">
      <div className="col-xs-12 nopadding">
        <nav className="navbar navbar-default hitec-navbar" ref={navRef}>
          <div className="navbar-header">
            <button
              type="button"
              className="pull-left navbar-toggle"
              onClick={() => setCollapsed((value) => !value)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand hitec-logo" to="/News">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
            </Link>
          </div>

          {/* menu main */}
          <div className={`nav collapse navbar-collapse ${collapsed ? '' : 'in'}`} id="menuMain">
            <ul className="nav navbar-nav">
              {mainMenu.map((menu, index) => (
                <li key={menu.label} className={`dropdown ${openIndex === index ? 'open' : ''}`}>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    aria-expanded={openIndex === index}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenIndex(openIndex === index ? null : index)
                    }}
                  >
                    {menu.label} <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    {menu.items.map((item, i) => {
                      if (item.type === 'header') {
                        return <li key={`h-${i}`} className="dropdown-header">{item.label}</li>
                      }
                      if (item.type === 'divider') {
                        return <li key={`d-${i}`} className="divider" />
                      }

                      // Tạo đường dẫn tuyệt đối bao gồm cả base URL (/student/...)
                      const targetUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${item.to}`

                      return (
                        <li key={item.to}>
                          <a
                            href={targetUrl}
                            onClick={(e) => {
                              e.preventDefault()
                              setOpenIndex(null)
                              setCollapsed(true)
                              window.location.href = targetUrl
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}