import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ZoomIn, Check, PenTool, ShieldCheck } from 'lucide-react';

export const ContractNDAPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      
      {/* Banner */}
      <div className="bg-[#a7f3d0] rounded-2xl p-6 mb-8 flex items-start gap-4">
        <div className="w-10 h-10 bg-[#047857]/10 text-[#047857] rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#065f46] mb-1">Ký Thỏa thuận Bảo mật (NDA)</h2>
          <p className="text-sm font-medium text-[#065f46]">
            Vui lòng đọc kỹ nội dung bản thỏa thuận trước khi thực hiện ký số để bắt đầu công việc tại <span className="font-bold">Creative Studio X</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - PDF Viewer */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <FileText className="h-4 w-4 text-[#047857]" />
              NDA_CREATIVE_STUDIO_2024.PDF
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              <ZoomIn className="h-3.5 w-3.5" />
              Phóng to
            </button>
          </div>
          
          <div className="flex-1 bg-slate-100 p-8 flex items-center justify-center min-h-[500px]">
            {/* Mock PDF Page */}
            <div className="bg-white shadow-md w-full max-w-[500px] aspect-[1/1.2] p-10 flex flex-col items-center text-center mx-auto">
              <h3 className="text-lg font-serif font-bold text-slate-800 mb-8 mt-4">NON-DISCLOSURE AGREEMENT</h3>
              <p className="text-sm font-medium text-slate-700 text-left leading-relaxed mb-6">
                Thỏa thuận này được thực hiện vào ngày 24 tháng 05 năm 2024 giữa Creative Studio X (sau đây gọi là "Bên Tiết lộ") và Freelancer được xác định dưới đây (sau đây gọi là "Bên Nhận").
              </p>
              <p className="text-sm font-medium text-slate-700 text-left leading-relaxed">
                <span className="font-bold">1. Định nghĩa Thông tin Bảo mật:</span> "Thông tin Bảo mật" bao gồm mọi thông tin không được công khai, bí mật kinh doanh, quy trình kỹ thuật, danh sách khách hàng và dữ liệu dự án mà Bên Tiết lộ cung cấp.
              </p>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-center gap-6">
            <button className="text-slate-500 hover:text-slate-800 font-bold px-2 py-1">&lt;</button>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Trang 1 / 4</span>
            <button className="text-slate-500 hover:text-slate-800 font-bold px-2 py-1">&gt;</button>
          </div>
        </div>

        {/* Right Column - Signature Action */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Xác nhận chữ ký số</h3>
            
            <div className="mb-8">
              <label className="flex items-start gap-4 p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#047857] transition-colors group">
                <div className="mt-0.5">
                  <div className="w-5 h-5 rounded border-2 border-slate-300 flex items-center justify-center bg-white group-hover:border-[#047857]">
                    <Check className="h-3 w-3 text-transparent" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  Tôi đã đọc, hiểu rõ và đồng ý với tất cả các điều khoản trong Thỏa thuận Bảo mật (NDA) này.
                </p>
              </label>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phương thức ký</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all appearance-none cursor-pointer">
                  <option>Vẽ chữ ký trực tiếp</option>
                  <option>Tải lên ảnh chữ ký</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Chữ ký của bạn</label>
                <button className="text-[11px] font-bold text-[#047857] hover:underline">Xóa chữ ký</button>
              </div>
              <div className="w-full h-40 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center cursor-crosshair hover:border-[#047857] transition-colors group">
                <PenTool className="h-6 w-6 text-slate-300 group-hover:text-[#047857] transition-colors mb-2" />
                <p className="text-xs font-medium text-slate-400">Sử dụng chuột hoặc cảm ứng để ký</p>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <Link to="/talent/workspace" className="w-full py-3.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors shadow-sm block text-center">
                Ký và xác nhận
              </Link>
              <button className="w-full py-3.5 bg-white border border-slate-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors">
                Từ chối
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
