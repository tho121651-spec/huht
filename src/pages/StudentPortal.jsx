import { Link } from 'react-router-dom'
import { news } from '../data/news.js'
import { reminders } from '../data/student.js'

export default function StudentPortal() {
  return (
    <>
      <h2>THÔNG BÁO</h2>

      <div id="reminders" className="container-fluid">
        {reminders.length > 0 && (
          <div className="alert alert-danger">
            <p><strong>Nhắc nhở:</strong></p>
            <ul>
              {reminders.map((item, index) => (
                <li key={index}>
                  {item.text} <Link to={item.linkTo}><strong>{item.linkText}</strong></Link> {item.tail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div id="newsList" className="container-fluid">
        {news.map((item) => (
          <div key={item.slug} style={{ marginBottom: 15 }}>
            <p style={{ fontWeight: 'bold' }}>
              <Link to={`/News/Content/${item.slug}/`}>{item.title}</Link>
              <br />
              <small className="text-muted">[{item.datetime}]</small>
            </p>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </>
  )
}
