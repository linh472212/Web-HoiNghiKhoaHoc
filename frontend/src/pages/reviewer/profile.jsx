import React, { useState } from "react";
import { User, Mail, BookOpen, Save } from "lucide-react";

const ReviewerProfile = () => {
  // Dữ liệu mẫu (sau này thay bằng API)
  const [profile, setProfile] = useState({
    name: "TS. Hoàng Minh Quân",
    email: "quan.hoang@example.com",
    institution: "Đại học Quốc gia TP.HCM",
    expertise: "Hệ thống phân tán, An toàn thông tin",
    bio: "Reviewer nhiều năm kinh nghiệm trong lĩnh vực hệ thống máy tính và bảo mật.",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cập nhật hồ sơ reviewer:", profile);
    setMessage("✅ Hồ sơ reviewer đã được cập nhật!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Hồ sơ Reviewer
        </h1>

        {message && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-6 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Họ tên */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Họ và tên
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Cơ quan công tác */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cơ quan / Tổ chức
            </label>
            <input
              type="text"
              name="institution"
              value={profile.institution}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Lĩnh vực chuyên môn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lĩnh vực chuyên môn
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="expertise"
                value={profile.expertise}
                onChange={handleChange}
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Giới thiệu */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giới thiệu bản thân
            </label>
            <textarea
              name="bio"
              rows={4}
              value={profile.bio}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Nút lưu */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            <Save className="w-5 h-5 mr-2" />
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewerProfile;
