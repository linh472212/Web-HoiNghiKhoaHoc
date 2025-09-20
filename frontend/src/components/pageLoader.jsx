import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm z-50">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-3 drop-shadow-lg" />
      <p className="text-sm font-medium text-blue-700 animate-pulse">
        Đang tải dữ liệu...
      </p>
    </div>
  );
}
