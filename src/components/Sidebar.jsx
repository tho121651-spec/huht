import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { student } from '../data/student.js'
import { accountLinks, generalFunctions } from '../data/menu.js'
import { hotNews } from '../data/news.js'

export default function Sidebar() {
  const { logout } = useAuth()

  const handleLinkClick = (event, item) => {
    if (item.confirm) {
      if (window.confirm(item.confirm)) {
        // Gọi hàm logout để xóa state & localStorage
        logout()
      } else {
        // Nếu chọn Cancel thì dừng chuyển trang
        event.preventDefault()
      }
    }
  }

  return (
    <div className="hitec-sidebar">
      <div className="hitec-information">
        <h5>{student.fullName}</h5>
        {accountLinks.map((item) => (
          <p key={item.id}>
            <img src={`${import.meta.env.BASE_URL}images/icons/${item.icon}.png`} alt="" />
            <Link
              id={item.id}
              to={item.to}
              onClick={(event) => handleLinkClick(event, item)}
            >
              {item.label}
            </Link>
          </p>
        ))}
      </div>

      <div className="hitec-general-function">
        <h5>CÁC CHỨC NĂNG CHUNG</h5>
        {generalFunctions.map((item) => (
          <p key={item.id}>
            <img src={`${import.meta.env.BASE_URL}images/icons/${item.icon}.png`} alt="" />
            <Link id={item.id} to={item.to}>
              {item.label} <span className={item.badge} />
            </Link>
          </p>
        ))}
      </div>

      <div id="hotNews" className="hitec-notification">
        <h5>TIN TỨC - THÔNG BÁO</h5>
        <ul>
          {hotNews.map((item) => (
            <li key={item.slug}>
              <Link to={`/News/Content/${item.slug}/`}>
                {item.title} <small className="text-muted">({item.date})</small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}