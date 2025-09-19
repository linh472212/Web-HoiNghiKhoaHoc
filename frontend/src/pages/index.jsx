import React, { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Award,
  Clock,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      label: "Bài báo đã nhận",
      value: "1,247",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      label: "Tác giả tham gia",
      value: "892",
      icon: Users,
      color: "bg-green-500",
    },
    {
      label: "Phản biện viên",
      value: "156",
      icon: Star,
      color: "bg-purple-500",
    },
    { label: "Ngày còn lại", value: "45", icon: Clock, color: "bg-red-500" },
  ];

  const timeline = [
    { date: "15/12/2024", title: "Hạn cuối nộp bài", status: "completed" },
    {
      date: "20/01/2025",
      title: "Thông báo kết quả phản biện",
      status: "active",
    },
    { date: "15/02/2025", title: "Hạn nộp bài sửa đổi", status: "upcoming" },
    { date: "01/03/2025", title: "Khai mạc hội nghị", status: "upcoming" },
  ];

  const news = [
    {
      id: 1,
      title: "Thông báo gia hạn nộp bài báo đến 20/12/2024",
      excerpt:
        "Do nhiều yêu cầu từ cộng đồng nghiên cứu, ban tổ chức quyết định gia hạn thời gian nộp bài...",
      date: "10/12/2024",
      category: "Thông báo quan trọng",
    },
    {
      id: 2,
      title: "Danh sách diễn giả chính đã được công bố",
      excerpt:
        "Chúng tôi vinh dự giới thiệu các chuyên gia hàng đầu sẽ tham gia hội nghị năm nay...",
      date: "05/12/2024",
      category: "Tin tức",
    },
    {
      id: 3,
      title: "Hướng dẫn chuẩn bị bài báo theo template mới",
      excerpt:
        "Template mới đã được cập nhật với các yêu cầu về định dạng và cấu trúc bài báo...",
      date: "01/12/2024",
      category: "Hướng dẫn",
    },
  ];

  const speakers = [
    {
      name: "TS. Nguyễn Văn An",
      title: "Giám đốc Viện AI Quốc gia",
      topic: "Tương lai của AI trong giáo dục",
      avatar: "👨‍🎓",
    },
    {
      name: "PGS.TS. Trần Thị Bình",
      title: "Trưởng khoa CNTT - ĐH Bách Khoa",
      topic: "Blockchain và ứng dụng thực tế",
      avatar: "👩‍🏫",
    },
    {
      name: "TS. Lê Hoàng Cường",
      title: "Chuyên gia An ninh mạng",
      topic: "Cybersecurity trong kỷ nguyên số",
      avatar: "👨‍💻",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            🎯 Hạn nộp bài: 20/12/2024
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hội Nghị Khoa Học
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Quốc Tế 2025
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nền tảng hàng đầu kết nối các nhà nghiên cứu, chia sẻ kiến thức và
            thúc đẩy sự đổi mới trong lĩnh vực công nghệ thông tin và khoa học
            máy tính.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 font-semibold">
              Nộp bài báo ngay
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
              Tải template
            </button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">
                1-3 Tháng 3, 2025
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">
                TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">
                1000+ Tham dự viên
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center text-white`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lịch trình quan trọng
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Theo dõi các mốc thời gian quan trọng để không bỏ lỡ cơ hội tham
              gia hội nghị
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.date}</p>
                      </div>
                    )}
                  </div>

                  <div
                    className={`relative z-10 w-4 h-4 rounded-full border-4 ${
                      item.status === "completed"
                        ? "bg-green-500 border-green-200"
                        : item.status === "active"
                        ? "bg-blue-500 border-blue-200"
                        : "bg-gray-300 border-gray-200"
                    }`}
                  ></div>

                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.date}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diễn giả chính
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gặp gỡ các chuyên gia hàng đầu sẽ chia sẻ những nghiên cứu tiên
              phong
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl group-hover:shadow-lg transition-shadow duration-300">
                    {speaker.avatar}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {speaker.title}
                </p>
                <p className="text-gray-600 text-sm">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tin tức & Thông báo
              </h2>
              <p className="text-gray-600">
                Cập nhật thông tin mới nhất về hội nghị
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Xem tất cả <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  Đọc thêm <ChevronRight className="ml-1 w-3 h-3" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng tham gia hội nghị?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để không bỏ lỡ cơ hội kết nối với cộng đồng
            nghiên cứu hàng đầu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Đăng ký tham dự
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-semibold">
              Tải brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
