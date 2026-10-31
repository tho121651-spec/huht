import React from 'react';
import { examScheduleData } from '../data/Studying/examScheduleData';

export default function ExamSchedule() {
  return (
    <div className="hitec-content exam-container">
      <style>{`
        .exam-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .exam-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
            text-transform: uppercase;
        }

        /* CSS Bảng chuẩn giao diện trường */
        .table-custom {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            background: #fff;
            margin-bottom: 20px;
        }
        .table-custom > thead > tr > th, 
        .table-custom > tbody > tr > td {
            border: 1px solid #dddddd;
            padding: 6px 8px;
            line-height: 1.5;
            vertical-align: middle;
        }
        .table-custom > thead > tr > th {
            background-color: #e5e5e5;
            color: #000;
            font-weight: bold;
            text-align: center;
        }
        
        /* Dòng thông báo khi chưa có lịch thi */
        .no-data-row {
            text-align: center;
            padding: 25px !important;
            color: #333;
            font-style: italic;
        }
      `}</style>

      <h2>LỊCH THI KẾT THÚC HỌC PHẦN</h2>

      <table className="table-custom">
        <thead>
          <tr>
            <th style={{ width: '50px' }}>STT</th>
            <th>Lớp học phần</th>
            <th style={{ width: '70px' }}>Lần thi</th>
            <th style={{ width: '100px' }}>Ngày thi</th>
            <th style={{ width: '80px' }}>Giờ thi</th>
            <th style={{ width: '100px' }}>Phòng thi</th>
            <th style={{ width: '120px' }}>Hình thức thi</th>
          </tr>
        </thead>
        <tbody>
          {examScheduleData && examScheduleData.length > 0 ? (
            examScheduleData.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>{item.courseCode} - {item.courseName}</td>
                <td style={{ textAlign: 'center' }}>{item.examAttempt}</td>
                <td style={{ textAlign: 'center' }}>{item.examDate}</td>
                <td style={{ textAlign: 'center' }}>{item.examTime}</td>
                <td style={{ textAlign: 'center' }}>{item.room}</td>
                <td style={{ textAlign: 'center' }}>{item.examType}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data-row">
                Chưa có lịch thi kết thúc học phần
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}