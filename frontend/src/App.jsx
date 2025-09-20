import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import NewsDetail from "./pages/news/[id]";
import AuthorList from "./pages/author/index";
import AuthorSubmit from "./pages/author/submit";
import PaperDetail from "./pages/author/paper/[id]";
import PaperEdit from "./pages/author/paper/[id]/edit";
import AuthorProfile from "./pages/author/profile";
import ReviewerList from "./pages/reviewer/index";
import ReviewDetail from "./pages/reviewer/review/[id]";
import ReviewerProfile from "./pages/reviewer/profile";
import NewsPage from "./pages/news/index";
import OrganizerDashboard from "./pages/organizer/index";
import OrganizerPapers from "./pages/organizer/papers/index";
import OrganizerPaperDetail from "./pages/organizer/papers/[id]";
import AssignReviewerPage from "./pages/organizer/papers/[id]/assign";
import OrganizerSchedule from "./pages/organizer/schedule";
import OrganizerInfo from "./pages/organizer/info";
import OrganizerDocuments from "./pages/organizer/documents";
import OrganizerReports from "./pages/organizer/reports";
import AdminDashboard from "./pages/admin/index";
import AdminUsers from "./pages/admin/users/index";
import AdminUserDetail from "./pages/admin/users/[id]";
import AdminSettings from "./pages/admin/settings";
import ProfilePage from "./pages/profile";
import NotificationsPage from "./pages/notifications";
import PageLoader from "@/components/PageLoader";
import AuthorDashboard from "./pages/author";
import ReviewerDashboard from "./pages/reviewer";

// wrapper để hiển thị loader khi đổi route
function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // giả delay 0.4s
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      <Routes>
        {/* Trang công cộng */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />

        {/* Trang tin tức */}
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<NewsPage />} />

        {/* Trang tác giả */}
        {/* <Route path="/author" element={<AuthorList />} /> */}
        <Route path="/author" element={<AuthorDashboard />} />

        <Route path="/author/submit" element={<AuthorSubmit />} />
        <Route path="/author/paper/:id" element={<PaperDetail />} />
        <Route path="/author/paper/:id/edit" element={<PaperEdit />} />
        <Route path="/author/profile" element={<AuthorProfile />} />

        {/* Trang reviewer */}
        {/* <Route path="/reviewer" element={<ReviewerList />} /> */}
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/reviewer/review/:id" element={<ReviewDetail />} />
        <Route path="/reviewer/profile" element={<ReviewerProfile />} />

        {/* Trang tổ chức */}
        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/organizer/papers" element={<OrganizerPapers />} />
        <Route path="/organizer/papers/:id" element={<OrganizerPaperDetail />} />
        <Route path="/organizer/papers/:id/assign" element={<AssignReviewerPage />} />
        <Route path="/organizer/schedule" element={<OrganizerSchedule />} />
        <Route path="/organizer/info" element={<OrganizerInfo />} />
        <Route path="/organizer/documents" element={<OrganizerDocuments />} />
        <Route path="/organizer/reports" element={<OrganizerReports />} />

        {/* Trang quản trị */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/:id" element={<AdminUserDetail />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
