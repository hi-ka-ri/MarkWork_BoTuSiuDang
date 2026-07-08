import React from 'react';
import { 
  Scale, ShieldCheck, Calculator, Save, Info
} from 'lucide-react';

export const TaxSettingsPage: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-6 pb-24 relative">
      
      {/* Header text */}
      <div className="mb-8">
        <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
          Thiết lập các tham số tính toán thuế thu nhập cá nhân cho các giao dịch vãng lai và hợp đồng dịch vụ.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Fixed Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Card 1: Legal Basis */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 text-[#047857] font-bold text-lg mb-4">
              <Scale className="h-5 w-5" />
              <h2>Cơ sở pháp lý</h2>
            </div>
            <p className="text-sm font-bold text-slate-600 leading-relaxed">
              Căn cứ Thông tư 111/2013/TT-BTC, tổ chức trả thu nhập cho cá nhân cư trú không ký hợp đồng lao động hoặc ký hợp đồng lao động dưới 03 tháng có tổng mức trả thu nhập từ 2.000.000 đồng/lần trở lên thì phải khấu trừ thuế theo mức 10% trên thu nhập trước khi trả cho cá nhân.
            </p>
          </div>

          {/* Card 2: Security & Audit */}
          <div className="bg-[#e2e8f0] border border-slate-300/50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 text-[#047857] font-bold text-lg mb-6">
              <ShieldCheck className="h-5 w-5" />
              <h2>Bảo mật & Kiểm soát</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#047857] flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-700 leading-relaxed">Mọi thay đổi sẽ được lưu nhật ký hệ thống (Audit Log).</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#047857] flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-700 leading-relaxed">Áp dụng ngay lập tức cho các yêu cầu thanh toán mới.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Tax Parameters Form */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col">
          
          <h2 className="text-2xl font-serif font-bold text-[#1e293b] mb-8 pb-6 border-b border-slate-100">
            Tham số khấu trừ
          </h2>
          
          <div className="space-y-8 flex-1">
            
            {/* Input 1: Mức khấu trừ */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Mức khấu trừ (%) <span className="text-rose-500">*</span>
              </label>
              <div className="relative mb-3">
                <input 
                  type="text" 
                  defaultValue="10"
                  className="w-full pl-4 pr-12 py-3 border border-slate-200 rounded-xl text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-lg">%</span>
              </div>
              <p className="text-[13px] font-medium text-slate-500 italic leading-relaxed">
                Tỷ lệ phần trăm thuế thu nhập cá nhân được trích lại trực tiếp từ thù lao của người lao động trước khi thực hiện thanh toán qua Escrow.
              </p>
            </div>

            {/* Input 2: Ngưỡng thu nhập */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Ngưỡng thu nhập miễn khấu trừ (VNĐ) <span className="text-rose-500">*</span>
              </label>
              <div className="relative mb-3">
                <input 
                  type="text" 
                  defaultValue="2,000,000"
                  className="w-full pl-4 pr-16 py-3 border border-slate-200 rounded-xl text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white font-mono"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">VNĐ</span>
              </div>
              <p className="text-[13px] font-medium text-slate-500 italic leading-relaxed">
                Mức thu nhập tối thiểu để bắt đầu áp dụng khấu trừ thuế. Dưới mức này, hệ thống sẽ không thực hiện trích thu thuế TNCN.
              </p>
            </div>

            {/* Formula Card */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-5 flex items-start space-x-4 mt-8">
              <div className="p-2.5 bg-[#e2e8f0] text-[#047857] rounded-lg flex-shrink-0">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[13px] mb-1.5">Công thức tính dự kiến:</h4>
                <div className="font-mono text-sm font-bold text-[#047857]">
                  Nếu Thu nhập &gt;= 2,000,000 VNĐ → Thuế = Thu nhập × 10%
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] z-50 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium">
            <Info className="h-4 w-4" />
            <span>Lần cập nhật cuối: 14:30 - 22/10/2023 bởi Admin01</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-lg text-sm transition-colors shadow-sm">
              Hủy thay đổi
            </button>
            <button className="px-6 py-2.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Lưu cấu hình</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
