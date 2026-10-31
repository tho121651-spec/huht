import React from 'react';
import { studentInfo, studyResultsData } from '../data/Studying/studyResultsData';

export default function StudyResults() {
  return (
    <div className="sr-page">
      <style>{`
        .sr-page {
          font-family: Tahoma, "Segoe UI", Arial, sans-serif;
          font-size: 12px;
          color: #222;
          background: #fff;
          padding: 0 14px 20px;
        }
        .sr-page * { box-sizing: border-box; }

        .sr-title {
          font-size: 17px;
          font-weight: bold;
          color: #0c4371;
          text-transform: uppercase;
          border-bottom: 1px solid #ccc;
          padding: 8px 0 5px;
          margin-bottom: 18px;
        }

        /* 2 nút nối liền, canh phải */
        .sr-btns { display: flex; justify-content: flex-end; margin: 0 12px 8px 0; }
        .sr-btn {
          background: #fff;
          border: 1px solid #ddd;
          padding: 7px 8px;
          font-size: 12px;
          font-family: inherit;
          color: #333;
          cursor: pointer;
        }
        .sr-btn + .sr-btn { border-left: none; }
        .sr-btn:hover { background: #f0f0f0; }

        /* Bảng thông tin */
        .sr-info { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .sr-info tr { border-bottom: 1px dotted #999; }
        .sr-info td { padding: 12px 6px; height: 43px; vertical-align: middle; }
        .sr-info .lbl {
          width: 25%;
          text-align: right;
          font-weight: bold;
          padding-right: 20px;
        }
        .sr-info .val { width: 32%; }
        .sr-info .lbl2 {
          text-align: right;
          font-weight: bold;
          padding-right: 22px;
          white-space: nowrap;
        }

        /* Bảng điểm */
        .sr-table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; }
        .sr-table th {
          background: #d9d9d9;
          border: 1px solid #fff;
          padding: 8px 6px;
          text-align: center;
          font-weight: bold;
          line-height: 1.5;
          font-size: 12px;
        }
        .sr-table td {
          padding: 5px 6px;
          text-align: center;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          background: #fff;
          font-size: 12px;
        }
        .sr-table td.name { text-align: left; }
        .sr-table td.code { width: 100px; }
        .sr-table .lnk { color: #1c5b99; cursor: pointer; }

        .sr-sem td {
          background: #f2f2f2;
          padding: 5px 4px;
          text-align: left;
          line-height: 1.6;
          vertical-align: top;
          font-size: 12px;
        }
        .sr-sem td.sum { white-space: nowrap; }
      `}</style>

      <div className="sr-title">Kết quả học tập</div>

      <div className="sr-btns">
        <button
          type="button"
          className="sr-btn"
          onClick={() => alert('Đối chiếu kết quả học tập với chương trình đào tạo')}
        >
          Đối chiếu kết quả học tập với chương trình đào tạo
        </button>
        <button
          type="button"
          className="sr-btn"
          onClick={() => alert('Lịch sử quá trình học')}
        >
          Lịch sử quá trình học
        </button>
      </div>

      <table className="sr-info">
        <tbody>
          <tr>
            <td className="lbl">Khóa nhập học:</td>
            <td colSpan="3">{studentInfo.cohort}</td>
          </tr>
          <tr>
            <td className="lbl">Ngành học:</td>
            <td colSpan="3">{studentInfo.major}</td>
          </tr>
          <tr>
            <td className="lbl">Tính chất ngành học:</td>
            <td colSpan="3">{studentInfo.majorType}</td>
          </tr>
          <tr>
            <td className="lbl">Số tín chỉ đã tích lũy:</td>
            <td className="val">{studentInfo.totalCreditsAccumulated}</td>
            <td className="lbl2">Điểm trung bình tích lũy:</td>
            <td style={{ width: '12%' }}>{studentInfo.cumulativeGPA}</td>
          </tr>
        </tbody>
      </table>

      <table className="sr-table">
        <thead>
          <tr>
            <th rowSpan="2" style={{ width: 100 }}>Mã<br />học phần</th>
            <th rowSpan="2">Tên học phần</th>
            <th rowSpan="2" style={{ width: 50 }}>Số<br />TC</th>
            <th rowSpan="2" style={{ width: 50 }}>Lần<br />học</th>
            <th rowSpan="2" style={{ width: 50 }}>Lần<br />thi</th>
            <th colSpan="3">Điểm đánh giá học phần</th>
          </tr>
          <tr>
            <th style={{ width: 75 }}>Hệ 10</th>
            <th style={{ width: 75 }}>Đ.Chữ</th>
            <th style={{ width: 75 }}>Hệ 4</th>
          </tr>
        </thead>
        <tbody>
          {studyResultsData.map((sem, index) => (
            <React.Fragment key={index}>
              <tr className="sr-sem">
                <td colSpan="2" style={{ fontWeight: 'bold' }}>{sem.semester}</td>
                <td colSpan="6" className="sum">
                  Tổng số TC đăng ký: <b>{sem.regCredits}</b>
                  <br />
                  Tổng số TC tích lũy: <b>{sem.accCredits}</b>
                </td>
              </tr>
              {sem.courses.map((c, idx) => (
                <tr key={idx}>
                  <td className="code"><span className="lnk">{c.code}</span></td>
                  <td className="name"><span className="lnk">{c.name}</span></td>
                  <td>{c.credits}</td>
                  <td>{c.attempt}</td>
                  <td>{c.examAttempt}</td>
                  <td>{c.score10.toFixed(1)}</td>
                  <td>{c.letter}</td>
                  <td>{c.score4.toFixed(1)}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}