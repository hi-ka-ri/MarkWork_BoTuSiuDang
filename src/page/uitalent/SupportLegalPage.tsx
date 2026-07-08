import React, { useState } from 'react';
import { FileText, AlertTriangle, Download, HelpCircle, ChevronDown, UploadCloud } from 'lucide-react';

export const SupportLegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Trung tâm Tranh chấp');
  const tabs = ['Trung tâm Tranh chấp', 'Khấu trừ thuế TNCN'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">
            Hỗ trợ & Pháp lý
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-2xl">
            {activeTab === 'Trung tâm Tranh chấp' 
              ? 'Quản lý các khiếu nại liên quan đến dự án và yêu cầu hỗ trợ từ ban quản trị để đảm bảo quyền lợi công bằng cho cả người thuê và người làm.'
              : 'Theo dõi lịch sử khấu trừ thuế thu nhập cá nhân (10%) trên các dự án đã hoàn thành.'}
          </p>
        </div>
        
        {activeTab === 'Khấu trừ thuế TNCN' && (
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 outline-none">
              <option>Năm 2024</option>
              <option>Năm 2023</option>
            </select>
            <button className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
              <Download className="h-4 w-4" />
              Tải báo cáo tổng hợp
            </button>
          </div>
        )}
      </div>

      {/* Tabs Menu */}
      <div className="flex items-center gap-8 border-b border-slate-200 mb-8 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === tab ? 'text-[#047857]' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#047857] rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'Trung tâm Tranh chấp' && (
        <>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-8">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-amber-800 mb-1">Lưu ý: Escrow sẽ bị đóng băng khi mở tranh chấp</h4>
              <p className="text-xs font-medium text-amber-700 leading-relaxed">
                Khi tranh chấp được khởi tạo, số tiền trong tài khoản đảm bảo (Escrow) của dự án này sẽ tạm thời bị khóa cho đến khi có quyết định cuối cùng từ bộ phận giải quyết khiếu nại.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Active Disputes */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800 font-serif">Tranh chấp đang xử lý</h2>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">2 bản ghi</span>
              </div>

              <div className="space-y-4">
                {/* Dispute 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                        <FileText className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">Thiết kế UI/UX App Tài chính - Giai đoạn 2</h3>
                        <p className="text-xs text-slate-500 mt-1">#DISP-49201</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-md whitespace-nowrap">
                      Cần bổ sung
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ngày tạo</p>
                      <p className="text-sm font-medium text-slate-700">14 Th05, 2024</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mốc thanh toán</p>
                      <p className="text-sm font-medium text-slate-700">Milestone 2: Final UI Delivery</p>
                    </div>
                  </div>
                </div>

                {/* Dispute 2 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0 border border-emerald-100">
                        <FileText className="h-5 w-5 text-[#047857]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">Viết nội dung SEO cho Website Du lịch</h3>
                        <p className="text-xs text-slate-500 mt-1">#DISP-48812</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded-md whitespace-nowrap">
                      Đang xử lý
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ngày tạo</p>
                      <p className="text-sm font-medium text-slate-700">08 Th05, 2024</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mốc thanh toán</p>
                      <p className="text-sm font-medium text-slate-700">Toàn bộ dự án</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Dispute Form */}
            <div className="w-full lg:w-[450px] shrink-0">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-800 font-serif mb-6">Mở khiếu nại mới</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Chọn dự án / mốc thanh toán
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] appearance-none cursor-pointer">
                        <option>Chọn dự án cần khiếu nại</option>
                        <option>App Tài chính - Milestone 3</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Mô tả chi tiết nội dung
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Mô tả cụ thể vấn đề bạn gặp phải (tối thiểu 20 ký tự)..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] resize-none"
                    ></textarea>
                    <p className="text-[10px] font-medium text-slate-500 mt-2 italic">Vui lòng cung cấp bằng chứng cụ thể để đẩy nhanh quá trình xử lý.</p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Bằng chứng (Hình ảnh/Tài liệu)
                    </label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#047857] hover:bg-slate-50 transition-colors group">
                      <UploadCloud className="h-6 w-6 text-slate-400 group-hover:text-[#047857] mb-2" />
                      <p className="text-sm font-medium text-slate-600 mb-1">Kéo thả hoặc <span className="font-bold text-[#047857]">Tải lên</span></p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF, JPG, PNG (MAX 10MB)</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <button className="flex-1 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors">
                      Gửi yêu cầu
                    </button>
                    <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Khấu trừ thuế TNCN' && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table */}
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
                      <div className="font-bold text-slate-800">UI/UX Design - Fintech App</div>
                      <div className="text-[10px] text-slate-500 mt-1">Project Milestone 2</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">25.000.000</td>
                    <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">2.500.000</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>02/2024</td>
                    <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-800">Brand Audit - Retail Corp</div>
                      <div className="text-[10px] text-slate-500 mt-1">Lumpsum Payment</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">12.000.000</td>
                    <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">1.200.000</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">Tháng<br/>01/2024</td>
                    <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">8412093455</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-800">Marketing Consultant</div>
                      <div className="text-[10px] text-slate-500 mt-1">Jan Retainer</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">30.000.000</td>
                    <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">3.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Summary */}
          <div className="w-full lg:w-[350px] shrink-0 space-y-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-800 font-serif mb-6">Tóm tắt quyết toán<br/>2024</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-emerald-200/50">
                  <span className="text-sm font-medium text-slate-600">Tổng thu nhập</span>
                  <span className="font-bold text-slate-800">142.500.000 VNĐ</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-emerald-200/50">
                  <span className="text-sm font-medium text-slate-600">Tổng thuế khấu trừ (10%)</span>
                  <span className="font-bold text-red-600">14.250.000 VNĐ</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Thu nhập thực nhận</span>
                <span className="text-2xl font-bold text-[#047857]">128.250.000 VNĐ</span>
              </div>

              <div className="bg-white/60 rounded-xl p-4 text-[11px] font-medium text-emerald-800 italic leading-relaxed">
                * Lưu ý: Đây là số liệu tạm tính dựa trên mức khấu trừ tại nguồn 10%. Vui lòng thực hiện quyết toán thuế cuối năm để được hoàn thuế nếu đủ điều kiện.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                <HelpCircle className="h-5 w-5 text-[#047857]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">Hỗ trợ quyết toán</h4>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">Kết nối với chuyên gia tư vấn thuế của WorkMarket.</p>
                <button className="text-xs font-bold text-[#047857] hover:underline">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
