import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCheck, DollarSign, Briefcase, Settings, AlertTriangle, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

export const NotificationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const tabs = ['Tất cả', 'Hệ thống', 'Tài chính', 'Công việc', 'Khiếu nại'];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 w-full min-h-[calc(100vh-80px)]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-bold text-slate-800 font-serif">Thông báo</h1>
          <span className="text-slate-500 font-medium">(5 chưa đọc)</span>
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
          <CheckCheck className="h-4 w-4" />
          Đánh dấu tất cả đã đọc
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 mb-6 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === tab 
                ? 'text-[#047857]' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#047857] rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="divide-y divide-slate-100">
          
          {/* Item 1 */}
          <div className="p-6 flex gap-4 hover:bg-slate-50 transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#047857]"></div>
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <DollarSign className="h-5 w-5 text-[#047857]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#047857] rounded-full"></div>
                  Thanh toán đã được phê duyệt
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  12:45 • 24 THÁNG 5, 2024
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-3 leading-relaxed">
                Yêu cầu thanh toán cho dự án "Redesign UI E-commerce" đã được chấp nhận. Tiền sẽ về ví của bạn trong vòng 24h.
              </p>
              <Link to="/talent/finance" className="text-sm font-bold text-[#047857] hover:underline">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-6 flex gap-4 hover:bg-slate-50 transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#047857]"></div>
            <div className="w-12 h-12 bg-[#047857] rounded-full flex items-center justify-center shrink-0">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#047857] rounded-full"></div>
                  Lời mời làm việc mới
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  09:15 • 24 THÁNG 5, 2024
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-3 leading-relaxed">
                Công ty TechGlobal vừa gửi lời mời bạn tham gia dự án "Phát triển Landing Page" với mức thù lao hấp dẫn.
              </p>
              <Link to="/talent/offers/1" className="text-sm font-bold text-[#047857] hover:underline">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-6 flex gap-4 bg-slate-50 opacity-75 hover:opacity-100 transition-all">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
              <Settings className="h-5 w-5 text-slate-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-slate-600">
                  Bảo trì hệ thống định kỳ
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  HÔM QUA • 23:00
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-3 leading-relaxed">
                Hệ thống sẽ tạm dừng hoạt động để bảo trì từ 00:00 đến 02:00 ngày 26/05. Rất xin lỗi vì sự bất tiện này.
              </p>
              <button className="text-sm font-bold text-[#047857] hover:underline">
                Xem chi tiết
              </button>
            </div>
          </div>

          {/* Item 4 */}
          <div className="p-6 flex gap-4 hover:bg-slate-50 transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Khiếu nại về thời gian bàn giao
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  HÔM QUA • 16:20
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-3 leading-relaxed">
                Khách hàng "Studio X" đã gửi yêu cầu khiếu nại về việc chậm trễ bàn giao Milestone 2.
              </p>
              <Link to="/talent/workspace" className="text-sm font-bold text-[#047857] hover:underline">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Item 5 */}
          <div className="p-6 flex gap-4 hover:bg-slate-50 transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#047857]"></div>
            <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center shrink-0">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#047857] rounded-full"></div>
                  Đánh giá mới từ khách hàng
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  22 THÁNG 5 • 10:05
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-3 leading-relaxed">
                Bạn vừa nhận được đánh giá 5 sao kèm bình luận từ khách hàng Minh Anh cho dự án vừa kết thúc.
              </p>
              <button className="text-sm font-bold text-[#047857] hover:underline">
                Xem chi tiết
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-1.5">
          <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-[#047857] border border-[#047857] rounded-lg text-white font-bold text-sm shadow-sm">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
            3
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
          <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
            12
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

    </div>
  );
};
