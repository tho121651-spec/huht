import React from 'react';
import { programSummary, curriculumData } from '../data/Studying/trainingProgramData';

export default function TrainingProgram() {
  return (
    <div className="hitec-content training-program-container">
      <style>{`
        .training-program-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .training-program-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #dddddd;
            padding-bottom: 6px;
            text-transform: uppercase;
        }
        
        /* BẢNG TÓM TẮT PHÍA TRÊN */
        .summary-table {
            width: 100%;
            margin-bottom: 25px;
            border-collapse: collapse;
        }
        .summary-table td {
            padding: 8px 5px;
            border-bottom: 1px dotted #999;
            vertical-align: middle;
        }

        /* BẢNG CHI TIẾT MÔN HỌC */
        .training-program-container .table-bordered {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            background-color: #fff;
            margin-bottom: 20px;
        }
        .training-program-container .table-bordered > thead > tr > th,
        .training-program-container .table-bordered > tbody > tr > th,
        .training-program-container .table-bordered > tfoot > tr > th,
        .training-program-container .table-bordered > thead > tr > td,
        .training-program-container .table-bordered > tbody > tr > td,
        .training-program-container .table-bordered > tfoot > tr > td {
            padding: 4px 6px; /* Ép lề hẹp lại giống trang gốc */
            line-height: 1.5;
            vertical-align: middle;
            border: 1px solid #dddddd;
        }
        .training-program-container .table-bordered > thead > tr > th {
            background-color: #e6e6e6;
            text-align: center; /* Header căn giữa tất cả các cột */
            vertical-align: middle;
            color: #000;
            font-weight: bold;
        }
        
        /* Hiệu ứng xen kẽ màu (Zebra Striping) */
        .training-program-container .table-bordered tbody tr.module-row:nth-of-type(odd) {
            background-color: #ffffff;
        }
        .training-program-container .table-bordered tbody tr.module-row:nth-of-type(even) {
            background-color: #f9f9f9;
        }
        .training-program-container .table-bordered tbody tr.module-row:hover {
            background-color: #f5f5f5;
        }

        /* Link màu xanh */
        .training-program-container a {
            color: #337ab7;
            text-decoration: none;
        }
        .training-program-container a:hover {
            color: #23527c;
            text-decoration: underline;
        }
        
        .text-center { text-align: center; }
        .text-left { text-align: left; }
      `}</style>

      <h2>CHƯƠNG TRÌNH ĐÀO TẠO</h2>

      {/* Bảng tóm tắt thông tin */}
      <table className="summary-table">
        <tbody>
          <tr>
            <td style={{ width: '220px', fontWeight: 'bold', textAlign: 'right' }}>Chương trình đào tạo:</td>
            <td colSpan="5">{programSummary.name}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', textAlign: 'right' }}>Tổng số tín chỉ:</td>
            <td style={{ width: '15%' }}>{programSummary.totalCredits}</td>
            
            <td style={{ width: '15%', fontWeight: 'bold', textAlign: 'right' }}>Bắt buộc:</td>
            <td style={{ width: '15%' }}>{programSummary.mandatoryCredits}</td>
            
            <td style={{ width: '15%', fontWeight: 'bold', textAlign: 'right' }}>Tự chọn:</td>
            <td>{programSummary.electiveCredits}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', textAlign: 'right' }}>Số TC tối thiểu phải tích lũy:</td>
            <td colSpan="5">{programSummary.minRequiredCredits}</td>
          </tr>
        </tbody>
      </table>

      {/* Bảng chi tiết môn học */}
      <table className="table-bordered">
        <thead>
          <tr>
            <th style={{ width: '45px' }}>STT</th>
            <th style={{ width: '110px' }}>Mã học phần</th>
            <th>Tên học phần</th>
            <th style={{ width: '70px' }}>Số<br />tín chỉ</th>
            <th style={{ width: '90px' }}>Học phần<br />bắt buộc</th>
            <th style={{ width: '80px' }}>Học kỳ<br />dự kiến</th>
          </tr>
        </thead>
        <tbody>
          {curriculumData.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {/* Tiêu đề nhóm kiến thức */}
              <tr>
                <td colSpan="6" style={{ fontWeight: 'bold', backgroundColor: '#fff', color: '#000' }}>
                  {group.groupName} (Số tín chỉ phải tích lũy: {group.totalGroupCredits}, số tín chỉ bắt buộc: {group.mandatoryGroupCredits})
                </td>
              </tr>
              {/* Danh sách môn học trong nhóm */}
              {group.modules.map((module) => (
                <tr key={module.id} className="module-row">
                  <td className="text-center">{module.id}</td>
                  {/* Mã học phần căn giữa */}
                  <td className="text-center">
                    <a href={`/student/Subject/Details/${module.code}/`}>{module.code}</a>
                  </td>
                  {/* Tên học phần căn trái */}
                  <td className="text-left">
                    <a href={`/student/Subject/Details/${module.code}/`}>{module.name}</a>
                  </td>
                  <td className="text-center">{module.credits}</td>
                  <td className="text-center">{module.isMandatory ? '✓' : ''}</td>
                  <td className="text-center">{module.semester}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}