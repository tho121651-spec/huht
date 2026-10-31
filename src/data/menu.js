// 1. Menu chính (Header Navbar)
export const mainMenu = [
  {
    label: 'Hỗ trợ hoạt động học tập',
    items: [
      { type: 'header', label: 'Kế hoạch học tập' },
      { type: 'link', label: 'Đăng ký học tập', to: '/Studying/Modules' },
      { type: 'link', label: 'Lớp học phần đã đăng ký', to: '/Studying/RegisteredCourses' },
      { type: 'link', label: 'Lịch trình học tập', to: '/TimeTable' },
      { type: 'link', label: 'Lịch thi kết thúc học phần', to: '/Studying/ScheduleOfExam' },

      { type: 'header', label: 'Hỗ trợ - Tra cứu thông tin' },
      { type: 'link', label: 'Chương trình đào tạo', to: '/TrainingProgram' },

      { type: 'header', label: 'Số liệu - Tổng hợp' },
      { type: 'link', label: 'Lịch sử quá trình học tập', to: '/Statistics/HistoryOfStudying' },
      { type: 'link', label: 'Kết quả học tập', to: '/Statistics/StudyResults' },
      { type: 'link', label: 'Kết quả rèn luyện', to: '/Statistics/Conduct' },

      { type: 'header', label: 'Đảm bảo chất lượng giáo dục' },
      { type: 'link', label: 'Khảo sát hoạt động giảng dạy', to: '/Survey' }
    ]
  },
  {
    label: 'Học phí - Lệ phí',
    items: [
      { type: 'link', label: 'Nộp học phí trực tuyến', to: '/Tuition/Payment' },
      { type: 'link', label: 'Nộp học phí (sử dụng QRCode)', to: '/Tuition/PaymentQR' },
      { type: 'divider' },
      { type: 'link', label: 'Tra cứu lịch sử nộp học phí', to: '/Tuition/History' }
    ]
  }
]

// 2. Các chức năng chung (Cột trái Sidebar)
export const generalFunctions = [
  { id: 'linkNews', icon: 'book', label: 'Tin tức - Thông báo', to: '/News', badge: 'notification-news' },
  { id: 'linkCalendar', icon: 'calendar', label: 'Thời khóa biểu học tập', to: '/TimeTable/Week', badge: 'notification-calendar' },
  { id: 'linkMessage', icon: 'message', label: 'Tin nhắn', to: '/Message/Inbox', badge: 'notification-message' }
]

// 3. Khối tài khoản (Cột trái Sidebar)
export const accountLinks = [
  { id: 'link_userProfile', icon: 'people', label: 'Lý lịch cá nhân', to: '/Account/UserProfile' },
  { id: 'link_userPassword', icon: 'key', label: 'Đổi mật khẩu', to: '/Account/ChangePassword' },
  { id: 'link_userLogout', icon: 'logout', label: 'Đăng xuất', to: '/Account/Logout', confirm: 'Thoát khỏi hệ thống' }
]

// 4. Danh sách tài khoản giả lập (Lưu vào localStorage)
export const mockUsers = [
  {
    studentId: '22D4020101',
    password: '1',
    fullName: 'Trương Khắc Ái Quốc',
    className: 'K56 Quản trị Kinh doanh'
  },
]

