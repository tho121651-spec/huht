import React, { useState } from 'react';
import { registerModulesData } from '../../data/menu.js';

export default function RegisterModules() {
  const [activeTab, setActiveTab] = useState('outPlan');
  const [showAlert, setShowAlert] = useState(true);

  const rawModules = Array.isArray(registerModulesData) ? registerModulesData : [];
  const currentModules = activeTab === 'inPlan' ? [] : rawModules;

  const compulsoryModules = currentModules.filter((item) => item.type === 'mandatory');
  const electiveModules = currentModules.filter((item) => item.type === 'optional');

  const renderModuleRows = (modulesList, startIndex = 0) => {
    if (!modulesList || modulesList.length === 0) {
      return (
        <tr style={{ backgroundColor: '#fff' }}>
          <td colSpan="7" style={{ height: '30px' }}></td>
        </tr>
      );
    }

    return modulesList.map((item, index) => {
      const stt = startIndex + index + 1;
      
      return (
        <tr key={item.id} className="module-row">
          <td className="text-center" style={{ color: '#333' }}>{stt}</td>
          <td className="text-left">
            <a href={`/student/Subject/Details/${item.code}/`}>{item.code}</a>
          </td>
          <td className="text-left">
            <a href={`/student/Subject/Details/${item.code}/`}>{item.name}</a>
          </td>
          <td className="text-center" style={{ color: '#333' }}>{item.credits}</td>
          <td className="text-center" style={{ color: '#333' }}>{item.openClasses}</td>
          <td className="text-center" style={{ color: '#333' }}>{item.registered ? '✓' : ''}</td>
          <td className="text-center">
            <a href={`/student/Studying/Courses/${item.code}/`} title={`Xem danh sách các nhóm lớp của học phần: ${item.name}`}>
              {/* Icon SVG Menu List */}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="#337ab7" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '2px' }}>
                <path fillRule="evenodd" d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0 5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0 5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"/>
                <circle cx="1.5" cy="3" r="1" fill="#ff6b6b"/>
                <circle cx="1.5" cy="8" r="1" fill="#ff6b6b"/>
                <circle cx="1.5" cy="13" r="1" fill="#ff6b6b"/>
              </svg>
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="hitec-content register-modules-container">
      <style>{`
        .register-modules-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .register-modules-container h2 {
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
        .alert-info-custom {
            clear: both;
            background-color: #d9edf7;
            border: 1px solid #bce8f1;
            color: #31708f;
            padding: 10px 15px;
            border-radius: 4px;
            margin-bottom: 15px;
            position: relative;
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            color: #31708f;
            cursor: pointer;
            border: none;
            background: transparent;
            font-size: 16px;
            opacity: 0.5;
        }
        .nav-tabs-custom {
            border-bottom: 1px solid #dddddd;
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .nav-tabs-custom li a {
            display: block;
            padding: 8px 15px;
            color: #337ab7;
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 4px 4px 0 0;
            margin-bottom: -1px;
        }
        .nav-tabs-custom li.active a {
            color: #555;
            background-color: #fff;
            border: 1px solid #dddddd;
            border-bottom-color: #fff;
        }

        /* KHỐI CSS CHUẨN TỪ BẢN GỐC (BỎ BORDER DỌC & THÊM BORDER TOP) */
        .table-custom {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            background: #fff;
        }
        .table-custom > thead > tr > th, 
        .table-custom > tbody > tr > th, 
        .table-custom > tfoot > tr > th, 
        .table-custom > thead > tr > td, 
        .table-custom > tbody > tr > td, 
        .table-custom > tfoot > tr > td {
            padding: 3px;
            line-height: 1.5;
            vertical-align: top;
            border-top: 1px solid #dddddd;
        }
        .table-custom > thead > tr > th {
            background-color: #e5e5e5;
            color: #000;
            font-weight: bold;
            vertical-align: middle;
            border-bottom: 1px solid #dddddd;
        }
        
        /* Hiệu ứng xen kẽ màu (Zebra Striping) */
        .table-custom tbody tr.module-row:nth-of-type(odd) {
            background-color: #ffffff;
        }
        .table-custom tbody tr.module-row:nth-of-type(even) {
            background-color: #f9f9f9;
        }
        .table-custom tbody tr.module-row:hover {
            background-color: #f5f5f5;
        }
        
        .register-modules-container a {
            color: #337ab7;
            text-decoration: none;
        }
        .register-modules-container a:hover {
            color: #23527c;
            text-decoration: underline;
        }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
      `}</style>

      <h2>DANH SÁCH HỌC PHẦN ĐƯỢC GIẢNG DẠY TRONG KẾ HOẠCH ĐÀO TẠO CỦA HỌC KỲ</h2>

      <a href="/student/Studying/RegisteredCourses" className="btn-outline">
        Danh sách lớp đã đăng ký
      </a>

      {showAlert && (
        <div className="alert-info-custom">
          <button className="close-btn" onClick={() => setShowAlert(false)}>&times;</button>
          <b>Sinh viên lưu ý: </b>Ưu tiên chọn và đăng ký học các học phần theo kế hoạch đào tạo của khóa/ngành, đăng ký học đầy đủ các học phần bắt buộc trong kế hoạch.
        </div>
      )}

      <ul className="nav-tabs-custom">
        <li className={activeTab === 'inPlan' ? 'active' : ''}>
          <a href="#inPlan" onClick={(e) => { e.preventDefault(); setActiveTab('inPlan'); }}>
            Các học phần theo Kế hoạch đào tạo của khóa/ngành
          </a>
        </li>
        <li className={activeTab === 'outPlan' ? 'active' : ''}>
          <a href="#outPlan" onClick={(e) => { e.preventDefault(); setActiveTab('outPlan'); }}>
            Các học phần trong chương trình đào tạo
          </a>
        </li>
      </ul>

      {/* Bao bọc bảng trong 1 div không viền (chỉ có viền dưới cùng nếu cần) */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #dddddd' }}>
        <table className="table-custom">
          <thead>
            <tr>
              <th style={{ width: '40px' }} className="text-center">STT</th>
              <th style={{ width: '100px' }} className="text-left">Mã học phần</th>
              <th className="text-left">Tên học phần</th>
              <th style={{ width: '60px' }} className="text-center">Số<br/>tín chỉ</th>
              <th style={{ width: '80px' }} className="text-center">Số lớp<br/>đã mở ĐK</th>
              <th style={{ width: '70px' }} className="text-center">HP đã<br/>đăng ký</th>
              <th style={{ width: '40px' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" style={{ fontWeight: 'bold', backgroundColor: '#fff', color: '#000', padding: '6px' }}>
                Các học phần bắt buộc
              </td>
            </tr>
            {renderModuleRows(compulsoryModules, 0)}

            <tr>
              <td colSpan="7" style={{ fontWeight: 'bold', backgroundColor: '#fff', color: '#000', padding: '6px' }}>
                Các học phần tự chọn
              </td>
            </tr>
            {renderModuleRows(electiveModules, compulsoryModules.length)}
          </tbody>
        </table>
      </div>
    </div>
  );
}