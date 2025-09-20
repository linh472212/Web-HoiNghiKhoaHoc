import React, { useState } from "react";
import { FileText, Upload, User } from "lucide-react";

const AuthorSubmit = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !abstract || !author || !file) {
      setMessage("⚠️ Vui lòng điền đầy đủ thông tin.");
    } else {
      // Xử lý nộp bài (call API)
      console.log("Nộp bài:", { title, abstract, author, file });
      setMessage("✅ Bài báo của bạn đã được gửi thành công!");
      setTitle("");
      setAbstract("");
      setAuthor("");
      setFile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <FileText className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Nộp bài báo khoa học</h1>
          <p className="text-gray-600 mt-2">
            Vui lòng điền thông tin bên dưới để nộp bài cho Hội nghị Khoa học 2025
          </p>
        </div>

        {message && (
          <div
            className={`p-3 rounded-lg mb-6 text-sm ${
              message.startsWith("✅")
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tiêu đề */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tiêu đề bài báo
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Nhập tiêu đề..."
            />
          </div>

          {/* Tóm tắt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tóm tắt
            </label>
            <textarea
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Nhập tóm tắt ngắn gọn..."
            />
          </div>

          {/* Tác giả */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tác giả chính
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Nhập tên tác giả..."
              />
            </div>
          </div>

          {/* File upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              File bài báo (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            {file && (
              <p className="mt-2 text-sm text-gray-600 flex items-center space-x-2">
                <Upload className="w-4 h-4 text-blue-600" />
                <span>{file.name}</span>
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-semibold"
          >
            Gửi bài báo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthorSubmit;
