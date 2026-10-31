import React from 'react';

export default function Survey() {
  return (
    <div className="hitec-content survey-container">
      <style>{`
        .survey-container {
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
        }
        .survey-container h2 {
            font-size: 14px;
            font-weight: bold;
            color: #004072;
            margin-bottom: 15px;
            border-bottom: 1px solid #dddddd;
            padding-bottom: 6px;
            text-transform: uppercase;
        }
        .survey-container p {
            margin-bottom: 10px;
            line-height: 1.5;
        }
        .survey-container .table-bordered {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            background-color: #fff;
            margin-top: 15px;
        }
        .survey-container .table-bordered > thead > tr > th,
        .survey-container .table-bordered > tbody > tr > td {
            padding: 6px 8px;
            line-height: 1.5;
            border: 1px solid #dddddd;
        }
        .survey-container .table-bordered > thead > tr > th {
            background-color: #e6e6e6;
            text-align: left;
            font-weight: bold;
            color: #000;
        }
      `}</style>

      <h2>KHẢO SÁT Ý KIẾN SINH VIÊN VỀ HOẠT ĐỘNG ĐÀO TẠO</h2>

      <div style={{ marginBottom: '20px' }}>
        <p>Chào bạn!</p>
        <p>Để góp phần nâng cao chất lượng của hoạt động đào tạo trong Nhà trường, chúng tôi rất mong bạn bỏ chút ít thời gian giúp chúng tôi trả lời các phiếu khảo sát cho các lớp học phần mà bạn theo học. Những đóng góp của bạn qua các phiếu khảo sát này sẽ là nguồn thông tin rất quí báu đối với chúng tôi.</p>
        <p>Chúng tôi đảm bảo tính bảo mật của các phiếu trả lời khảo sát và chỉ sử dụng kết quả khảo sát để phục vụ cho việc nâng cao chất lượng đào tạo của Trường.</p>
        <p>Trân trọng.</p>
      </div>

      <table className="table-bordered">
        <thead>
          <tr>
            <th style={{ width: '60px', textAlign: 'center' }}>STT</th>
            <th>Lớp học phần</th>
            <th style={{ width: '30%' }}>Giảng viên</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" style={{ textAlign: 'center', padding: '20px 10px' }}>
              Hiện chưa có lớp học phần cần khảo sát. Cảm ơn bạn đã quan tâm!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}