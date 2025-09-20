import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 🔹 Dummy data (sau này thay bằng API)
const papers = [
  {
    id: 1,
    title: "Ứng dụng AI trong Y tế",
    author: "Nguyễn Văn An",
    status: "Đang phản biện",
  },
  {
    id: 2,
    title: "Blockchain trong Giáo dục",
    author: "Trần Thị Bình",
    status: "Chờ phân công",
  },
  {
    id: 3,
    title: "Hệ thống IoT thông minh",
    author: "Lê Văn Cường",
    status: "Chấp nhận",
  },
];

const OrganizerPapers = () => {
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Quản lý bài báo</h1>

        <Card>
          <CardHeader>
            <CardTitle>Danh sách bài báo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Tiêu đề
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Tác giả
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Trạng thái
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {papers.map((paper) => (
                    <tr
                      key={paper.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm border-b">{paper.id}</td>
                      <td className="px-4 py-3 text-sm border-b">
                        {paper.title}
                      </td>
                      <td className="px-4 py-3 text-sm border-b">
                        {paper.author}
                      </td>
                      <td className="px-4 py-3 text-sm border-b">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            paper.status === "Chấp nhận"
                              ? "bg-green-100 text-green-700"
                              : paper.status === "Đang phản biện"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {paper.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border-b text-center space-x-2">
                        <Button asChild size="sm" variant="outline">
                          <a href={`/organizer/papers/${paper.id}`}>Chi tiết</a>
                        </Button>
                        <Button asChild size="sm">
                          <a href={`/organizer/papers/${paper.id}/assign`}>
                            Phân công
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerPapers;
