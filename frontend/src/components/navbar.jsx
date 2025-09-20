import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Tổng quan", href: "#" },
    { label: "Lịch trình", href: "#" },
    { label: "Tin tức", href: "/news" },
    { label: "Liên hệ", href: "#" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl">🏛️</div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Hội Nghị Khoa Học 2025
              </h1>
              <p className="text-sm text-gray-600">Công nghệ & Đổi mới</p>
            </div>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Menu mobile toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button>Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline">Đăng ký</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link to="/login">
              <Button className="mt-4 w-full">Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="w-full">
                Đăng ký
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
