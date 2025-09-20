import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

// 🔹 Dummy data (sau này thay bằng fetch API hoặc MongoDB)
const newsList = [
  {
    id: 1,
    title: "Khai mạc Hội nghị Khoa học Quốc tế 2025",
    date: "2025-09-15",
    summary: "Sự kiện khai mạc hội nghị đã diễn ra long trọng với sự tham dự của hơn 500 nhà khoa học đến từ nhiều quốc gia.",
  },
  {
    id: 2,
    title: "Thông báo hạn nộp bài mới",
    date: "2025-08-30",
    summary: "Ban tổ chức gia hạn thời gian nộp bài đến ngày 15/10/2025 để tạo điều kiện cho các tác giả hoàn thiện nghiên cứu.",
  },
  {
    id: 3,
    title: "Danh sách diễn giả chính",
    date: "2025-08-20",
    summary: "Hội nghị hân hạnh giới thiệu danh sách các diễn giả chính từ các trường đại học hàng đầu thế giới.",
  },
];

const NewsPage = () => {
  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tin tức hội nghị</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {newsList.map((news) => (
            <Card key={news.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{news.title}</CardTitle>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {news.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <Button asChild variant="outline" size="sm">
                  <a href={`/news/${news.id}`}>Xem chi tiết</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewsPage;
