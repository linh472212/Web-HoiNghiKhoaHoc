import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🏛️</div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hội Nghị Khoa Học 2025</h1>
              <p className="text-sm text-gray-600">Công nghệ & Đổi mới</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tổng quan
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">
              Lịch trình
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tin tức
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Đăng nhập
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
