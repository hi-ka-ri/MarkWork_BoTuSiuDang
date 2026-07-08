import React from 'react';
import { 
  ArrowLeft, Eye, UploadCloud, Link as LinkIcon, Edit3, Image as ImageIcon,
  Clock, Users, AlertCircle, CheckCircle2
} from 'lucide-react';

export const BannerEditorPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] -m-6 flex flex-col bg-slate-50">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-[#047857]">Cấu hình Banner Khuyến mãi</h1>
            <span className="px-3 py-1 bg-[#b45309] text-white text-[10px] font-bold rounded-lg uppercase tracking-wide shadow-sm">
              ĐANG SOẠN THẢO
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-lg text-sm transition-colors shadow-sm">
            <Eye className="h-4 w-4" />
            <span>Xem trước</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm">
            <UploadCloud className="h-4 w-4" />
            <span>Xuất bản</span>
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Editor Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
          
          {/* Basic Info */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 text-[#047857] font-bold text-[17px] mb-6">
              <Edit3 className="h-5 w-5" />
              <h2>Thông tin cơ bản</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-2">Tên Banner</label>
                <input 
                  type="text" 
                  defaultValue="Khuyến mãi Tết Nguyên Đán 2024"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white transition-shadow"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-2">Ngày bắt đầu</label>
                  <input 
                    type="date" 
                    defaultValue="2024-02-01"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-2">Ngày kết thúc</label>
                  <input 
                    type="date" 
                    defaultValue="2024-02-15"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-2">Liên kết mục tiêu (URL)</label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-[#047857] transition-shadow">
                  <span className="bg-slate-50 px-4 py-3 text-slate-500 font-medium text-sm border-r border-slate-200 flex items-center">
                    https://
                  </span>
                  <input 
                    type="text" 
                    defaultValue="gigflow.vn/campaign/tet-2024"
                    className="flex-1 px-4 py-3 font-medium text-slate-800 text-[15px] focus:outline-none bg-white"
                  />
                </div>
                <p className="text-[11px] font-medium text-slate-400 mt-2 flex items-center">
                  <LinkIcon className="h-3 w-3 mr-1" />
                  Hệ thống sẽ tự động gán tham số tracking UTM cho link này.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Image Upload */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-[#047857] font-bold text-[17px]">
                <ImageIcon className="h-5 w-5" />
                <h2>Hình ảnh Banner</h2>
              </div>
              <div className="text-[13px] font-bold text-[#047857] bg-emerald-50 px-3 py-1 rounded-md">
                1920 x 450 px
              </div>
            </div>
            
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-[#047857] mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Kéo và thả ảnh vào đây</h3>
              <p className="text-sm font-medium text-slate-500 mb-6">hoặc nhấp để chọn tệp từ máy tính</p>
              
              <div className="flex items-center space-x-6 text-[11px] font-bold text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <AlertCircle className="h-4 w-4" />
                  <span>Định dạng: JPG, PNG, WEBP</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <AlertCircle className="h-4 w-4" />
                  <span>Dung lượng tối đa: 2MB</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Live Preview & Stats */}
        <div className="w-[400px] xl:w-[450px] bg-slate-50 border-l border-slate-200 flex flex-col flex-shrink-0 z-10 overflow-y-auto">
          
          <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-20">
            <h3 className="font-bold text-[12px] text-slate-600 tracking-widest uppercase">XEM TRƯỚC HIỂN THỊ (LIVE PREVIEW)</h3>
            <div className="flex space-x-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            
            {/* Live Preview Container */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
              <div className="w-full aspect-[21/9] bg-slate-800 relative">
                {/* Simulated Mock Banner Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#047857] to-[#0f172a] flex items-center p-6 text-white overflow-hidden">
                  <div className="relative z-10 max-w-[60%]">
                    <h2 className="text-xl font-bold mb-2">Nhận Việc Xuyên Tết</h2>
                    <p className="text-xs opacity-90">Bùng nổ thành công. Nâng cao thu nhập gấp 3 lần.</p>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-50 w-[50%] h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
              </div>
              <div className="flex justify-center py-3 space-x-1.5 bg-white border-t border-slate-100">
                <div className="w-6 h-1.5 rounded-full bg-[#047857]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-[15px] text-slate-800 mb-4">Danh mục thống kê nhanh</h3>
              
              <div className="space-y-3">
                <div className="bg-[#f8fafc] rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-bold">Thời gian áp dụng</span>
                  </div>
                  <div className="text-sm font-bold text-[#047857]">14 Ngày</div>
                </div>

                <div className="bg-[#f8fafc] rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-bold">Đối tượng mục tiêu</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">Tất cả người dùng</div>
                </div>

                <div className="bg-[#fff1f2] rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm font-bold">Mức độ ưu tiên</span>
                  </div>
                  <div className="text-sm font-bold text-rose-600 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    <span>Cao nhất</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-4 flex items-center space-x-3">
              <div className="p-2 bg-[#f59e0b] text-white rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#b45309] text-sm mb-0.5">Sẵn sàng xuất bản</h4>
                <p className="text-[11px] text-[#b45309] font-medium leading-relaxed">
                  Cấu hình đã đầy đủ thông tin bắt buộc.<br/>Bạn có thể xuất bản ngay hoặc đặt lịch hiển thị.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Footer info */}
      <div className="bg-white border-t border-slate-200 px-6 py-3 flex justify-between text-[11px] font-bold text-slate-400 tracking-widest uppercase">
        <span>P17.1 - HỆ THỐNG GIGFLOW V2.4.0</span>
        <div className="space-x-6">
          <button className="hover:text-slate-600 transition-colors">Hướng dẫn sử dụng</button>
          <button className="hover:text-slate-600 transition-colors">Báo cáo lỗi</button>
        </div>
      </div>

    </div>
  );
};
