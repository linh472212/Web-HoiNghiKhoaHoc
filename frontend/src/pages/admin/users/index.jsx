import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Eye } from "lucide-react";

// 🔹 Dummy data
const users = [
  { id: 1, name: "Nguyễn Văn An", email: "an@example.com", role: "Tác giả" },
  { id: 2, name: "Trần Thị Bình", email: "binh@example.com", role: "Reviewer" },
  { id: 3, name: "Lê Văn Cường", email: "cuong@example.com", role: "Ban tổ chức" },
  { id: 4, name: "Admin Hệ thống", email: "admin@example.com", role: "Admin" },
];

const AdminUsers = () => {
  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" /> Thêm người dùng
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Danh sách người dùng</CardTitle>
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
                      Họ tên
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Vai trò
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 border-b">{user.id}</td>
                      <td className="px-4 py-3 border-b">{user.name}</td>
                      <td className="px-4 py-3 border-b">{user.email}</td>
                      <td className="px-4 py-3 border-b">{user.role}</td>
                      <td className="px-4 py-3 border-b text-center">
                        <Link to={`/admin/users/${user.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" /> Xem
                          </Button>
                        </Link>
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

export default AdminUsers;
