import React from 'react';
import { Wallet, Banknote, Lock, Search, Filter } from 'lucide-react';

export const TalentFinancePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Tài chính & Lịch sử Giao dịch</h1>
        <p className="text-sm font-medium text-slate-500">
          Quản lý thu nhập và theo dõi trạng thái các khoản thanh toán ký quỹ của bạn.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tổng thu nhập</h3>
            <Wallet className="h-5 w-5 text-[#047857]" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-[#047857]">đ142.500.000</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#047857] mt-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            <span>+12% so với tháng trước</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Khả dụng</h3>
            <Banknote className="h-5 w-5 text-[#047857]" />
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-slate-800">đ32.450.000</span>
          </div>
          <button className="w-full py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors mt-auto shadow-sm">
            Rút tiền
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Đang tạm giữ</h3>
            <Lock className="h-5 w-5 text-slate-500" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-slate-800">đ18.000.000</span>
          </div>
          <div className="text-xs font-medium text-slate-500 mt-auto leading-relaxed">
            Khoản thanh toán đang chờ nghiệm thu hoặc trong thời gian ký quỹ.
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header & Filters */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-800">Lịch sử giao dịch</h2>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <input 
                type="date" 
                className="pl-4 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] w-40"
              />
            </div>
            
            <div className="relative">
              <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] appearance-none w-44">
                <option>Tất cả trạng thái</option>
                <option>DISBURSED</option>
                <option>HELD</option>
                <option>PROCESSING</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-[#047857] font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Áp dụng
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Mã giao dịch</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Thời gian</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mô tả</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Số tiền</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              
              {/* Row 1 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84920</td>
                <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">24/05/2024, 14:30</td>
                <td className="py-4 px-6 font-medium text-slate-700">Thanh toán Milestone 2: Thiết kế UI Dashboard</td>
                <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">+đ12.500.000</td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-wider rounded-md">
                    DISBURSED
                  </span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84811</td>
                <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">22/05/2024, 09:15</td>
                <td className="py-4 px-6 font-medium text-slate-700">Ký quỹ Dự án App Mobile E-commerce</td>
                <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">+đ8.000.000</td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    HELD
                  </span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84755</td>
                <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">20/05/2024, 16:45</td>
                <td className="py-4 px-6 font-medium text-slate-700">Rút tiền về tài khoản Techcombank (*4421)</td>
                <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">-đ15.000.000</td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    PROCESSING
                  </span>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84602</td>
                <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">18/05/2024, 11:20</td>
                <td className="py-4 px-6 font-medium text-slate-700">Thanh toán hoàn tất: Tối ưu hóa Database</td>
                <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">+đ5.200.000</td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-wider rounded-md">
                    DISBURSED
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Hiển thị 1-10 trên 45 giao dịch</p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#047857] bg-[#047857] rounded-lg text-white font-bold text-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
