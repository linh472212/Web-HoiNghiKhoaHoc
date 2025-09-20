import React, { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

// 🔹 Dummy data (sau này load từ API)
const paper = {
  id: 1,
  title: "Ứng dụng AI trong Y tế",
  author: "Nguyễn Văn An",
};

const reviewers = [
  { id: 1, name: "Reviewer 1", expertise: "AI, Y tế", assignedPapers: 2 },
  { id: 2, name: "Reviewer 2", expertise: "Blockchain, Bảo mật", assignedPapers: 1 },
  { id: 3, name: "Reviewer 3", expertise: "IoT, Mạng", assignedPapers: 0 },
  { id: 4, name: "Reviewer 4", expertise: "Machine Learning", assignedPapers: 3 },
];

const AssignReviewerPage = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((rid) => rid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleAssign = () => {
    console.log("Phân công cho reviewers:", selected);
    alert(`✅ Đã phân công cho reviewer IDs: ${selected.join(", ")}`);
  };

  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">
          Phân công Reviewer — Bài báo #{paper.id}
        </h1>

        {/* Thông tin bài báo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Thông tin bài báo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{paper.title}</p>
            <p className="text-sm text-gray-600">Tác giả: {paper.author}</p>
          </CardContent>
        </Card>

        {/* Danh sách reviewer */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách Reviewer</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Chọn
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Reviewer
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Chuyên môn
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Bài đang phản biện
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviewers.map((rev) => (
                  <tr
                    key={rev.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 border-b">
                      <input
                        type="checkbox"
                        checked={selected.includes(rev.id)}
                        onChange={() => toggleSelect(rev.id)}
                      />
                    </td>
                    <td className="px-4 py-3 border-b flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span>{rev.name}</span>
                    </td>
                    <td className="px-4 py-3 border-b text-sm">{rev.expertise}</td>
                    <td className="px-4 py-3 border-b text-sm text-center">
                      {rev.assignedPapers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Nút phân công */}
            <div className="mt-6 flex justify-end">
              <Button onClick={handleAssign} disabled={selected.length === 0}>
                Phân công Reviewer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default AssignReviewerPage;
