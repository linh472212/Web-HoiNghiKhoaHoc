import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FileText, MessageSquare, CheckCircle } from "lucide-react";

// Dữ liệu mẫu
const sampleReviews = {
  "101": {
    paperTitle: "Ứng dụng Trí tuệ Nhân tạo trong Y tế",
    authors: "Nguyễn Văn An, Trần Thị Bình",
    status: "Đang phản biện",
    comments: "Bài báo có tiềm năng, cần bổ sung thêm số liệu thực nghiệm.",
    decision: null,
  },
  "102": {
    paperTitle: "Điện toán đám mây và An toàn thông tin",
    authors: "Phạm Văn Cường, Lê Thị Dung",
    status: "Hoàn thành",
    comments: "Nội dung tốt, rõ ràng. Đề xuất chấp nhận.",
    decision: "Accept",
  },
};

const ReviewDetail = () => {
  const { id } = useParams();
  const review = sampleReviews[id];

  const [comments, setComments] = useState(review?.comments || "");
  const [decision, setDecision] = useState(review?.decision || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lưu phản biện:", { id, comments, decision });
    alert("✅ Phản biện đã được lưu!");
  };

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Không tìm thấy bài phản biện.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Tiêu đề */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <FileText className="w-7 h-7 mr-2 text-blue-600" />
            {review.paperTitle}
          </h1>
          <p className="text-gray-600 mt-1">Tác giả: {review.authors}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
            {review.status}
          </span>
        </div>

        {/* Form phản biện */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nhận xét */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MessageSquare className="w-4 h-4 mr-1 text-gray-500" />
              Nhận xét của reviewer
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Quyết định */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-gray-500" />
              Quyết định
            </label>
            <select
              value={decision}
              onChange={(e) => setDecision(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Chọn quyết định --</option>
              <option value="Accept">Accept</option>
              <option value="Minor Revision">Minor Revision</option>
              <option value="Major Revision">Major Revision</option>
              <option value="Reject">Reject</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Lưu phản biện
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewDetail;
