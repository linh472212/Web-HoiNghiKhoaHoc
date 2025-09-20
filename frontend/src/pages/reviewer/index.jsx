// frontend/src/pages/reviewer/index.jsx
import React from "react";
import { ClipboardList, CheckCircle, Clock, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import DefaultLayout from "@/components/layout/DefaultLayout";

// Dữ liệu mẫu
const assignedPapers = [
  { id: "101", title: "AI trong Y tế", date: "2025-09-10", status: "Chưa phản biện" },
  { id: "102", title: "Điện toán đám mây", date: "2025-09-12", status: "Đã phản biện" },
  { id: "103", title: "Blockchain trong giáo dục", date: "2025-09-15", status: "Chưa phản biện" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Chưa phản biện": return "bg-yellow-100 text-yellow-700";
    case "Đã phản biện": return "bg-green-100 text-green-700";
    default: return "bg-gray-100 text-gray-600";
  }
};

const ReviewerDashboard = () => {
  const total = assignedPapers.length;
  const pending = assignedPapers.filter(p => p.status === "Chưa phản biện").length;
  const completed = assignedPapers.filter(p => p.status === "Đã phản biện").length;

  return (
    <DefaultLayout>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">📝 Quản lý phản biện</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{total}</p>
            <p className="text-gray-600">Bài được phân công</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{pending}</p>
            <p className="text-gray-600">Chưa phản biện</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{completed}</p>
            <p className="text-gray-600">Đã phản biện</p>
          </div>
        </div>

        {/* Paper List */}
        <div className="space-y-4">
          {assignedPapers.map((paper) => (
            <div key={paper.id} className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg text-gray-900">{paper.title}</h2>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" /> {paper.date}
                </p>
                <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${getStatusColor(paper.status)}`}>
                  {paper.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                {paper.status === "Chưa phản biện" ? (
                  <Link to={`/reviewer/review/${paper.id}`} className="text-blue-600 hover:underline flex items-center">
                    <ClipboardList className="w-4 h-4 mr-1" /> Phản biện
                  </Link>
                ) : (
                  <Link to={`/reviewer/review/${paper.id}`} className="text-green-600 hover:underline flex items-center">
                    <Eye className="w-4 h-4 mr-1" /> Xem lại
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ReviewerDashboard;
