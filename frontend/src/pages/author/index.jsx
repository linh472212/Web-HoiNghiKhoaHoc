import React from "react";
import { FileText, PlusCircle, Clock, CheckCircle, XCircle, Edit3, Download } from "lucide-react";
import { Link } from "react-router-dom";
import DefaultLayout from "@/components/layout/DefaultLayout";

// Dữ liệu mẫu
const samplePapers = [
  { id: "1", title: "Ứng dụng AI trong Y tế", status: "Đang phản biện", date: "2025-09-10", file: "/uploads/paper1.pdf" },
  { id: "2", title: "IoT trong đô thị thông minh", status: "Yêu cầu sửa", date: "2025-09-12", file: "/uploads/paper2.pdf" },
  { id: "3", title: "Blockchain và giáo dục", status: "Chấp nhận", date: "2025-09-15", file: "/uploads/paper3.pdf" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Đang phản biện": return "bg-yellow-100 text-yellow-700";
    case "Yêu cầu sửa": return "bg-blue-100 text-blue-700";
    case "Chấp nhận": return "bg-green-100 text-green-700";
    case "Từ chối": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-600";
  }
};

const AuthorDashboard = () => {
  const total = samplePapers.length;
  const accepted = samplePapers.filter(p => p.status === "Chấp nhận").length;
  const pending = samplePapers.filter(p => p.status === "Đang phản biện").length;

  return (
    <DefaultLayout>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📑 Quản lý bài báo</h1>
          <Link
            to="/author/submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Nộp bài mới
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{total}</p>
            <p className="text-gray-600">Tổng số bài</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{pending}</p>
            <p className="text-gray-600">Đang phản biện</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{accepted}</p>
            <p className="text-gray-600">Đã chấp nhận</p>
          </div>
        </div>

        {/* Paper List */}
        <div className="space-y-4">
          {samplePapers.map((paper) => (
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
                <Link to={`/author/paper/${paper.id}`} className="text-blue-600 hover:underline">
                  Chi tiết
                </Link>
                <a href={paper.file} download className="text-gray-600 hover:text-black flex items-center">
                  <Download className="w-4 h-4 mr-1" /> File
                </a>
                {paper.status === "Yêu cầu sửa" && (
                  <Link to={`/author/paper/${paper.id}/edit`} className="text-orange-600 hover:underline flex items-center">
                    <Edit3 className="w-4 h-4 mr-1" /> Sửa
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

export default AuthorDashboard;
