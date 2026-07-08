import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Paperclip, Smile, CheckCircle2, MoreHorizontal, Circle, UploadCloud, Eye } from 'lucide-react';
import { ReviewModal } from './components/ReviewModal';

export const WorkspacePage: React.FC = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-slate-800 font-serif">Thiết kế UI/UX cho ứng dụng Quản lý Tài chính cá nhân</h1>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Đang thực hiện
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><BuildingIcon className="h-4 w-4" /> Fintech Solutions Ltd.</span>
            <span className="flex items-center gap-1.5"><CalendarIcon className="h-4 w-4" /> Hạn chót: 24 Tháng 12, 2024</span>
          </div>
        </div>
        <Link to="/talent/finance" className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm shrink-0">
          <Eye className="h-4 w-4" />
          Xem tài chính dự án
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Chat */}
        <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-[600px]">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <MessageSquareIcon className="h-5 w-5 text-[#047857]" />
            <h2 className="font-bold text-slate-800">Trao đổi công việc</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
            
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm font-medium text-slate-700 leading-relaxed shadow-sm">
                Chào bạn, chúng tôi đã xem qua bản nháp đầu tiên. Bạn có thể điều chỉnh lại bảng màu cho phần Dashboard sáng hơn một chút không?
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1.5 ml-1">09:15 AM - Fintech Solutions</span>
            </div>

            <div className="flex flex-col items-end max-w-[80%] self-end ml-auto">
              <div className="bg-[#047857] text-white p-4 rounded-2xl rounded-tr-sm text-sm font-medium leading-relaxed shadow-sm">
                Vâng tôi đã nhận được phản hồi. Tôi sẽ thử nghiệm với tông màu xanh nhạt hơn và gửi lại trong bản cập nhật chiều nay nhé.
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1.5 mr-1">09:28 AM - Bạn</span>
            </div>

            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm font-medium text-slate-700 leading-relaxed shadow-sm">
                Tuyệt vời, cảm ơn sự hỗ trợ nhiệt tình của bạn!
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1.5 ml-1">10:05 AM - Fintech Solutions</span>
            </div>

          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <div className="bg-white border border-slate-200 rounded-xl flex flex-col focus-within:border-[#047857] focus-within:ring-1 focus-within:ring-[#047857] transition-all">
              <textarea 
                rows={3}
                placeholder="Nhập tin nhắn..."
                className="w-full px-4 py-3 bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 resize-none outline-none"
              ></textarea>
              <div className="flex items-center justify-between p-2 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <button className="p-2 text-slate-400 hover:text-[#047857] transition-colors rounded-lg hover:bg-slate-50"><Paperclip className="h-4 w-4" /></button>
                  <button className="p-2 text-slate-400 hover:text-[#047857] transition-colors rounded-lg hover:bg-slate-50"><Smile className="h-4 w-4" /></button>
                </div>
                <button className="px-4 py-2 bg-[#047857] text-white font-bold text-sm rounded-lg hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
                  Gửi <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Milestones */}
        <div className="w-full lg:w-[400px] shrink-0 space-y-6">
          
          {/* Progress Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Tiến độ tổng thể</h3>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#047857] w-[45%] rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-slate-500">Hoàn thành 45%</span>
              <span className="text-[#047857]">2/4 Milestones</span>
            </div>
          </div>

          {/* Milestones List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Danh sách Milestones</h3>
            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-[#047857] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#047857] text-sm">Nghiên cứu người dùng</h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-1">Đã hoàn thành: 15/11/2024</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-amber-200 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
                <MoreHorizontal className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Wireframes & Low-fi Prototype</h4>
                  <p className="text-[10px] font-bold text-amber-600 mt-1">Đang xét duyệt...</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl">
                <Circle className="h-5 w-5 text-slate-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-500 text-sm">High-fidelity UI Design</h4>
                  <p className="text-[10px] font-bold text-slate-400 mt-1">Hạn nộp: 10/12/2024</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl">
                <Circle className="h-5 w-5 text-slate-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-500 text-sm">Final Assets & Handover</h4>
                  <p className="text-[10px] font-bold text-slate-400 mt-1">Hạn nộp: 24/12/2024</p>
                </div>
              </div>

            </div>
          </div>

          {/* Submit Milestone */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Nộp Milestone</h3>
            
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#047857] hover:bg-slate-50 transition-all mb-4 group">
              <UploadCloud className="h-6 w-6 text-slate-400 group-hover:text-[#047857] mb-2 transition-colors" />
              <p className="text-xs font-bold text-slate-600">Tải lên tệp tin (.zip, .pdf, .figma)</p>
            </div>

            <textarea 
              rows={3}
              placeholder="Ghi chú cho khách hàng..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all resize-none mb-4 placeholder-slate-400"
            ></textarea>

            <button 
              onClick={() => setIsReviewOpen(true)}
              className="w-full py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4" />
              Nộp Milestone
            </button>
          </div>

        </div>

      </div>
      
      <ReviewModal isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
    </div>
  );
};

// Helper components for icons to keep main component clean
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

const MessageSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
);
