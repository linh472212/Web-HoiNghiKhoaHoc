import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 🔹 Dummy initial data
const initialInfo = {
  name: "Hội nghị Khoa học Quốc tế 2025",
  theme: "Công nghệ & Đổi mới",
  date: "2025-11-20",
  location: "Đại học Bách Khoa Hà Nội",
  description:
    "Hội nghị quy tụ các nhà khoa học, giảng viên, nghiên cứu sinh, sinh viên để trao đổi các kết quả nghiên cứu mới nhất.",
  news: [
    "Gia hạn hạn nộp bài đến 15/10/2025",
    "Cập nhật danh sách diễn giả chính",
  ],
};

const OrganizerInfo = () => {
  const [info, setInfo] = useState(initialInfo);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cập nhật thông tin hội nghị:", info);
    setMessage("✅ Thông tin hội nghị đã được cập nhật!");
  };

  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Cập nhật thông tin hội nghị</h1>

        {message && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
            {message}
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Thông tin sự kiện</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Tên sự kiện</label>
                <input
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Chủ đề</label>
                <input
                  type="text"
                  name="theme"
                  value={info.theme}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ngày tổ chức</label>
                  <input
                    type="date"
                    name="date"
                    value={info.date}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Địa điểm</label>
                  <input
                    type="text"
                    name="location"
                    value={info.location}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mô tả</label>
                <textarea
                  name="description"
                  rows={4}
                  value={info.description}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tin tức</label>
                <textarea
                  name="news"
                  rows={3}
                  value={info.news.join("\n")}
                  onChange={(e) =>
                    setInfo({ ...info, news: e.target.value.split("\n") })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Mỗi dòng là một tin tức
                </p>
              </div>

              <div className="flex justify-end">
                <Button type="submit">💾 Lưu thông tin</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerInfo;
