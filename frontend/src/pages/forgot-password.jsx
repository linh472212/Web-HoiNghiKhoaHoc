import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Vui lòng nhập email.");
      setMessage("");
    } else {
      setError("");
      // Gọi API gửi mail reset password
      console.log("Yêu cầu đặt lại mật khẩu cho:", email);
      setMessage("Nếu email tồn tại, hướng dẫn đặt lại mật khẩu đã được gửi.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🔑</div>
          <h2 className="text-2xl font-bold text-gray-900">Quên mật khẩu</h2>
          <p className="text-gray-600">
            Nhập email của bạn để đặt lại mật khẩu
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-6 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="nhapemail@university.edu.vn"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-semibold"
          >
            Gửi yêu cầu
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600">
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
