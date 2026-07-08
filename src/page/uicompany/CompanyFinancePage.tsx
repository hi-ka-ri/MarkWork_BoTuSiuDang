import React from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, ShieldCheck, Download, Search, Filter } from 'lucide-react';

export const CompanyFinancePage: React.FC = () => {
  return (
    <div className="w-full pb-20">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">Quản lý tài chính</h1>
          <p className="text-sm font-medium text-slate-500">Theo dõi số dư, dòng tiền và các khoản thanh toán bảo lãnh (Escrow).</p>
        </div>
        <button className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
          <CreditCard className="h-4 w-4" /> Nạp tiền vào ví
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Số dư khả dụng */}
        <div className="bg-[#047857] text-white border border-[#065f46] rounded-2xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-6 relative">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <h3 className="text-xs font-bold text-emerald-200 uppercase tracking-widest mb-1 relative">SỐ DƯ KHẢ DỤNG</h3>
          <div className="flex items-end gap-3 relative">
            <p className="text-3xl font-bold">125.500.000đ</p>
          </div>
        </div>

        {/* Đang khóa trong Escrow */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">Bảo lãnh an toàn</span>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">ĐANG KHÓA (ESCROW)</h3>
          <p className="text-2xl font-bold text-slate-800">45.000.000đ</p>
        </div>

        {/* Tổng đã chi tiêu */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">TỔNG ĐÃ CHI TIÊU (THÁNG NÀY)</h3>
          <p className="text-2xl font-bold text-slate-800">82.300.000đ</p>
        </div>

      </div>

      {/* Transaction History */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
          <h2 className="font-bold text-slate-800">Lịch sử giao dịch</h2>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Tìm kiếm mã GD..." 
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] w-[200px]"
              />
            </div>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" /> Bộ lọc
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" /> Xuất file
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="p-4 pl-6">MÃ GIAO DỊCH</th>
                <th className="p-4">LOẠI GIAO DỊCH</th>
                <th className="p-4">CHI TIẾT</th>
                <th className="p-4">THỜI GIAN</th>
                <th className="p-4 text-right">SỐ TIỀN</th>
                <th className="p-4 pr-6 text-right">TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-slate-700">#TRX-89210</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                    <span className="font-bold text-slate-700">Thanh toán</span>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">Giải ngân Milestone 1 - Thiết kế App</td>
                <td className="p-4 text-slate-500 text-xs">15/10/2023 14:30</td>
                <td className="p-4 text-right font-bold text-rose-600">-5.000.000đ</td>
                <td className="p-4 pr-6 text-right">
                  <span className="px-2 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded">Thành công</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-slate-700">#TRX-89195</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span className="font-bold text-slate-700">Khóa Escrow</span>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">Bảo lãnh - Viết bài content Marketing</td>
                <td className="p-4 text-slate-500 text-xs">14/10/2023 09:15</td>
                <td className="p-4 text-right font-bold text-slate-700">12.000.000đ</td>
                <td className="p-4 pr-6 text-right">
                  <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded">Đang giữ</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-slate-700">#TRX-89102</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-[#047857]">
                      <ArrowDownRight className="h-3 w-3" />
                    </div>
                    <span className="font-bold text-slate-700">Nạp tiền</span>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">Nạp tiền qua Chuyển khoản ngân hàng</td>
                <td className="p-4 text-slate-500 text-xs">10/10/2023 16:45</td>
                <td className="p-4 text-right font-bold text-[#047857]">+50.000.000đ</td>
                <td className="p-4 pr-6 text-right">
                  <span className="px-2 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded">Thành công</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-slate-700">#TRX-89055</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                      <CreditCard className="h-3 w-3" />
                    </div>
                    <span className="font-bold text-slate-700">Phí dịch vụ</span>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">Phí nâng cấp tài khoản Premium</td>
                <td className="p-4 text-slate-500 text-xs">01/10/2023 08:00</td>
                <td className="p-4 text-right font-bold text-rose-600">-1.500.000đ</td>
                <td className="p-4 pr-6 text-right">
                  <span className="px-2 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded">Thành công</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm font-medium text-slate-500">Hiển thị <span className="font-bold text-slate-800">1-4</span> trên <span className="font-bold text-slate-800">128</span> giao dịch</p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-white transition-colors">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#047857] bg-[#047857] text-white font-bold rounded-lg shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-white transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-white transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">&gt;</button>
          </div>
        </div>

      </div>

    </div>
  );
};
