import { useEffect, useState } from 'react'

const WEEKDAYS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

function formatVietnameseDate(date) {
  return `${WEEKDAYS[date.getDay()]}, ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`
}

export default function Header() {
  const [today, setToday] = useState(() => formatVietnameseDate(new Date()))

  useEffect(() => {
    const timer = setInterval(() => setToday(formatVietnameseDate(new Date())), 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="row hitec-title">
      <div className="col-xs-8 nopadding">
        <h1>TRƯỜNG DU LỊCH - ĐẠI HỌC HUẾ</h1>
      </div>
      <div className="col-xs-4 text-right" style={{ color: '#cecece', lineHeight: '28px' }}>
        {today}
      </div>
    </div>
  )
}
