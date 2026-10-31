export const studentInfo = {
  cohort: 'Khóa 56',
  major: 'QUẢN TRỊ KINH DOANH',
  majorType: 'Ngành học chính',
  totalCreditsAccumulated: 74,
  cumulativeGPA: '1.95',
  currentSemester: 1,
  currentYear: '2026-2027',
};

const c = (code, name, credits, score10, letter, score4, attempt = 1, examAttempt = 1) => ({
  code, name, credits, attempt, examAttempt, score10, letter, score4,
});

export const studyResultsData = [
  {
    semester: 'Học kỳ: 1 - Năm học: 2022-2023',
    regCredits: 14,
    accCredits: 14,
    courses: [
      c('DCU1043', 'Triết học Mác - Lênin', 3, 6.1, 'C', 2.0),
      c('DCU1063', 'Lý thuyết xác suất và thống kê toán', 3, 5.3, 'D', 1.0, 2),
      c('DLH1362', 'Pháp luật đại cương', 2, 6.3, 'C', 2.0),
      c('DLH1603', 'Kinh tế học ứng dụng', 3, 7.6, 'B', 3.0),
      c('DLH2503', 'Tổng quan du lịch', 3, 7.9, 'B', 3.0),
    ],
  },
  {
    semester: 'Học kỳ: 2 - Năm học: 2022-2023',
    regCredits: 15,
    accCredits: 15,
    courses: [
      c('EMM2093', 'Marketing căn bản', 3, 5.5, 'C', 2.0),
      c('EMM3263', 'Quản trị học', 3, 8.0, 'B', 3.0),
      c('DCU1022', 'Kinh tế chính trị Mác - Lênin', 2, 4.8, 'D', 1.0),
      c('ICT1333', 'Tin học đại cương', 3, 5.6, 'C', 2.0),
      c('QLH1132', 'Khoa học môi trường', 2, 4.7, 'D', 1.0),
      c('QLH1332', 'Tâm lý học đại cương', 2, 7.6, 'B', 3.0),
    ],
  },
  {
    semester: 'Học kỳ: 1 - Năm học: 2023-2024',
    regCredits: 16,
    accCredits: 16,
    courses: [
      c('DCU1012', 'Chủ nghĩa xã hội khoa học', 2, 4.3, 'D', 1.0),
      c('DLH2033', 'Cơ sở văn hóa Việt Nam', 3, 5.4, 'D', 1.0),
      c('DLH2333', 'Nguyên lý kế toán', 3, 4.5, 'D', 1.0),
      c('EMM3303', 'Quản trị nhân lực', 3, 4.9, 'D', 1.0),
      c('EMM3072', 'Kỹ năng thuyết trình', 2, 8.4, 'B', 3.0),
      c('DLH3353', 'Nguyên lý thống kê kinh tế', 3, 5.6, 'C', 2.0),
    ],
  },
  {
    semester: 'Học kỳ: 2 - Năm học: 2023-2024',
    regCredits: 17,
    accCredits: 17,
    courses: [
      c('DCU1052', 'Tư tưởng Hồ Chí Minh', 2, 5.2, 'D', 1.0),
      c('QLH3413', 'Lễ tân ngoại giao', 3, 4.8, 'D', 1.0),
      c('ICT2173', 'Ngoại ngữ chuyên ngành 1', 3, 4.8, 'D', 1.0),
      c('ICT4202', 'Nhập môn marketing điện tử', 2, 5.9, 'C', 2.0),
      c('ICT4253', 'Quản lý hệ thống thông tin du lịch', 3, 4.2, 'D', 1.0),
      c('EMM3162', 'Nhập môn quan hệ công chúng', 2, 5.3, 'D', 1.0),
      c('EMM4172', 'Nhập môn tổ chức và quản lý sự kiện', 2, 7.7, 'B', 3.0),
    ],
  },
  {
    semester: 'Học kỳ: 1 - Năm học: 2024-2025',
    regCredits: 17,
    accCredits: 6,
    courses: [
      c('EMM3193', 'Phương pháp nghiên cứu trong du lịch', 3, 3.4, 'F', 0.0),
      c('EMM3223', 'Quản lý điểm đến', 3, 5.6, 'C', 2.0),
      c('DCU1032', 'Lịch sử Đảng Cộng sản Việt Nam', 2, 3.7, 'F', 0.0),
      c('EMM3103', 'Marketing dịch vụ', 3, 2.4, 'F', 0.0),
      c('EMM3323', 'Quản trị tài chính', 3, 3.8, 'F', 0.0),
      c('EMM3403', 'Quản trị bán hàng', 3, 6.1, 'C', 2.0),
    ],
  },
  {
    semester: 'Học kỳ: 2 - Năm học: 2024-2025',
    regCredits: 9,
    accCredits: 6,
    courses: [
      c('ICT2183', 'Ngoại ngữ chuyên ngành 2', 3, 0.3, 'F', 0.0),
      c('TTH3023', 'Thực tập nghiệp vụ 1', 3, 8.6, 'A', 4.0),
      c('TTH3103', 'Thực tập quản lý', 3, 9.0, 'A', 4.0),
    ],
  },
  {
    semester: 'Học kỳ: 2 - Năm học: 2025-2026',
    regCredits: 7,
    accCredits: 0,
    courses: [
      c('EMM5412', 'CĐ Lập và quản lý dự án du lịch', 2, 0.0, 'F', 0.0),
      c('EMM4045', 'Chuyên đề tốt nghiệp', 5, 0.0, 'F', 0.0),
    ],
  },
];