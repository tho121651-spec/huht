import { Link, useParams } from 'react-router-dom'
import { findNews } from '../data/news.js'

export default function NewsDetail() {
  const { slug } = useParams()
  const item = findNews(slug)

  if (!item) {
    return (
      <>
        <h2>THÔNG BÁO</h2>
        <div className="container-fluid">
          <div className="alert alert-danger">
            <p>Không tìm thấy thông báo này trên hệ thống.</p>
          </div>
          <p><Link to="/News">Quay lại danh sách thông báo</Link></p>
        </div>
      </>
    )
  }

  return (
    <>
      <h2>THÔNG BÁO</h2>
      <div className="container-fluid">
        <p style={{ fontWeight: 'bold' }}>
          {item.title}
          <br />
          <small className="text-muted">[{item.datetime}]</small>
        </p>
        {item.summary.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p><Link to="/News">Quay lại danh sách thông báo</Link></p>
      </div>
    </>
  )
}
