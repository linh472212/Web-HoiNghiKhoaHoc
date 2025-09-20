import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Database } from "lucide-react";

const AdminSettings = () => {
  const [form, setForm] = useState({
    deadlineSubmit: "2025-10-15",
    deadlineReview: "2025-11-01",
    smtpHost: "smtp.example.com",
    smtpPort: "587",
    smtpUser: "admin@example.com",
    smtpPass: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("💾 Cài đặt hệ thống:", form);
    setMessage("✅ Cài đặt đã được lưu thành công!");
  };

  const handleBackup = () => {
    console.log("📦 Sao lưu dữ liệu");
    alert("✅ Dữ liệu đã được sao lưu!");
  };

  const handleRestore = () => {
    console.log("♻️ Khôi phục dữ liệu");
    alert("⚠️ Dữ liệu đã được khôi phục!");
  };

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Cài đặt hệ thống</h1>

        {message && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
            {message}
          </div>
        )}

        {/* Deadline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Calendar className="w-5 h-5 inline mr-2" /> Hạn nộp bài & phản biện
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Hạn nộp bài
              </label>
              <input
                type="date"
                name="deadlineSubmit"
                value={form.deadlineSubmit}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Hạn phản biện
              </label>
              <input
                type="date"
                name="deadlineReview"
                value={form.deadlineReview}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Email */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Mail className="w-5 h-5 inline mr-2" /> Cấu hình Email (SMTP)
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">SMTP Host</label>
              <input
                type="text"
                name="smtpHost"
                value={form.smtpHost}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">SMTP Port</label>
              <input
                type="text"
                name="smtpPort"
                value={form.smtpPort}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">SMTP User</label>
              <input
                type="text"
                name="smtpUser"
                value={form.smtpUser}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">SMTP Password</label>
              <input
                type="password"
                name="smtpPass"
                value={form.smtpPass}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Backup & Restore */}
        <Card>
          <CardHeader>
            <CardTitle>
              <Database className="w-5 h-5 inline mr-2" /> Sao lưu & Khôi phục
              dữ liệu
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button onClick={handleBackup}>📦 Sao lưu</Button>
            <Button variant="destructive" onClick={handleRestore}>
              ♻️ Khôi phục
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end mt-6">
          <Button onClick={handleSave}>💾 Lưu cài đặt</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdminSettings;
