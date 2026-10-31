import React from 'react';
import { conductData } from '../data/Studying/conductData'; // Đã cập nhật đường dẫn import

export default function Conduct() {
  return (
    <div className="hitec-content conduct-container">
      <style>{`
        .conduct-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .conduct-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #dddddd;
            padding-bottom: 6px;
            text-transform: uppercase;
        }
        .conduct-container .table-bordered {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            background-color: #fff;
            margin-bottom: 20px;
        }
        .conduct-container .table-bordered > thead > tr > th,
        .conduct-container .table-bordered > tbody > tr > td {
            padding: 6px 8px;
            line-height: 1.5;
            vertical-align: middle;
            border: 1px solid #dddddd;
        }
        .conduct-container .table-bordered > thead > tr > th {
            background-color: #e6e6e6;
            text-align: left;
            font-weight: bold;
            color: #000;
        }
      `}</style>

      <h2>KẾT QUẢ ĐÁNH GIÁ ĐIỂM RÈN LUYỆN CÁ NHÂN</h2>

      <table className="table-bordered">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Học kỳ, Năm học</th>
            <th style={{ width: '25%' }}>Lớp sinh hoạt</th>
            <th style={{ width: '25%' }}>Giáo viên CVHT/CN</th>
            <th style={{ width: '10%', textAlign: 'center' }}>Điểm RL</th>
            <th style={{ width: '15%' }}>Xếp loại</th>
          </tr>
        </thead>
        <tbody>
          {conductData.map((item) => (
            <tr key={item.id}>
              <td>{item.semester}</td>
              <td>{item.className}</td>
              <td>{item.teacher}</td>
              <td style={{ textAlign: 'center' }}>{item.score}</td>
              <td>{item.ranking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}