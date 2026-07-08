import React from 'react';
import { Download, HelpCircle } from 'lucide-react';

export const TaxHistoryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Lịch sử khấu trừ thuế TNCN</h1>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
            Tổng tiền thuế đã khấu trừ (2024): 
            <span className="text-lg font-bold text-red-600">14.250.000 VNĐ</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 focus:outline-none focus:border-[#047857] appearance-none shadow-sm cursor-pointer">
              <option>Năm 2024</option>
              <option>Năm 2023</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>

          <button className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors shadow-sm flex items-center gap-2">
            <Download className="h-4 w-4" />
            Tải báo cáo tổng hợp
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left column: Table */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Kỳ tính thuế</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Mã số thuế</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Công việc</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Số tiền gốc</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Khấu trừ (10%)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>03/2024</td>
                  <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-800">UI/UX Design - Fintech App</p>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">Project Milestone 2</p>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-700 text-right whitespace-nowrap">25.000.000</td>
                  <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">2.500.000</td>
                </tr>

                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>02/2024</td>
                  <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-800">Brand Audit - Retail Corp</p>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">Lumpsum Payment</p>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-700 text-right whitespace-nowrap">12.000.000</td>
                  <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">1.200.000</td>
                </tr>

                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>01/2024</td>
                  <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-800">Marketing Consultant</p>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">Jan Retainer</p>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-700 text-right whitespace-nowrap">30.000.000</td>
                  <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">3.000.000</td>
                </tr>

                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>12/2023</td>
                  <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-800">E-commerce Optimization</p>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">Final Payment</p>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-700 text-right whitespace-nowrap">18.500.000</td>
                  <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">1.850.000</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Right column: Summary */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6">
          
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Tóm tắt quyết toán 2024</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-emerald-100">
                <span className="text-sm font-medium text-slate-600">Tổng thu nhập</span>
                <span className="font-bold text-slate-800 text-right">142.500.000<br/>VNĐ</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-emerald-100">
                <span className="text-sm font-medium text-slate-600">Tổng thuế khấu trừ (10%)</span>
                <span className="font-bold text-red-600 text-right">14.250.000<br/>VNĐ</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-emerald-100 mb-6 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800 leading-tight">Thu<br/>nhập<br/>thực<br/>nhận</span>
              <span className="text-2xl font-bold text-[#047857] text-right">128.250.000<br/>VNĐ</span>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 text-xs font-medium text-slate-600 leading-relaxed">
              <span className="font-bold italic text-slate-700">* Lưu ý:</span> Đây là số liệu tạm tính dựa trên mức khấu trừ tại nguồn 10%. Vui lòng thực hiện quyết toán thuế cuối năm để được hoàn thuế nếu đủ điều kiện.
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:border-[#047857] transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <HelpCircle className="h-5 w-5 text-[#047857]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1 group-hover:text-[#047857] transition-colors">Hỗ trợ quyết toán</h3>
              <p className="text-xs font-medium text-slate-500 mb-2">Kết nối với chuyên gia tư vấn thuế của WorkMarket.</p>
              <span className="text-xs font-bold text-[#047857]">Tìm hiểu thêm</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
