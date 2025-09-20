import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const OrganizerDocuments = () => {
  const [form, setForm] = useState({
    type: "invitation",
    name: "",
    role: "speaker",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    console.log("📄 Sinh tài liệu:", form);
    setMessage(
      `✅ Đã sinh ${form.type === "invitation" ? "giấy mời" : "giấy chứng nhận"} cho ${form.name} (${form.role})`
    );
  };

  return (
    <DefaultLayout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">In giấy mời & giấy chứng nhận</h1>

        {message && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
            {message}
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Tạo tài liệu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Loại tài liệu */}
              <div>
                <label className="block text-sm font-medium mb-2">Loại tài liệu</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="invitation">📩 Giấy mời</option>
                  <option value="certificate">🏅 Giấy chứng nhận</option>
                </select>
              </div>

              {/* Tên người nhận */}
              <div>
                <label className="block text-sm font-medium mb-2">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nhập họ tên"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* Vai trò */}
              <div>
                <label className="block text-sm font-medium mb-2">Vai trò</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="speaker">👨‍🏫 Diễn giả</option>
                  <option value="author">✍️ Tác giả báo cáo</option>
                  <option value="reviewer">📝 Phản biện viên</option>
                  <option value="attendee">👥 Người tham dự</option>
                </select>
              </div>

              {/* Nút tạo */}
              <div className="flex justify-end">
                <Button onClick={handleGenerate}>
                  <FileText className="w-4 h-4 mr-2" />
                  Tạo PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerDocuments;
