import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { FileDown } from "lucide-react";

// 🔹 Dummy data
const paperStatusData = [
  { name: "Chờ phản biện", value: 10 },
  { name: "Đang phản biện", value: 8 },
  { name: "Yêu cầu sửa", value: 5 },
  { name: "Chấp nhận", value: 12 },
  { name: "Từ chối", value: 3 },
];

const topicData = [
  { topic: "AI", count: 7 },
  { topic: "Blockchain", count: 5 },
  { topic: "IoT", count: 4 },
  { topic: "Y tế", count: 6 },
  { topic: "Khác", count: 8 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#a4de6c"];

const OrganizerReports = () => {
  const handleExport = (type) => {
    console.log(`📊 Xuất báo cáo dạng: ${type}`);
    alert(`✅ Đã xuất báo cáo (${type})`);
  };

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Thống kê & Báo cáo</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Biểu đồ trạng thái */}
          <Card>
            <CardHeader>
              <CardTitle>Thống kê theo trạng thái</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={paperStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    dataKey="value"
                  >
                    {paperStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <ul className="mt-4 space-y-1 text-sm">
                {paperStatusData.map((s, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span
                      className="inline-block w-3 h-3 rounded"
                      style={{ backgroundColor: COLORS[i % COLORS.length] }}
                    />
                    <span>
                      {s.name}: {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Biểu đồ theo chủ đề */}
          <Card>
            <CardHeader>
              <CardTitle>Thống kê theo chủ đề</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="topic" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Xuất báo cáo */}
        <Card>
          <CardHeader>
            <CardTitle>Xuất báo cáo</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button onClick={() => handleExport("PDF")}>
              <FileDown className="w-4 h-4 mr-2" /> Xuất PDF
            </Button>
            <Button onClick={() => handleExport("Excel")}>
              <FileDown className="w-4 h-4 mr-2" /> Xuất Excel
            </Button>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerReports;
