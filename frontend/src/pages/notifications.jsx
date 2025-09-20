import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";

// 🔹 Dummy data
const notificationsData = [
  {
    id: 1,
    type: "review",
    message: "Bài báo #12 đã có kết quả phản biện: Yêu cầu sửa.",
    date: "2025-09-15",
  },
  {
    id: 2,
    type: "schedule",
    message: "Lịch trình báo cáo của bạn đã thay đổi: Phòng A101, 9h00.",
    date: "2025-09-18",
  },
  {
    id: 3,
    type: "general",
    message: "Ban tổ chức thông báo: Gia hạn hạn nộp bài đến 15/10/2025.",
    date: "2025-09-20",
  },
];

const NotificationsPage = () => {
  const [notifications] = useState(notificationsData);

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Thông báo</h1>

        {notifications.length === 0 ? (
          <p className="text-gray-500">Không có thông báo nào.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map((n) => (
              <Card key={n.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-500" />
                    {n.type === "review" && "Kết quả phản biện"}
                    {n.type === "schedule" && "Lịch trình"}
                    {n.type === "general" && "Thông báo chung"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{n.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{n.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default NotificationsPage;
