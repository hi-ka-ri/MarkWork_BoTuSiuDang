import React from 'react';
import { User } from 'lucide-react';

export const Step1Info: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
      <div className="lg:col-span-2 space-y-6">
        {/* Thẻ User Profile */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120" alt="Avatar" className="h-16 w-16 rounded-2xl object-cover ring-4 ring-slate-50" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">Nguyễn Văn A</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">WB-9923841</span>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">● Chờ xử lý</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold">Xuất báo cáo</button>
            <button className="px-4 py-2 bg-[#047857] text-white hover:bg-[#065f46] rounded-xl text-xs font-semibold">Gửi yêu cầu bổ sung</button>
          </div>
        </div>

        {/* Dữ liệu định danh chi tiết */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h4 className="text-sm font-bold text-slate-800 flex items-center space-x-2 border-b border-slate-50 pb-3">
            <User className="h-4 w-4 text-[#047857]" /> <span>DỮ LIỆU ĐỊNH DANH CÁ NHÂN</span>
          </h4>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
            <div><p className="text-slate-400 font-medium">NGÀY SINH</p><p className="font-semibold text-slate-800 mt-1">15 / 05 / 1992</p></div>
            <div><p className="text-slate-400 font-medium">GIỚI TÍNH</p><p className="font-semibold text-slate-800 mt-1">Nam</p></div>
            <div><p className="text-slate-400 font-medium">QUỐC TỊCH</p><p className="font-semibold text-slate-800 mt-1">Việt Nam</p></div>
            <div><p className="text-slate-400 font-medium">SỐ ĐIỆN THOẠI</p><p className="font-semibold text-slate-800 mt-1">+84 908 123 456</p></div>
            <div className="col-span-2">
              <p className="text-slate-400 font-medium">ĐỊA CHỈ EMAIL</p>
              <p className="font-semibold text-slate-800 mt-1 flex items-center space-x-2">
                <span>nguyenvana.workbridge@gmail.com</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded">ĐÃ XÁC MINH</span>
              </p>
            </div>
            <div className="col-span-2"><p className="text-slate-400 font-medium">ĐỊA CHỈ THƯỜNG TRÚ</p><p className="font-semibold text-slate-800 mt-1 leading-relaxed">123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Hệ thống đối tác */}
        <div className="bg-[#034d35] p-6 rounded-2xl text-emerald-100 shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">● Hệ thống đối tác</span>
          <div>
            <p className="text-[10px] uppercase text-emerald-300">Đơn vị xác thực</p>
            <h3 className="text-2xl font-serif font-bold text-white mt-0.5">TrustCore v2.4</h3>
            <span className="text-[10px] font-mono bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded mt-1 inline-block">API_KEY: TC-889-XJ-99</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-800 text-xs">
            <div><p className="text-emerald-300">Ngày đăng ký</p><p className="font-bold text-white mt-0.5">12/10/2023</p></div>
            <div><p className="text-emerald-300">Điểm tin cậy</p><p className="font-bold text-white mt-0.5">98 / 100</p></div>
          </div>
        </div>

        {/* Tóm tắt tiến độ */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h4 className="text-sm font-bold text-slate-800">Tóm tắt tiến độ</h4>
          <div className="relative border-l-2 border-slate-100 pl-4 space-y-5 text-xs">
            <div className="relative">
              <span className="absolute -left-[21px] top-0.5 h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-50"></span>
              <h5 className="font-bold text-slate-800">Thông tin cá nhân</h5>
              <p className="text-slate-400 mt-0.5">Đã hoàn thành các trường bắt buộc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};