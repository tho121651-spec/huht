// Dữ liệu tổng quan chương trình đào tạo
export const programSummary = {
  name: 'Quản trị kinh doanh (K54->K56)',
  totalCredits: 169,
  mandatoryCredits: 86,
  electiveCredits: 83,
  minRequiredCredits: 113
};

// Dữ liệu chi tiết các học phần chia theo nhóm kiến thức (Tổng 63 môn)
export const curriculumData = [
  {
    groupName: 'Kiến thức giáo dục đại cương',
    totalGroupCredits: 29,
    mandatoryGroupCredits: 25,
    modules: [
      { id: 1, code: 'DCU1043', name: 'Triết học Mác - Lênin', credits: 3, isMandatory: true, semester: 1 },
      { id: 2, code: 'DLH1362', name: 'Pháp luật đại cương', credits: 2, isMandatory: true, semester: 1 },
      { id: 3, code: 'ICT1333', name: 'Tin học đại cương', credits: 3, isMandatory: true, semester: 1 },
      { id: 4, code: 'QLH1132', name: 'Khoa học môi trường', credits: 2, isMandatory: false, semester: 2 },
      { id: 5, code: 'QLH1332', name: 'Tâm lý học đại cương', credits: 2, isMandatory: false, semester: 2 },
      { id: 6, code: 'DLH1573', name: 'Xã hội học đại cương', credits: 3, isMandatory: false, semester: 2 },
      { id: 7, code: 'DCU1063', name: 'Lý thuyết xác suất và thống kê toán', credits: 3, isMandatory: true, semester: 2 },
      { id: 8, code: 'DCU1022', name: 'Kinh tế chính trị Mác - Lênin', credits: 2, isMandatory: true, semester: 2 },
      { id: 9, code: 'DCU1012', name: 'Chủ nghĩa xã hội khoa học', credits: 2, isMandatory: true, semester: 3 },
      { id: 10, code: 'DLH1283', name: 'Luật kinh tế', credits: 3, isMandatory: false, semester: 3 },
      { id: 11, code: 'ICT2173', name: 'Ngoại ngữ chuyên ngành 1', credits: 3, isMandatory: true, semester: 4 },
      { id: 12, code: 'DCU1052', name: 'Tư tưởng Hồ Chí Minh', credits: 2, isMandatory: true, semester: 4 },
      { id: 13, code: 'DCU1032', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, isMandatory: true, semester: 5 },
      { id: 14, code: 'ICT2183', name: 'Ngoại ngữ chuyên ngành 2', credits: 3, isMandatory: true, semester: 5 }
    ]
  },
  {
    groupName: 'Kiến thức cơ sở của khối ngành',
    totalGroupCredits: 21,
    mandatoryGroupCredits: 21,
    modules: [
      { id: 15, code: 'DLH1603', name: 'Kinh tế học ứng dụng', credits: 3, isMandatory: true, semester: 1 },
      { id: 16, code: 'DLH2503', name: 'Tổng quan du lịch', credits: 3, isMandatory: true, semester: 1 },
      { id: 17, code: 'EMM2093', name: 'Marketing căn bản', credits: 3, isMandatory: true, semester: 2 },
      { id: 18, code: 'EMM3263', name: 'Quản trị học', credits: 3, isMandatory: true, semester: 2 },
      { id: 19, code: 'DLH2033', name: 'Cơ sở văn hóa Việt Nam', credits: 3, isMandatory: true, semester: 3 },
      { id: 20, code: 'DLH2333', name: 'Nguyên lý kế toán', credits: 3, isMandatory: true, semester: 3 },
      { id: 21, code: 'DLH3353', name: 'Nguyên lý thống kê kinh tế', credits: 3, isMandatory: true, semester: 4 }
    ]
  },
  {
    groupName: 'Kiến thức cơ sở của ngành',
    totalGroupCredits: 15,
    mandatoryGroupCredits: 15,
    modules: [
      { id: 22, code: 'EMM3303', name: 'Quản trị nhân lực', credits: 3, isMandatory: true, semester: 4 },
      { id: 23, code: 'EMM3323', name: 'Quản trị tài chính', credits: 3, isMandatory: true, semester: 5 },
      { id: 24, code: 'EMM3103', name: 'Marketing dịch vụ', credits: 3, isMandatory: true, semester: 5 },
      { id: 25, code: 'EMM3193', name: 'Phương pháp nghiên cứu trong du lịch', credits: 3, isMandatory: true, semester: 5 },
      { id: 26, code: 'EMM3253', name: 'Quản trị chiến lược', credits: 3, isMandatory: true, semester: 6 }
    ]
  },
  {
    groupName: 'Kiến thức ngành',
    totalGroupCredits: 26,
    mandatoryGroupCredits: 10,
    modules: [
      { id: 27, code: 'EMM4172', name: 'Nhập môn tổ chức và quản lý sự kiện', credits: 2, isMandatory: true, semester: 3 },
      { id: 28, code: 'ICT4202', name: 'Nhập môn marketing điện tử', credits: 2, isMandatory: false, semester: 4 },
      { id: 29, code: 'ICT4253', name: 'Quản lý hệ thống thông tin du lịch', credits: 3, isMandatory: false, semester: 4 },
      { id: 30, code: 'QLH3262', name: 'Nhập môn quản trị lữ hành', credits: 2, isMandatory: false, semester: 4 },
      { id: 31, code: 'QLH3413', name: 'Lễ tân ngoại giao', credits: 3, isMandatory: false, semester: 4 },
      { id: 32, code: 'DLH3542', name: 'Văn hóa Huế', credits: 2, isMandatory: false, semester: 4 },
      { id: 33, code: 'EMM3162', name: 'Nhập môn quan hệ công chúng', credits: 2, isMandatory: false, semester: 4 },
      { id: 34, code: 'EMM3072', name: 'Kỹ năng thuyết trình', credits: 2, isMandatory: false, semester: 4 },
      { id: 35, code: 'DLH3123', name: 'Kế toán doanh nghiệp', credits: 3, isMandatory: false, semester: 5 },
      { id: 36, code: 'QLH3193', name: 'Nghiệp vụ hướng dẫn du lịch 1', credits: 3, isMandatory: false, semester: 5 },
      { id: 37, code: 'ICT2193', name: 'Nhập môn du lịch điện tử', credits: 3, isMandatory: false, semester: 5 },
      { id: 38, code: 'ICT3212', name: 'Nhập môn thương mại điện tử', credits: 2, isMandatory: false, semester: 5 },
      { id: 39, code: 'EMM3403', name: 'Quản trị bán hàng', credits: 3, isMandatory: true, semester: 5 },
      { id: 40, code: 'QLH3253', name: 'Ngoại ngữ chuyên ngành 3', credits: 3, isMandatory: false, semester: 6 },
      { id: 41, code: 'DLH3443', name: 'Quy hoạch du lịch', credits: 3, isMandatory: false, semester: 6 },
      { id: 42, code: 'DLH3512', name: 'Văn hóa di sản Việt Nam và thế giới', credits: 2, isMandatory: false, semester: 6 },
      { id: 43, code: 'DLH3522', name: 'Văn hóa Đông Nam Á', credits: 2, isMandatory: false, semester: 6 },
      { id: 44, code: 'EMM3223', name: 'Quản lý điểm đến', credits: 3, isMandatory: false, semester: 6 },
      { id: 45, code: 'DLH3562', name: 'Văn hóa và du lịch', credits: 2, isMandatory: false, semester: 6 },
      { id: 46, code: 'DLH4073', name: 'Du lịch bền vững', credits: 3, isMandatory: false, semester: 6 },
      { id: 47, code: 'EMM3312', name: 'Quản trị quan hệ khách hàng', credits: 2, isMandatory: false, semester: 6 },
      { id: 48, code: 'EMM3332', name: 'Quản trị thương hiệu', credits: 2, isMandatory: true, semester: 7 },
      { id: 49, code: 'EMM3273', name: 'Quản trị marketing', credits: 3, isMandatory: true, semester: 7 },
      { id: 50, code: 'DLH3612', name: 'Thống kê kinh doanh và kinh tế', credits: 2, isMandatory: false, semester: 7 },
      { id: 51, code: 'DLH3272', name: 'Luật du lịch', credits: 2, isMandatory: false, semester: 7 },
      { id: 52, code: 'QLH3072', name: 'Du lịch MICE', credits: 2, isMandatory: false, semester: 7 },
      { id: 53, code: 'EMM4132', name: 'Marketing thị trường tổ chức', credits: 2, isMandatory: false, semester: 7 },
      { id: 54, code: 'QKN3382', name: 'Du lịch ẩm thực', credits: 2, isMandatory: false, semester: 7 },
      { id: 55, code: 'EMM4052', name: 'Đàm phán kinh doanh', credits: 2, isMandatory: false, semester: 7 }
    ]
  },
  {
    groupName: 'Kiến thức chuyên ngành',
    totalGroupCredits: 9,
    mandatoryGroupCredits: 9,
    modules: [
      { id: 56, code: 'QKN4453', name: 'Quản trị nhà hàng', credits: 3, isMandatory: true, semester: 6 },
      { id: 57, code: 'QLH3303', name: 'Quản trị lữ hành', credits: 3, isMandatory: true, semester: 7 },
      { id: 58, code: 'QKN4073', name: 'Quản trị khách sạn', credits: 3, isMandatory: true, semester: 7 }
    ]
  },
  {
    groupName: 'Thực tập',
    totalGroupCredits: 6,
    mandatoryGroupCredits: 6,
    modules: [
      { id: 59, code: 'TTH3023', name: 'Thực tập nghiệp vụ 1', credits: 3, isMandatory: true, semester: 6 },
      { id: 60, code: 'TTH3103', name: 'Thực tập quản lý', credits: 3, isMandatory: true, semester: 6 }
    ]
  },
  {
    groupName: 'Chuyên đề hoặc khóa luận',
    totalGroupCredits: 7,
    mandatoryGroupCredits: 0,
    modules: [
      { id: 61, code: 'EMM4057', name: 'Khóa luận tốt nghiệp', credits: 7, isMandatory: false, semester: 8 },
      { id: 62, code: 'EMM4045', name: 'Chuyên đề tốt nghiệp', credits: 5, isMandatory: false, semester: 8 },
      { id: 63, code: 'EMM5412', name: 'CĐ Lập và quản lý dự án du lịch', credits: 2, isMandatory: false, semester: 8 }
    ]
  }
];