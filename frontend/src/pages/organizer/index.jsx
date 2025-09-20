import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, FileText, CheckCircle2, XCircle } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// 🔹 Dummy data
const stats = [
  { label: "Bài báo", value: 128, icon: FileText, color: "text-blue-600" },
  { label: "Reviewer", value: 35, icon: Users, color: "text-purple-600" },
  { label: "Đã chấp nhận", value: 56, icon: CheckCircle2, color: "text-green-600" },
  { label: "Từ chối", value: 18, icon: XCircle, color: "text-red-600" },
];

// 🔹 Data cho PieChart
const chartData = [
  { name: "Chờ phản biện", value: 40 },
  { name: "Đang phản biện", value: 30 },
  { name: "Yêu cầu sửa", value: 15 },
  { name: "Chấp nhận", value: 25 },
  { name: "Từ chối", value: 18 },
];

const COLORS = ["#60A5FA", "#A78BFA", "#FACC15", "#34D399", "#F87171"];

const OrganizerDashboard = () => {
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard Ban tổ chức</h1>

        {/* Thống kê nhanh */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((item, idx) => (
            <Card key={idx} className="shadow-sm border">
              <CardContent className="flex items-center p-6">
                <item.icon className={`w-10 h-10 mr-4 ${item.color}`} />
                <div>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Biểu đồ trạng thái bài báo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="shadow-sm border">
            <CardHeader>
              <CardTitle>Trạng thái bài báo</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Thông báo gần đây */}
          <Card className="shadow-sm border">
            <CardHeader>
              <CardTitle>Thông báo gần đây</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="p-3 border rounded-lg hover:bg-gray-50 transition">
                  📢 Gia hạn thời gian nộp bài đến 15/10/2025
                </li>
                <li className="p-3 border rounded-lg hover:bg-gray-50 transition">
                  📢 Lịch trình báo cáo sẽ công bố vào tuần tới
                </li>
                <li className="p-3 border rounded-lg hover:bg-gray-50 transition">
                  📢 Cập nhật danh sách diễn giả chính
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerDashboard;
