import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  UserCog,
  Settings,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

// 🔹 Dummy data
const roleStats = [
  { name: "Tác giả", value: 50 },
  { name: "Reviewer", value: 20 },
  { name: "Ban tổ chức", value: 10 },
  { name: "Admin", value: 3 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

const AdminDashboard = () => {
  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Bảng điều khiển Admin</h1>

        {/* Thống kê nhanh */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Tác giả</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">{roleStats[0].value}</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reviewer</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <UserCheck className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">{roleStats[1].value}</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ban tổ chức</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <UserCog className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold">{roleStats[2].value}</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Admin</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <Settings className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">{roleStats[3].value}</span>
            </CardContent>
          </Card>
        </div>

        {/* Biểu đồ phân bổ */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Phân bổ người dùng theo vai trò</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={roleStats}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  dataKey="value"
                >
                  {roleStats.map((entry, index) => (
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

        {/* Liên kết nhanh */}
        <div className="flex gap-4">
          <Link to="/admin/users">
            <Button>👥 Quản lý người dùng</Button>
          </Link>
          <Link to="/admin/settings">
            <Button variant="secondary">⚙️ Cài đặt hệ thống</Button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
