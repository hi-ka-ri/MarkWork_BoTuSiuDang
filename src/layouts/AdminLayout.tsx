import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

// 1. Định nghĩa Interface cho các Props nhận vào (bao gồm children)
interface AdminLayoutProps {
  children?: React.ReactNode; // Dấu ? giúp prop này trở thành optional (có hoặc không đều được)
}

// 2. Ép kiểu AdminLayout theo Interface vừa tạo
const AdminLayout: React.FC<AdminLayoutProps> = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-600 font-sans antialiased">
      {/* Thanh Menu bên trái */}
      <Sidebar />

      {/* Khối hiển thị nội dung bên phải */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />
        
        {/* Vùng ruột chứa nội dung thay đổi động giữa các trang */}
        <main className="flex-1 p-8 overflow-y-auto bg-slate-50/50">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;