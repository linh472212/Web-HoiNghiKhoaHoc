import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";

// 🔹 Dummy data (bài báo đã chấp nhận)
const acceptedPapers = [
  { id: 1, title: "Ứng dụng AI trong Y tế", presenter: "Nguyễn Văn An" },
  { id: 2, title: "Blockchain trong Giáo dục", presenter: "Trần Thị Bình" },
  { id: 3, title: "Hệ thống IoT thông minh", presenter: "Lê Văn Cường" },
];

const OrganizerSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [form, setForm] = useState({
    paperId: "",
    date: "",
    time: "",
    room: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const paper = acceptedPapers.find((p) => p.id === parseInt(form.paperId));
    if (!paper || !form.date || !form.time || !form.room) {
      alert("⚠️ Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newItem = {
      id: schedule.length + 1,
      paperTitle: paper.title,
      presenter: paper.presenter,
      date: form.date,
      time: form.time,
      room: form.room,
    };

    setSchedule([...schedule, newItem]);
    setForm({ paperId: "", date: "", time: "", room: "" });
  };

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Lập lịch trình báo cáo</h1>

        {/* Form phân công */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Thêm lịch trình mới</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Chọn bài báo
                </label>
                <select
                  name="paperId"
                  value={form.paperId}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="">-- Chọn bài báo --</option>
                  {acceptedPapers.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} — {p.presenter}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ngày</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Giờ</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phòng</label>
                <input
                  type="text"
                  name="room"
                  placeholder="VD: A101"
                  value={form.room}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={handleAdd}>➕ Thêm lịch trình</Button>
            </div>
          </CardContent>
        </Card>

        {/* Bảng lịch trình */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách lịch trình</CardTitle>
          </CardHeader>
          <CardContent>
            {schedule.length === 0 ? (
              <p className="text-gray-500">Chưa có lịch trình nào.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        Bài báo
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        Diễn giả
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        <Calendar className="inline w-4 h-4 mr-1" /> Ngày
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        <Clock className="inline w-4 h-4 mr-1" /> Giờ
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        <MapPin className="inline w-4 h-4 mr-1" /> Phòng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 border-b">{item.paperTitle}</td>
                        <td className="px-4 py-3 border-b">{item.presenter}</td>
                        <td className="px-4 py-3 border-b">{item.date}</td>
                        <td className="px-4 py-3 border-b">{item.time}</td>
                        <td className="px-4 py-3 border-b">{item.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default OrganizerSchedule;
