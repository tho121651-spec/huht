import React, { useState } from 'react';
import { daysOfWeek, sessions, semesterData } from '../data/Studying/ScheduleData.js';

// Import trực tiếp file ảnh từ thư mục src/icon/teach_inclass.png
import teachIcon from '../icon/teach_inclass.png';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('week'); // Mặc định mở tab tuần hiện tại

  // Hàm tự động tìm tuần hiện tại dựa trên ngày tháng thực tế
  const getCurrentWeekIndex = () => {
    const today = new Date().toISOString().split('T')[0];
    const index = semesterData.findIndex(week => today >= week.startDate && today <= week.endDate);
    return index !== -1 ? index : 3;
  };

  const currentWeekIndex = getCurrentWeekIndex();

  const getWeekDates = (weekIndex) => {
    const baseDates = [
      ['07/09/2026', '08/09/2026', '09/09/2026', '10/09/2026', '11/09/2026', '12/09/2026', '13/09/2026'],
      ['14/09/2026', '15/09/2026', '16/09/2026', '17/09/2026', '18/09/2026', '19/09/2026', '20/09/2026'],
      ['21/09/2026', '22/09/2026', '23/09/2026', '24/09/2026', '25/09/2026', '26/09/2026', '27/09/2026'],
      ['28/09/2026', '29/09/2026', '30/09/2026', '01/10/2026', '02/10/2026', '03/10/2026', '04/10/2026'],
      ['05/10/2026', '06/10/2026', '07/10/2026', '08/10/2026', '09/10/2026', '10/10/2026', '11/10/2026'],
      ['12/10/2026', '13/10/2026', '14/10/2026', '15/10/2026', '16/10/2026', '17/10/2026', '18/10/2026'],
      ['19/10/2026', '20/10/2026', '21/10/2026', '22/10/2026', '23/10/2026', '24/10/2026', '25/10/2026'],
      ['26/10/2026', '27/10/2026', '28/10/2026', '29/10/2026', '30/10/2026', '31/10/2026', '01/11/2026'],
      ['02/11/2026', '03/11/2026', '04/11/2026', '05/11/2026', '06/11/2026', '07/11/2026', '08/11/2026'],
      ['09/11/2026', '10/11/2026', '11/11/2026', '12/11/2026', '13/11/2026', '14/11/2026', '15/11/2026'],
      ['16/11/2026', '17/11/2026', '18/11/2026', '19/11/2026', '20/11/2026', '21/11/2026', '22/11/2026'],
      ['23/11/2026', '24/11/2026', '25/11/2026', '26/11/2026', '27/11/2026', '28/11/2026', '29/11/2026'],
      ['30/11/2026', '01/12/2026', '02/12/2026', '03/12/2026', '04/12/2026', '05/12/2026', '06/12/2026'],
      ['07/12/2026', '08/12/2026', '09/12/2026', '10/12/2026', '11/12/2026', '12/12/2026', '13/12/2026'],
      ['14/12/2026', '15/12/2026', '16/12/2026', '17/12/2026', '18/12/2026', '19/12/2026', '20/12/2026']
    ];
    return baseDates[weekIndex] || baseDates[3];
  };

  const currentWeekDates = getWeekDates(currentWeekIndex);

  return (
    <div className="hitec-content schedule-container">
      <style>{`
        .schedule-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .schedule-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
            text-transform: uppercase;
        }
        
        /* Nút Tabs góc phải */
        .view-tabs {
            text-align: right;
            margin-bottom: 12px;
        }
        .view-tabs a {
            display: inline-block;
            border: 1px solid #ccc;
            padding: 4px 10px;
            background: #fff;
            color: #337ab7;
            text-decoration: none;
            margin-left: -1px;
            border-radius: 2px;
        }
        .view-tabs a.active {
            color: #333;
            background-color: #f5f5f5;
            cursor: default;
            font-weight: bold;
        }
        .view-tabs a:hover:not(.active) {
            background-color: #e6e6e6;
        }

        /* CSS Bảng chuẩn web gốc (table-bordered) */
        .table-custom {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            background: #fff;
        }
        .table-custom > thead > tr > th, 
        .table-custom > tbody > tr > td {
            border: 1px solid #dddddd;
            padding: 4px 6px;
            line-height: 1.5;
            vertical-align: top;
        }
        .table-custom > thead > tr > th {
            background-color: #e5e5e5;
            color: #000;
            font-weight: bold;
            text-align: center;
            vertical-align: middle;
            padding: 8px 4px;
        }

        /* Tiêu đề tuần trong lịch toàn kỳ */
        .week-header {
            background-color: #f4f4f4;
            text-align: center;
            font-weight: bold;
            padding: 8px 0 !important;
            color: #000;
            font-size: 12.5px;
            border: 1px solid #dddddd;
        }

        /* Thanh phân cách Buổi (Sáng, Chiều, Tối) trong TKB tuần */
        .session-separator {
            background-color: #e9ecef;
            text-align: center;
            font-weight: bold;
            color: #333;
            padding: 5px 0 !important;
            border: 1px solid #dddddd;
            font-size: 11.5px;
            letter-spacing: 0.5px;
        }

        /* Thẻ môn học chi tiết */
        .course-card {
            text-align: left;
            margin-bottom: 10px;
            line-height: 1.4;
        }
        .course-name-detailed {
            font-weight: bold;
            color: #337ab7;
            margin-bottom: 2px;
        }
        .course-info-line {
            color: #000;
        }
      `}</style>

      <h2>{activeTab === 'semester' ? 'LỊCH TRÌNH HỌC TẬP TRONG HỌC KỲ' : 'THỜI KHÓA BIỂU HỌC TẬP TRONG TUẦN'}</h2>

      <div className="view-tabs">
        <a 
          href="#semester" 
          className={activeTab === 'semester' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); setActiveTab('semester'); }}
        >
          Lịch trình học tập toàn học kỳ
        </a>
        <a 
          href="#week" 
          className={activeTab === 'week' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); setActiveTab('week'); }}
        >
          Thời khóa biểu học tập tuần hiện tại
        </a>
      </div>

      {/* ================= GIAO DIỆN 1: TOÀN HỌC KỲ ================= */}
      {activeTab === 'semester' && (
        <table className="table-custom">
          <thead>
            <tr>
              {daysOfWeek.map((day) => <th key={day} style={{ width: '14.28%' }}>{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {semesterData.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                <tr>
                  <td colSpan="7" className="week-header">{week.weekLabel}</td>
                </tr>
                {week.rows.map((rowCourses, rowIndex) => (
                  <tr key={rowIndex} style={{ height: '45px' }}>
                    {daysOfWeek.map((day) => (
                      <td key={day}>
                        {rowCourses[day] && rowCourses[day].map((course, idx) => (
                          <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 'bold' }}>{course.code}</div>
                            <div>{course.detail}</div>
                            <img 
                              src={teachIcon} 
                              alt="teach in class" 
                              style={{ width: '14px', height: '14px', marginTop: '2px', objectFit: 'contain' }} 
                            />
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}

      {/* ================= GIAO DIỆN 2: THỜI KHÓA BIỂU TUẦN HIỆN TẠI ================= */}
      {activeTab === 'week' && (
        <table className="table-custom">
          <thead>
            <tr>
              {daysOfWeek.map((day, idx) => (
                <th key={day} style={{ width: '14.28%' }}>
                  {day}<br/>
                  <span style={{ fontWeight: 'normal', fontSize: '11px', color: '#000' }}>
                    {currentWeekDates[idx]}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, sessionIdx) => (
              <React.Fragment key={session}>
                <tr>
                  <td colSpan="7" className="session-separator">
                    BUỔI {session.toUpperCase()}
                  </td>
                </tr>
                <tr style={{ height: '220px' }}>
                  {daysOfWeek.map((day) => {
                    const rowCourses = semesterData[currentWeekIndex].rows[sessionIdx];
                    return (
                      <td key={day}>
                        {rowCourses[day] && rowCourses[day].map((course, idx) => {
                          const detailedNames = {
                            'DCU1032.008': 'Lịch sử Đảng Cộng sản Việt Nam - K58 KT&QLDL',
                            'EMM3113.002': 'Marketing du lịch - K59 QTKD 2',
                            'EMM3193.002': 'Phương pháp nghiên cứu trong du lịch - K57 QLLH 2',
                            'EMM3332.002': 'Quản trị thương hiệu - K57 QTKS 2',
                            'QKN2663.003': 'Quản trị tài chính - K58 QTNH',
                            'QKN2673.001': 'Tổ chức quản lý kinh doanh khách sạn - K58 QTNH'
                          };
                          const fullName = detailedNames[course.code] || course.code;
                          const parts = course.detail.split(' [');
                          const tiet = parts[0];
                          const phong = parts[1] ? parts[1].replace(']', '') : '';

                          const teachers = {
                            'DCU1032.008': 'Đào Thị Cẩm Nhung',
                            'EMM3113.002': 'Nguyễn Thị Thanh Thảo',
                            'EMM3193.002': 'Nguyễn Thị Thanh Nga (91)',
                            'EMM3332.002': 'Trần Đào Phú Lộc',
                            'QKN2663.003': 'Đoàn Khánh Hưng',
                            'QKN2673.001': 'Đàm Lê Tân Anh'
                          };
                          const teacherName = teachers[course.code] || 'Đang cập nhật';

                          return (
                            <div key={idx} className="course-card">
                              <div className="course-name-detailed">{fullName}</div>
                              <div className="course-info-line">Tiết: {tiet}</div>
                              <div className="course-info-line">Phòng: {phong}</div>
                              <div className="course-info-line">Giáo viên: {teacherName}</div>
                            </div>
                          );
                        })}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}