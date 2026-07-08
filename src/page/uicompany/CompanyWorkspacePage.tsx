import React from 'react';
import { PenTool, Search, MoreVertical, Paperclip, Smile, Send, Download, CheckCircle, FileText, Check, Clock } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const CompanyWorkspacePage: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] flex flex-col">
      
      {/* Header Info */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-6 justify-between md:items-center mb-6 shrink-0">
        <div className="flex gap-4">
          <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-[#047857]">
            <PenTool className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded">UX/UI DESIGN</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider">ID: TASK-8842-24</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 hover:text-[#047857] transition-colors cursor-pointer mb-1">Thiết kế Dashboard cho FinTech Mobile App</h2>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Clock className="h-3.5 w-3.5" /> Deadline: 15 Thg 11, 2023
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] font-medium text-slate-400">Worker Đảm nhận</p>
              <p className="text-sm font-bold text-slate-800">Hoàng Linh Chi</p>
            </div>
            <img src={avatarImg} alt="Worker" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
          </div>
          <div className="h-10 w-[1px] bg-slate-200 hidden md:block"></div>
          <div className="text-right">
            <p className="text-[10px] font-medium text-slate-400">Ngân sách Task</p>
            <p className="text-lg font-bold text-[#047857]">12.500.000đ</p>
          </div>
          <button className="px-5 py-2.5 bg-[#047857] text-white font-bold text-sm rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
            <InfoIcon className="h-4 w-4" /> Xem Chi Tiết
          </button>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="flex-1 flex gap-6 min-h-0">
        
        {/* Left: Chat & Files */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col min-h-0">
          
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Kênh thảo luận công việc
            </h3>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            <div className="flex justify-center">
              <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                Hợp đồng đã được ký kết - 12/10/2023
              </span>
            </div>

            {/* Message from Worker */}
            <div className="flex gap-4">
              <img src={avatarImg} alt="Worker" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
              <div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm max-w-[500px]">
                  Chào team TechFlow, mình đã hoàn thành bản phác thảo (Wireframe) cho màn hình Dashboard rồi nhé. Mọi người xem qua giúp mình xem flow như này đã ổn chưa ạ?
                </div>
                <span className="text-[10px] font-medium text-slate-400 mt-1 block px-1">09:15 AM</span>
              </div>
            </div>

            {/* Message from Company */}
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-[#047857] flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">
                TF
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-[#047857] text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm max-w-[500px]">
                  Chào Linh Chi, mình đã nhận được bản thảo. Nhìn chung flow khá mượt, nhưng phần biểu đồ tài chính mình muốn hiển thị thêm so sánh với tháng trước nữa nhé.
                </div>
                <span className="text-[10px] font-medium text-slate-400 mt-1 block px-1">09:42 AM</span>
              </div>
            </div>

            {/* Message with Attachment */}
            <div className="flex gap-4">
              <img src={avatarImg} alt="Worker" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
              <div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm max-w-[500px]">
                  Vâng mình đã cập nhật biểu đồ và hoàn thành Milestone 1: High-fidelity Design rồi ạ. Gửi file mọi người duyệt giúp mình nha!
                  
                  {/* Attachment Card */}
                  <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 group cursor-pointer hover:border-[#047857] transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <div className="w-5 h-5 text-[#f24e1e] flex items-center justify-center">
                        {/* Figma icon simplified */}
                        <svg viewBox="0 0 38 57" fill="currentColor"><path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM0 47.5a9.5 9.5 0 019.5-9.5H19v19a9.5 9.5 0 11-19-9.5zM0 28.5a9.5 9.5 0 019.5-9.5H19v19H9.5A9.5 9.5 0 010 28.5zM0 9.5A9.5 9.5 0 019.5 0H19v19H9.5A9.5 9.5 0 010 9.5zM19 0h9.5a9.5 9.5 0 110 19H19V0z"/></svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Fintech_Dashboard_v2_Final.fig</h4>
                      <p className="text-[10px] font-medium text-slate-500">42.5 MB • Figma Project</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white text-slate-400 flex items-center justify-center shadow-sm group-hover:text-[#047857] transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="p-4 border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:border-[#047857] focus-within:ring-1 focus-within:ring-[#047857] transition-all">
              <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-[#047857] rounded-lg transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <input 
                type="text" 
                placeholder="Nhập tin nhắn trao đổi..." 
                className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#047857] text-white rounded-lg hover:bg-[#065f46] transition-colors shadow-sm">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right: Milestones & Actions */}
        <div className="w-[380px] flex flex-col gap-6 shrink-0 min-h-0">
          
          {/* Progress Overview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm shrink-0">
            <h3 className="font-bold text-slate-800 mb-4">Tiến độ Milestone</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-medium text-slate-500">Tiến độ tổng thể</span>
              <span className="text-base font-bold text-[#047857]">60%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-[#047857] w-[60%] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ĐÃ GIẢI NGÂN</p>
                <p className="font-bold text-[#047857]">7.500.000đ</p>
              </div>
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">CÒN LẠI</p>
                <p className="font-bold text-slate-700">5.000.000đ</p>
              </div>
            </div>
          </div>

          {/* Pending Milestone Action */}
          <div className="bg-[#047857] rounded-2xl p-6 shadow-sm text-white shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-200 uppercase tracking-widest mb-3">
              <ClipboardCheckIcon className="h-4 w-4" /> MILESTONE CHỜ DUYỆT
            </div>
            <h3 className="text-lg font-bold mb-2">Milestone 2: High-fidelity Design</h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed mb-4">
              Worker đã nộp sản phẩm cho giai đoạn này. Vui lòng kiểm tra file preview và xác nhận để giải ngân.
            </p>
            
            <div className="bg-white/10 border border-white/20 rounded-xl p-3 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold">Dashboard_Mockup_v2.fig</p>
                <p className="text-[10px] text-emerald-200">Cập nhật 2 giờ trước</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full py-3 bg-white text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <CheckCircle className="h-4 w-4" /> Duyệt & Giải ngân (2.5tr)
              </button>
              <button className="w-full py-3 bg-[#065f46] text-white font-bold text-sm rounded-xl hover:bg-[#064e3b] transition-colors flex items-center justify-center gap-2">
                <MenuIcon className="h-4 w-4" /> Yêu cầu chỉnh sửa
              </button>
            </div>
          </div>

          {/* Milestone List */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex-1 flex flex-col min-h-0">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center shrink-0">
              <h3 className="font-bold text-slate-800">Danh sách Milestone</h3>
              <button className="text-xs font-bold text-[#047857] hover:underline">Xem tất cả</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-7 top-8 bottom-8 w-[2px] bg-slate-100"></div>

              {/* M1 */}
              <div className="flex items-start gap-4 relative">
                <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white z-10 shrink-0 mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-slate-800">M1: Nghiên cứu & Wireframe</h4>
                    <span className="text-xs font-medium text-slate-400">5.000.000đ</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hoàn thành: 15/10/2023</p>
                </div>
              </div>

              {/* M2 */}
              <div className="flex items-start gap-4 relative">
                <div className="w-5 h-5 bg-amber-500 rounded-full border-4 border-white flex items-center justify-center text-white z-10 shrink-0 mt-0.5">
                  <HourglassIcon className="h-2.5 w-2.5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-slate-800">M2: High-fidelity Design</h4>
                    <span className="text-xs font-medium text-slate-400">2.500.000đ</span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded">Chờ duyệt</span>
                </div>
              </div>

              {/* M3 */}
              <div className="flex items-start gap-4 relative opacity-50">
                <div className="w-5 h-5 bg-slate-200 rounded-full border-4 border-white z-10 shrink-0 mt-0.5"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-slate-600">M3: Prototype & Testing</h4>
                    <span className="text-xs font-medium text-slate-400">2.500.000đ</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400">Chưa bắt đầu</p>
                </div>
              </div>

              {/* M4 */}
              <div className="flex items-start gap-4 relative opacity-50">
                <div className="w-5 h-5 bg-slate-200 rounded-full border-4 border-white z-10 shrink-0 mt-0.5"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-slate-600">M4: Bàn giao File Gốc</h4>
                    <span className="text-xs font-medium text-slate-400">2.500.000đ</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400">Chưa bắt đầu</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 shrink-0">
              <button className="w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-100 hover:text-[#047857] transition-colors flex items-center justify-center gap-2">
                <PlusIcon className="h-4 w-4" /> Thêm Milestone mới
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

// Helper icons
const InfoIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ClipboardCheckIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
const MenuIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const HourglassIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PlusIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
