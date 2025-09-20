import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, User, MessageSquare } from "lucide-react";

// 🔹 Dummy data (sau này sẽ fetch từ API)
const paperDetail = {
  id: 1,
  title: "Ứng dụng AI trong Y tế",
  authors: ["Nguyễn Văn An", "Trần Thị Bình"],
  abstract:
    "Bài báo nghiên cứu về ứng dụng trí tuệ nhân tạo trong chẩn đoán hình ảnh y tế, với mục tiêu nâng cao độ chính xác và giảm chi phí.",
  keywords: ["AI", "Y tế", "Machine Learning"],
  status: "Đang phản biện",
  fileUrl: "#",
  reviewers: [
    {
      id: 1,
      name: "Reviewer 1",
      score: 8,
      comment: "Bài viết có ý tưởng mới, cần chỉnh sửa phần thí nghiệm.",
    },
    {
      id: 2,
      name: "Reviewer 2",
      score: 7,
      comment: "Cần bổ sung thêm tài liệu tham khảo và phân tích sâu hơn.",
    },
  ],
};

const OrganizerPaperDetail = () => {
  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Chi tiết bài báo #{paperDetail.id}</h1>

        {/* Thông tin bài báo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Thông tin bài báo</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{paperDetail.title}</h2>
            <p className="text-sm text-gray-600 mb-4">
              <User className="inline w-4 h-4 mr-1" />
              {paperDetail.authors.join(", ")}
            </p>
            <p className="mb-4">{paperDetail.abstract}</p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Từ khóa:</strong> {paperDetail.keywords.join(", ")}
            </p>
            <a
              href={paperDetail.fileUrl}
              className="text-blue-600 hover:underline text-sm flex items-center"
            >
              <FileText className="w-4 h-4 mr-1" /> Tải file bài báo
            </a>
          </CardContent>
        </Card>

        {/* Phản biện */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Kết quả phản biện</CardTitle>
          </CardHeader>
          <CardContent>
            {paperDetail.reviewers.map((rev) => (
              <div
                key={rev.id}
                className="border p-4 rounded-lg mb-4 bg-gray-50"
              >
                <p className="font-semibold">
                  <MessageSquare className="inline w-4 h-4 mr-1 text-gray-500" />
                  {rev.name} — Điểm: {rev.score}/10
                </p>
                <p className="text-gray-700 mt-2">{rev.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Hành động */}
        <Card>
          <CardHeader>
            <CardTitle>Quyết định cuối cùng</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700">
              ✅ Chấp nhận
            </Button>
            <Button variant="destructive">❌ Từ chối</Button>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerPaperDetail;
