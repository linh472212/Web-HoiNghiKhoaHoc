import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Save } from "lucide-react";

// Giả lập dữ liệu (có thể lấy từ API)
const samplePapers = {
  "1": {
    title: "Ứng dụng Trí tuệ Nhân tạo trong Y tế",
    abstract: "Nghiên cứu ứng dụng AI trong chẩn đoán hình ảnh...",
  },
  "2": {
    title: "IoT trong quản lý năng lượng đô thị",
    abstract: "Bài báo đề xuất giải pháp sử dụng IoT...",
  },
};

const PaperEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const paper = samplePapers[id] || { title: "", abstract: "" };

  const [title, setTitle] = useState(paper.title);
  const [abstract, setAbstract] = useState(paper.abstract);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API update paper
    console.log("Cập nhật bài báo:", { id, title, abstract });
    setMessage("✅ Cập nhật thành công!");
    setTimeout(() => navigate(`/author/paper/${id}`), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sửa bài báo</h1>

        {message && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-6 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tiêu đề */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tiêu đề
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Tóm tắt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tóm tắt
            </label>
            <textarea
              rows={5}
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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
  );
};

export default PaperEdit;
