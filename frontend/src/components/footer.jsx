// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Socials */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🏛️</div>
              <span className="text-lg font-bold text-white">Conference 2025</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Nền tảng quản lý hội nghị khoa học hàng đầu Việt Nam
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Conference Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hội nghị</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lịch trình</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diễn giả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Địa điểm</a></li>
            </ul>
          </div>

          {/* Author Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tác giả</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn nộp bài</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Template</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tiêu chí đánh giá</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hạn nộp bài</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>conference@university.edu.vn</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+84 28 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Hội Nghị Khoa Học Quốc Tế. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
