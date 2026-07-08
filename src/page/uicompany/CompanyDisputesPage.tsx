import React from 'react';
import { AlertTriangle, X, ChevronRight, ChevronLeft, CloudUpload, HelpCircle, FileText } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const CompanyDisputesPage: React.FC = () => {
  return (
    <div className="w-full pb-20">
      
      {/* Alert Header */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex justify-between items-start gap-4">
        <div className="flex gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-bold text-amber-800 mb-1">Lưu ý về quy trình giải quyết tranh chấp</h3>
            <p className="text-sm font-medium text-amber-700/80 leading-relaxed">
              Việc mở tranh chấp sẽ tạm dừng mọi thanh toán liên quan đến milestone hiện tại. Vui lòng đảm bảo bạn đã cố gắng trao đổi với đối tác trước khi gửi yêu cầu khiếu nại chính thức. Đội ngũ WorkMarket sẽ phản hồi trong vòng 24-48 giờ làm việc.
            </p>
          </div>
        </div>
        <button className="text-amber-500 hover:text-amber-700 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">Trung tâm giải quyết tranh chấp</h1>
          <p className="text-sm font-medium text-slate-500">Quản lý và giải quyết các vấn đề phát sinh trong quá trình làm việc.</p>
        </div>
        <div className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#047857]"></span> 3 Tranh chấp đang mở
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Left Column (List) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[600px]">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50 shrink-0">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#047857]" /> Tranh chấp đang mở
            </h2>
            <button className="text-xs font-bold text-[#047857] hover:underline">Xem tất cả</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Dispute Card 1 */}
            <div className="border border-[#047857] bg-emerald-50/20 rounded-2xl p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100">
                  <span className="font-bold text-lg">&lt;&gt;</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800">Thiết kế Mobile App - Giai đoạn 2</h3>
                      <p className="text-xs font-medium text-slate-500">Mã vụ việc: #DIS-89210 • Freelancer: Lê Văn A</p>
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      ĐANG CHỜ PHẢN HỒI
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-600 italic mb-4 bg-white p-3 rounded-xl border border-slate-100">
                    "Freelancer chưa hoàn thành đúng checklist milestone nhưng yêu cầu thanh toán..."
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <div className="flex -space-x-2">
                      <img src={avatarImg} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src={avatarImg} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                        +2
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-white border border-[#047857] text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Card 2 */}
            <div className="border border-slate-200 bg-white rounded-2xl p-5 shadow-sm hover:border-[#047857]/30 transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-slate-800">Viết bài content Marketing</h3>
                      <p className="text-xs font-medium text-slate-500">Mã vụ việc: #DIS-89195 • Freelancer: Nguyễn Thị B</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      ĐANG XEM XÉT
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400">Cập nhật cuối: 2 giờ trước</span>
                    <button className="px-5 py-2 bg-white border border-[#047857] text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
                      Phản hồi ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-[600px] flex flex-col">
          <div className="p-6 border-b border-slate-200 bg-slate-50/50 shrink-0">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-1">
              <span className="text-rose-500"><HelpCircle className="h-5 w-5" /></span>
              Mở khiếu nại mới
            </h2>
            <p className="text-xs font-medium text-slate-500">Điền thông tin chi tiết để chúng tôi hỗ trợ bạn.</p>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Chọn công việc (Task)</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] appearance-none">
                <option>Thiết kế Mobile App - Giai đoạn 2</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Chọn milestone tranh chấp</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] appearance-none">
                <option>Milestone 1: UI/UX Flow & Wireframes</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Mô tả chi tiết vấn đề</label>
              <textarea 
                rows={4}
                placeholder="Vui lòng mô tả rõ ràng lý do bạn mở tranh chấp, các cam kết chưa được thực hiện..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Bằng chứng (Ảnh chụp, file đính kèm)</label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-center">
                <CloudUpload className="h-6 w-6 text-slate-400 mb-2" />
                <p className="text-sm font-medium text-slate-600 mb-1">
                  <span className="font-bold text-[#047857]">Tải tệp lên</span> hoặc kéo thả vào đây
                </p>
                <p className="text-[10px] text-slate-400 font-medium">PNG, JPG, PDF lên đến 10MB</p>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-100 shrink-0">
            <button className="w-full py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors shadow-sm flex items-center justify-center gap-2">
              <span className="font-bold text-lg leading-none transform rotate-45 mr-1">&gt;</span>
              Gửi yêu cầu khiếu nại
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Stats */}
      <div className="mb-4">
        <h2 className="font-bold text-slate-800 mb-4">Thống kê giải quyết</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-2">Tổng tranh chấp</p>
            <p className="text-3xl font-bold text-slate-800">24</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-2">Đã giải quyết</p>
            <p className="text-3xl font-bold text-[#047857]">18</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-2">Thời gian TB</p>
            <p className="text-3xl font-bold text-slate-800">3.2 <span className="text-base font-medium text-slate-500">ngày</span></p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-2">Tỷ lệ đồng thuận</p>
            <p className="text-3xl font-bold text-[#047857]">75%</p>
          </div>
        </div>
      </div>

    </div>
  );
};
