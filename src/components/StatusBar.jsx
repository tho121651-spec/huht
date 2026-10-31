import { Link } from 'react-router-dom'
import { student } from '../data/student.js'

// Thay cho glyphicon-education / glyphicon-book / glyphicon-calendar của Bootstrap 3
function IconEducation() {
  return (
    <svg className="glyphicon-svg" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2 0 6l8 4 6-3v4h2V6L8 2zM3 9v3c0 1.1 2.2 2 5 2s5-.9 5-2V9l-5 2.5L3 9z" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg className="glyphicon-svg" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 1v12h1V2H4z" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg className="glyphicon-svg" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 2h12v3H2V2zm0 4h12v8H2V6zm2 2v1.5h2V8H4zm3.5 0v1.5h2V8h-2zm3.5 0v1.5h2V8h-2zM4 11v1.5h2V11H4zm3.5 0v1.5h2V11h-2z" />
    </svg>
  )
}

export default function StatusBar() {
  return (
    <div className="row hitec-status">
      <div className="col-xs-12 text-right">
        <Link
          to="/Setting/Change"
          style={{ fontWeight: 'bold', color: '#ce2020' }}
          title="Nhấp vào đây để thay đổi ngành học và học kỳ tác nghiệp"
        >
          <IconEducation /> {student.course}
          <span style={{ marginLeft: 20 }}><IconBook /></span> {student.major}
          <span style={{ marginLeft: 20 }}><IconCalendar /></span> {student.semester}
        </Link>
      </div>
    </div>
  )
}
