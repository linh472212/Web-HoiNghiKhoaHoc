import React, { useState } from "react";
import { User, Mail, Save } from "lucide-react";
import DefaultLayout from "@/components/layout/DefaultLayout";

const AuthorProfile = () => {
  const [profile, setProfile] = useState({
    name: "Nguyễn Văn An",
    email: "an.nguyen@example.com",
    affiliation: "Đại học Bách Khoa Hà Nội",
    bio: "Nghiên cứu viên trong lĩnh vực Trí tuệ Nhân tạo và Ứng dụng trong Y tế.",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cập nhật hồ sơ:", profile);
    setMessage("✅ Hồ sơ đã được cập nhật!");
  };

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Hồ sơ tác giả</h1>

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

            {/* Cơ quan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cơ quan / Tổ chức
              </label>
              <input
                type="text"
                name="affiliation"
                value={profile.affiliation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Nút lưu */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Save className="w-5 h-5 mr-2" />
              Lưu thay đổi
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AuthorProfile;
