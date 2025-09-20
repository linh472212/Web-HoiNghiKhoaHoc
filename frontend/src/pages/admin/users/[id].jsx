import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Shield } from "lucide-react";

// 🔹 Dummy data (sau này sẽ fetch từ API)
const users = [
  { id: 1, name: "Nguyễn Văn An", email: "an@example.com", role: "Tác giả" },
  { id: 2, name: "Trần Thị Bình", email: "binh@example.com", role: "Reviewer" },
  { id: 3, name: "Lê Văn Cường", email: "cuong@example.com", role: "Ban tổ chức" },
  { id: 4, name: "Admin Hệ thống", email: "admin@example.com", role: "Admin" },
];

const AdminUserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === parseInt(id));

  const [role, setRole] = useState(user?.role || "");

  if (!user) {
    return (
      <DefaultLayout>
        <div className="max-w-3xl mx-auto py-10 px-4">
          <p className="text-red-500">⚠️ Không tìm thấy người dùng.</p>
        </div>
      </DefaultLayout>
    );
  }

  const handleSave = () => {
    console.log(`💾 Lưu thay đổi role của user #${id}: ${role}`);
    alert(`✅ Vai trò của ${user.name} đã được đổi thành ${role}`);
  };

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc muốn xóa ${user.name}?`)) {
      console.log(`🗑️ Xóa user #${id}`);
      alert(`❌ Đã xóa ${user.name}`);
      navigate("/admin/users");
    }
  };

  return (
    <DefaultLayout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Chi tiết người dùng</h1>

        <Card>
          <CardHeader>
            <CardTitle>Thông tin cá nhân</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="flex items-center text-gray-700">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-medium">Họ tên:</span>&nbsp; {user.name}
            </p>
            <p className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-medium">Email:</span>&nbsp; {user.email}
            </p>
            <div className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-medium">Vai trò:</span>
              <select
                className="ml-2 border rounded-lg px-3 py-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Tác giả">Tác giả</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Ban tổ chức">Ban tổ chức</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Hành động */}
        <div className="flex gap-4 mt-6">
          <Button onClick={handleSave}>💾 Lưu thay đổi</Button>
          <Button variant="destructive" onClick={handleDelete}>
            🗑️ Xóa người dùng
          </Button>
          <Button variant="outline" onClick={() => navigate("/admin/users")}>
            ↩️ Quay lại
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdminUserDetail;
