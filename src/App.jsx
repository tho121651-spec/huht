import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'

// Import các components giao diện chính
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StatusBar from './components/StatusBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'

// Import các trang (Pages)
import Login from './pages/Login.jsx'
import StudentPortal from './pages/StudentPortal.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import Schedule from './pages/Schedule.jsx'

// Import trang Đăng ký học phần
import RegisterModules from './data/Studying/RegisterModules.jsx'

// Import trang Danh sách lớp đã đăng ký
import RegisteredCourses from './pages/RegisteredCourses.jsx'

// Import trang Chương trình đào tạo
import TrainingProgram from './pages/TrainingProgram.jsx'

// Import trang Kết quả rèn luyện
import Conduct from './pages/Conduct.jsx'

// Import trang Khảo sát hoạt động giảng dạy
import Survey from './pages/Survey.jsx'

// Import trang Lịch thi
import ExamSchedule from './pages/ExamSchedule.jsx'

// Import trang Kết quả học tập
import StudyResults from './pages/StudyResults.jsx'

// Layout dùng chung cho các trang sau khi đăng nhập
// Layout dùng chung cho các trang sau khi đăng nhập
function MainLayout() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        {/* Đưa StatusBar ra đây: Nằm trên nền xám, phía trên 2 cột */}
        <StatusBar />
      </div>

      <div className="container-fluid" id="wrapper">
        {/* CỘT TRÁI: Menu & Thông tin sinh viên */}
        <div className="panel-sidebar-left">
          <Sidebar />
        </div>

        {/* CỘT PHẢI: Khung trắng bắt đầu trực tiếp bằng THÔNG BÁO */}
        <div className="panel-main-content">
          <div className="hitec-content">
            <div className="row">
              <div className="col-xs-12">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
// Component xử lý Route Logout
function Logout() {
  const { logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout])

  return <Navigate to="/Account/Login" replace />
}

// Component bảo vệ Route
function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const storedUser = user || JSON.parse(localStorage.getItem('user'))

  return storedUser ? children : <Navigate to="/Account/Login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      {/* Route Đăng nhập & Đăng xuất */}
      <Route path="/Account/Login" element={<Login />} />
      <Route path="/Account/Logout" element={<Logout />} />

      {/* Các Route cần đăng nhập (Sẽ có Header, Sidebar...) */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="/News" replace />} />
        <Route path="/News" element={<StudentPortal />} />
        <Route path="/Account/News" element={<StudentPortal />} />
        <Route path="/News/Content/:slug" element={<NewsDetail />} />
        
        {/* Cả 2 đường dẫn /TimeTable và /TimeTable/Week đều dùng chung Schedule.jsx */}
        <Route path="/TimeTable" element={<Schedule />} />
        <Route path="/TimeTable/Week" element={<Schedule />} />
        
        {/* Route cho Đăng ký học tập */}
        <Route path="/Studying/Modules" element={<RegisterModules />} />

        {/* Route cho Danh sách lớp đã đăng ký */}
        <Route path="/Studying/RegisteredCourses" element={<RegisteredCourses />} />
        
        {/* Route cho Chương trình đào tạo */}
        <Route path="/TrainingProgram" element={<TrainingProgram />} />

        {/* Route cho Kết quả rèn luyện */}
        <Route path="/Statistics/Conduct" element={<Conduct />} />

        {/* Route cho Khảo sát hoạt động giảng dạy */}
        <Route path="/Survey" element={<Survey />} />

        {/* Route cho Lịch thi */}
        <Route path="/Studying/ScheduleOfExam" element={<ExamSchedule />} />

        {/* Route cho Kết quả học tập */}
        <Route path="/Statistics/StudyResults" element={<StudyResults />} />
      </Route>

      {/* Redirect tất cả các đường dẫn sai về /News */}
      <Route path="*" element={<Navigate to="/News" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}