// 5. Cấu hình giao diện và ô nhập form Login
export const loginConfig = {
  title: 'SINH VIÊN',
  logoTop: '/student/images/logo_huht.png',
  badgeIcon: '/student/images/student_office_badge.png',
  footer: {
    schoolName: 'Trường Du lịch, Đại học Huế',
    address: '22 Lâm Hoằng, Thành phố Huế',
    contact: 'Điện thoại: 0234 3897755 - Fax: 0234 3897744'
  },
  fields: [
    {
      id: 'studentId',
      label: 'Mã sinh viên:',
      type: 'text',
      placeholder: 'Mã sinh viên'
    },
    {
      id: 'password',
      label: 'Mật khẩu:',
      type: 'password',
      placeholder: 'Mật khẩu'
    }
  ]
}
export const registerModulesData = [
  // --- Các học phần bắt buộc ---
  { id: 1, code: 'DCU1012', name: 'Chủ nghĩa xã hội khoa học', credits: 2, openClasses: 9, registered: false, type: 'mandatory' },
  { id: 2, code: 'DCU1022', name: 'Kinh tế chính trị Mác - Lênin', credits: 2, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 3, code: 'DCU1032', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, openClasses: 15, registered: true, type: 'mandatory' },
  { id: 4, code: 'DCU1043', name: 'Triết học Mác - Lênin', credits: 3, openClasses: 11, registered: false, type: 'mandatory' },
  { id: 5, code: 'DCU1052', name: 'Tư tưởng Hồ Chí Minh', credits: 2, openClasses: 9, registered: false, type: 'mandatory' },
  { id: 6, code: 'DCU1063', name: 'Lý thuyết xác suất và thống kê toán', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 7, code: 'DLH1362', name: 'Pháp luật đại cương', credits: 2, openClasses: 6, registered: false, type: 'mandatory' },
  { id: 8, code: 'DLH1603', name: 'Kinh tế học ứng dụng', credits: 3, openClasses: 8, registered: false, type: 'mandatory' },
  { id: 9, code: 'DLH2033', name: 'Cơ sở văn hóa Việt Nam', credits: 3, openClasses: 9, registered: false, type: 'mandatory' },
  { id: 10, code: 'DLH2333', name: 'Nguyên lý kế toán', credits: 3, openClasses: 12, registered: false, type: 'mandatory' },
  { id: 11, code: 'DLH2503', name: 'Tổng quan du lịch', credits: 3, openClasses: 14, registered: false, type: 'mandatory' },
  { id: 12, code: 'DLH3353', name: 'Nguyên lý thống kê kinh tế', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 13, code: 'EMM2093', name: 'Marketing căn bản', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 14, code: 'EMM3103', name: 'Marketing dịch vụ', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 15, code: 'EMM3193', name: 'Phương pháp nghiên cứu trong du lịch', credits: 3, openClasses: 7, registered: true, type: 'mandatory' },
  { id: 16, code: 'EMM3253', name: 'Quản trị chiến lược', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 17, code: 'EMM3263', name: 'Quản trị học', credits: 3, openClasses: 5, registered: false, type: 'mandatory' }, // Đã sửa EMM3261 thành EMM3263
  { id: 18, code: 'EMM3273', name: 'Quản trị marketing', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 19, code: 'EMM3303', name: 'Quản trị nhân lực', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 20, code: 'EMM3323', name: 'Quản trị tài chính', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 21, code: 'EMM3332', name: 'Quản trị thương hiệu', credits: 2, openClasses: 4, registered: true, type: 'mandatory' },
  { id: 22, code: 'EMM3403', name: 'Quản trị bán hàng', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 23, code: 'EMM4172', name: 'Nhập môn tổ chức và quản lý sự kiện', credits: 2, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 24, code: 'ICT1333', name: 'Tin học đại cương', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 25, code: 'ICT2173', name: 'Ngoại ngữ chuyên ngành 1', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 26, code: 'ICT2183', name: 'Ngoại ngữ chuyên ngành 2', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 27, code: 'QKN1073', name: 'Quản trị khách sạn', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 28, code: 'QKN4453', name: 'Quản trị nhà hàng', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 29, code: 'QLH3303', name: 'Quản trị lữ hành', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 30, code: 'TTH3023', name: 'Thực tập nghiệp vụ 1', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },
  { id: 31, code: 'TTH3103', name: 'Thực tập quản lý', credits: 3, openClasses: 0, registered: false, type: 'mandatory' },

  // --- Các học phần tự chọn ---
  { id: 32, code: 'DLH1283', name: 'Luật kinh tế', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 33, code: 'DLH1573', name: 'Xã hội học đại cương', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 34, code: 'DLH3123', name: 'Kế toán doanh nghiệp', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 35, code: 'DLH3272', name: 'Luật du lịch', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 36, code: 'DLH3443', name: 'Quy hoạch du lịch', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 37, code: 'DLH3512', name: 'Văn hóa di sản Việt Nam và thế giới', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 38, code: 'DLH3522', name: 'Văn hóa Đông Nam Á', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 39, code: 'DLH3542', name: 'Văn hóa Huế', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 40, code: 'DLH3562', name: 'Văn hóa và du lịch', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 41, code: 'DLH3612', name: 'Thống kê kinh doanh và kinh tế', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 42, code: 'DLH4073', name: 'Du lịch bền vững', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 43, code: 'EMM3072', name: 'Kỹ năng thuyết trình', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 44, code: 'EMM3162', name: 'Nhập môn quan hệ công chúng', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 45, code: 'EMM3223', name: 'Quản lý điểm đến', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 46, code: 'EMM3312', name: 'Quản trị quan hệ khách hàng', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 47, code: 'EMM4045', name: 'Chuyên đề tốt nghiệp', credits: 5, openClasses: 0, registered: false, type: 'optional' },
  { id: 48, code: 'EMM4052', name: 'Đàm phán kinh doanh', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 49, code: 'EMM4057', name: 'Khóa luận tốt nghiệp', credits: 7, openClasses: 0, registered: false, type: 'optional' },
  { id: 50, code: 'EMM4132', name: 'Marketing thị trường tổ chức', credits: 2, openClasses: 1, registered: false, type: 'optional' },
  { id: 51, code: 'EMM5412', name: 'CĐ Lập và quản lý dự án du lịch', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 52, code: 'ICT2193', name: 'Nhập môn du lịch điện tử', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 53, code: 'ICT3212', name: 'Nhập môn thương mại điện tử', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 54, code: 'ICT4202', name: 'Nhập môn marketing điện tử', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 55, code: 'ICT4253', name: 'Quản lý hệ thống thông tin du lịch', credits: 3, openClasses: 11, registered: false, type: 'optional' },
  { id: 56, code: 'QKN3382', name: 'Du lịch ẩm thực', credits: 2, openClasses: 1, registered: false, type: 'optional' },
  { id: 57, code: 'QLH1132', name: 'Khoa học môi trường', credits: 2, openClasses: 9, registered: false, type: 'optional' },
  { id: 58, code: 'QLH1332', name: 'Tâm lý học đại cương', credits: 2, openClasses: 8, registered: false, type: 'optional' },
  { id: 59, code: 'QLH3072', name: 'Du lịch MICE', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 60, code: 'QLH3193', name: 'Nghiệp vụ hướng dẫn du lịch 1', credits: 3, openClasses: 4, registered: false, type: 'optional' },
  { id: 61, code: 'QLH3253', name: 'Ngoại ngữ chuyên ngành 3', credits: 3, openClasses: 0, registered: false, type: 'optional' },
  { id: 62, code: 'QLH3262', name: 'Nhập môn quản trị lữ hành', credits: 2, openClasses: 0, registered: false, type: 'optional' },
  { id: 63, code: 'QLH3413', name: 'Lễ tân ngoại giao', credits: 3, openClasses: 7, registered: false, type: 'optional' }
];