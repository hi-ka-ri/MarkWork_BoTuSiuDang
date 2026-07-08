import React from 'react';
import { Save, Shield, Clock, AlertTriangle, Building, Bell, ChevronRight, ExternalLink } from 'lucide-react';

export const CompanySettingsPage: React.FC = () => {
  return (
    <div className="w-full pb-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
        <span className="hover:text-slate-800 cursor-pointer">Trang chủ</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-[#047857]">Cài đặt công ty</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">Cấu hình hệ thống</h1>
          <p className="text-sm font-medium text-slate-500">Quản lý thông tin doanh nghiệp, bảo mật và tùy chọn thông báo.</p>
        </div>
        <button className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
          <Save className="h-4 w-4" /> Lưu thay đổi
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Settings) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Thông tin công ty */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
              <Building className="h-5 w-5 text-[#047857]" />
              <h2 className="font-bold text-slate-800">Thông tin công ty</h2>
            </div>
            <div className="p-6">
              
              <div className="bg-slate-50 rounded-xl p-5 flex items-center gap-5 mb-6 border border-slate-100">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-2">
                  <div className="w-full h-full bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xl">TC</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Công ty CP TechConnect</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1.5"><Building className="h-3.5 w-3.5" /> MST: 0101234567</span>
                    <span className="flex items-center gap-1.5 text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                      <Shield className="h-3 w-3" /> Doanh nghiệp đã xác thực
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Địa chỉ trụ sở</label>
                  <input 
                    type="text" 
                    defaultValue="Số 123, Phố Duy Tân, Cầu Giấy, Hà Nội"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Số điện thoại liên hệ</label>
                  <input 
                    type="text" 
                    defaultValue="+84 24 3322 1100"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Ngành nghề kinh doanh</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-[#047857] appearance-none">
                  <option>Công nghệ thông tin & Phần mềm</option>
                </select>
              </div>

            </div>
          </div>

          {/* Tùy chọn thông báo */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
              <Bell className="h-5 w-5 text-[#047857]" />
              <h2 className="font-bold text-slate-800">Tùy chọn thông báo</h2>
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-slate-500 mb-6">Chọn cách thức bạn muốn nhận cập nhật từ hệ thống WorkMarket.</p>
              
              <div className="space-y-4">
                <div className="border border-[#047857] bg-emerald-50/20 rounded-xl p-5 flex items-start gap-4">
                  <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-[#047857] rounded border-slate-300 focus:ring-[#047857]" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                      Nhận thông báo ứng viên mới
                      <span className="px-2 py-0.5 bg-emerald-100 text-[#047857] text-[10px] uppercase tracking-widest rounded">PHỔ BIẾN</span>
                    </h4>
                    <p className="text-xs font-medium text-slate-500">Gửi email thông báo ngay khi có chuyên gia ứng tuyển vào task của bạn.</p>
                  </div>
                </div>

                <div className="border border-[#047857] bg-emerald-50/20 rounded-xl p-5 flex items-start gap-4">
                  <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-[#047857] rounded border-slate-300 focus:ring-[#047857]" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Cập nhật Milestone & Thanh toán</h4>
                    <p className="text-xs font-medium text-slate-500">Thông báo khi một cột mốc công việc hoàn thành hoặc yêu cầu giải ngân.</p>
                  </div>
                </div>

                <div className="border border-slate-200 bg-white rounded-xl p-5 flex items-start gap-4 opacity-70 hover:opacity-100 transition-opacity">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-[#047857] rounded border-slate-300 focus:ring-[#047857]" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Bản tin thị trường hàng tuần</h4>
                    <p className="text-xs font-medium text-slate-500">Nhận báo cáo tổng hợp về xu hướng làm việc remote và biểu đồ giá nhân sự.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column (Sidebar widgets) */}
        <div className="space-y-6">
          
          {/* Bảo mật */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
              <Shield className="h-5 w-5 text-[#047857]" />
              <h2 className="font-bold text-slate-800">Bảo mật</h2>
            </div>
            <div className="p-6">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Xác thực 2 lớp (2FA)</h4>
                  <p className="text-xs font-medium text-slate-500">Tăng cường bảo mật bằng mã OTP qua điện thoại hoặc ứng dụng.</p>
                </div>
                {/* Toggle Switch */}
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 cursor-pointer">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 mb-6">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                <p className="text-xs font-bold text-amber-700 leading-relaxed">
                  Việc bật 2FA sẽ áp dụng cho tất cả tài khoản quản trị viên thuộc tổ chức này.
                </p>
              </div>

              <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" /> Xem nhật ký đăng nhập
              </button>

            </div>
          </div>

          {/* Mức độ hoàn thiện */}
          <div className="bg-[#047857] rounded-2xl p-6 text-white shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <h3 className="font-bold mb-4">Mức độ hoàn thiện</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-4xl font-bold">85%</span>
              <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest">Rất tốt</span>
            </div>
            
            <div className="w-full h-1.5 bg-emerald-900/50 rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-white w-[85%] rounded-full"></div>
            </div>

            <p className="text-xs font-medium text-emerald-100 mb-6 leading-relaxed">
              Thêm mô tả công ty để thu hút các ứng viên hàng đầu tham gia dự án của bạn.
            </p>

            <button className="text-sm font-bold flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
              Hoàn thiện ngay <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Hỗ trợ */}
          <div className="px-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">HỖ TRỢ</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#047857] hover:underline">
                Trung tâm trợ giúp <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#047857] hover:underline">
                Chính sách bảo mật <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#047857] hover:underline">
                Điều khoản sử dụng <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 right-0 left-[260px] bg-white border-t border-slate-200 p-4 px-8 flex justify-end gap-4 z-10 shadow-[0_-4px_20px_rgb(0,0,0,0.02)]">
        <button className="px-6 py-2.5 bg-white text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
          Hủy bỏ
        </button>
        <button className="px-8 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm">
          Lưu tất cả thay đổi
        </button>
      </div>

    </div>
  );
};
