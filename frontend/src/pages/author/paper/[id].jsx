import React from "react";
import { useParams, Link } from "react-router-dom";
import { FileText, Calendar, User, Edit3 } from "lucide-react";

// Dữ liệu mẫu
const samplePapers = [
  {
    id: "1",
    title: "Ứng dụng Trí tuệ Nhân tạo trong Y tế",
    author: "TS. Nguyễn Văn An",
    date: "2025-09-10",
    abstract:
      "Nghiên cứu ứng dụng AI trong chẩn đoán hình ảnh và hỗ trợ ra quyết định lâm sàng, giúp nâng cao hiệu quả và độ chính xác trong điều trị.",
    file: "/uploads/paper1.pdf",
  },
  {
    id: "2",
    title: "IoT trong quản lý năng lượng đô thị",
    author: "PGS.TS. Trần Thị Bình",
    date: "2025-09-12",
    abstract:
      "Bài báo đề xuất giải pháp sử dụng IoT để giám sát và tối ưu hoá tiêu thụ năng lượng trong các đô thị thông minh.",
    file: "/uploads/paper2.pdf",
  },
];

const PaperDetail = () => {
  const { id } = useParams();
  const paper = samplePapers.find((p) => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Không tìm thấy bài báo.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{paper.title}</h1>

        <div className="flex items-center space-x-6 text-gray-500 text-sm mb-6">
          <span className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{paper.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{paper.date}</span>
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {paper.abstract}
        </p>

        <div className="mt-6 space-x-4">
          <a
            href={paper.file}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-4 h-4 mr-2" />
            Tải bài báo
          </a>

          <Link
            to={`/author/paper/${paper.id}/edit`}
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            Sửa bài báo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaperDetail;
