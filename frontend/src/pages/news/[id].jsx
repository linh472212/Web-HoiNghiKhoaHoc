import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import DefaultLayout from "@/components/layout/DefaultLayout";

// Dữ liệu mẫu
const newsData = [
  {
    id: "1",
    title: "Khai mạc Hội nghị Khoa học 2025",
    date: "2025-09-15",
    author: "Ban Tổ Chức",
    content: `
      Hội nghị Khoa học 2025 chính thức khai mạc với sự tham gia của hơn 500 nhà nghiên cứu
      trong và ngoài nước. Nhiều công trình nghiên cứu xuất sắc sẽ được trình bày trong 3 ngày diễn ra hội nghị.
    `,
  },
  {
    id: "2",
    title: "Công bố các đề tài nghiên cứu nổi bật",
    date: "2025-09-16",
    author: "Ban Biên Tập",
    content: `
      Hội nghị đã công bố danh sách các đề tài nghiên cứu nổi bật trong lĩnh vực AI, 
      IoT, và khoa học dữ liệu. Đây sẽ là nền tảng cho các hợp tác nghiên cứu trong tương lai.
    `,
  },
  {
    id: "3",
    title: "Trao giải thưởng nghiên cứu xuất sắc",
    date: "2025-09-17",
    author: "Ban Tổ Chức",
    content: `
      Giải thưởng nghiên cứu xuất sắc năm nay đã thuộc về nhóm nghiên cứu đến từ Đại học Quốc gia,
      với công trình ứng dụng trí tuệ nhân tạo trong y tế.
    `,
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Không tìm thấy bài viết.</p>
      </div>
    );
  }

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-500 text-sm mb-6">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </p>

          <div className="mt-8">
            <Link
              to="/news"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Quay lại danh sách tin tức
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewsDetail;
