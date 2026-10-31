import React from 'react';
import { registeredCoursesData, summaryData } from '../data/Studying/registeredCoursesData';

export default function RegisteredCourses() {
  return (
    <div className="hitec-content registered-courses-container">
      <style>{`
        .registered-courses-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .registered-courses-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
            text-transform: uppercase;
        }
        .btn-outline {
            float: right;
            border: 1px solid #ccc;
            padding: 4px 10px;
            background: #fff;
            color: #333;
            text-decoration: none;
            border-radius: 3px;
            margin-bottom: 10px;
        }
        .btn-outline:hover {
            background-color: #e6e6e6;
        }
        
        /* BẢNG DỮ LIỆU CHÍNH (CHUẨN CSS GỐC) */
        .table-custom {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            background: #fff;
            border-bottom: 1px solid #dddddd;
            clear: both;
        }
        .table-custom > thead > tr > th,
        .table-custom > tbody > tr > td {
            padding: 4px 6px;
            line-height: 1.5;
            vertical-align: top;
            border-top: 1px solid #dddddd;
        }
        .table-custom > thead > tr > th {
            background-color: #e5e5e5;
            color: #000;
            font-weight: bold;
            text-align: center;
            vertical-align: middle;
        }
        
        /* Hiệu ứng xen kẽ màu (Zebra Striping) */
        .table-custom tbody tr.data-row:nth-of-type(odd) { background-color: #ffffff; }
        .table-custom tbody tr.data-row:nth-of-type(even) { background-color: #f9f9f9; }
        .table-custom tbody tr.data-row:hover { background-color: #f5f5f5; }
        
        .registered-courses-container a {
            color: #337ab7;
            text-decoration: none;
        }
        .registered-courses-container a:hover {
            text-decoration: underline;
            color: #23527c;
        }
        .text-muted-small {
            font-size: 11px;
            color: #777;
            display: block;
            margin-top: 2px;
        }
        
        /* KHỐI TỔNG KẾT VÀ LƯU Ý */
        .summary-block {
            display: flex;
            justify-content: flex-start;
            padding: 15px 0;
            line-height: 1.6;
        }
        .summary-col {
            width: 50%;
        }
        .note-block {
            padding-bottom: 15px;
            line-height: 1.6;
        }
      `}</style>

      <h2>DANH SÁCH LỚP HỌC PHẦN ĐÃ ĐĂNG KÝ HỌC</h2>

      <a href="/student/Studying/Modules" className="btn-outline">
        Chọn học phần để đăng ký học
      </a>

      <table className="table-custom">
        <thead>
          <tr>
            <th style={{ width: '40px' }}>STT</th>
            <th style={{ textAlign: 'left' }}>Lớp học phần</th>
            <th style={{ width: '40px' }}>Số<br/>TC</th>
            <th style={{ width: '40px' }}>Lần<br/>học</th>
            <th style={{ width: '150px', textAlign: 'left' }}>Giảng viên</th>
            <th style={{ width: '180px', textAlign: 'left' }}>Thời khóa biểu<br/>(tuần đầu tiên)</th>
            <th style={{ width: '80px' }}>Ngày bắt đầu</th>
            <th style={{ width: '80px', textAlign: 'right' }}>Học phí</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" style={{ fontWeight: 'bold', backgroundColor: '#fff', color: '#000', padding: '6px 8px' }}>
              Lớp học phần đã được duyệt
            </td>
          </tr>
          {registeredCoursesData.map((item, index) => (
            <tr key={item.id} className="data-row">
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td>
                <a href={`/student/Subject/Details/${item.code}/`}>{item.name}</a>
                <span className="text-muted-small">{item.code}</span>
              </td>
              <td style={{ textAlign: 'center' }}>{item.credits}</td>
              <td style={{ textAlign: 'center' }}>{item.studyTimes}</td>
              <td>{item.teacher}</td>
              <td>
                {item.schedule.map((time, i) => (
                  <div key={i}>{time}</div>
                ))}
              </td>
              <td style={{ textAlign: 'center' }}>{item.startDate}</td>
              <td style={{ textAlign: 'right' }}>{item.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phần Tổng kết */}
      <div className="summary-block">
        <div className="summary-col">
          - Số lớp đã đăng ký: {summaryData.totalClasses}<br />
          - Tổng số tín chỉ đã đăng ký: {summaryData.totalCredits}<br />
          - Tổng số tiền học phí theo lớp đăng ký: <strong>{summaryData.totalFee}</strong>
        </div>
        <div className="summary-col">
          - Số lớp đã được duyệt: {summaryData.totalClasses}<br />
          - Tổng số tín chỉ đã được duyệt: {summaryData.totalCredits}<br />
          - Tổng số tiền học phí theo lớp đã duyệt: <strong>{summaryData.totalFee}</strong>
        </div>
      </div>

      {/* Phần Lưu ý */}
      <div className="note-block">
        <strong>Lưu ý:</strong>
        <ul style={{ paddingLeft: '20px', margin: '2px 0' }}>
          <li>Số tiền học phí tạm tính ở thời điểm hiện tại, có thể thay đổi khi có qui định mức thu học phí chính thức của Nhà trường.</li>
          <li>Sinh viên chỉ được phép hủy đăng ký những lớp học phần chưa được duyệt và do sinh viên tự đăng ký</li>
        </ul>
      </div>
    </div>
  );
}