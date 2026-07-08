import React from 'react';
import { 
  Zap, ShieldAlert, X, Code, AlertCircle, Save
} from 'lucide-react';

export const BypassSettingsPage: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-6 pb-24 relative">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-[#1e293b] mb-6">
          Cấu hình Engine chống Bypass
        </h1>
      </div>

      {/* Info Card */}
      <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-xl p-6 flex items-start space-x-4">
        <div className="p-3 bg-[#e0f2fe] text-[#0369a1] rounded-lg">
          <Zap className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-[#0369a1] text-[15px] mb-2">Cảnh báo hệ thống thời gian thực</h3>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            Các thay đổi tại đây sẽ trực tiếp ảnh hưởng đến độ nhạy của AI trong việc phát hiện các giao dịch hoặc thanh toán ngoài nền tảng trong thời gian thực. Hãy cân nhắc kỹ trước khi thay đổi mức độ bảo mật.
          </p>
        </div>
      </div>

      {/* Sensitivity Level Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <div className="flex items-center space-x-2 text-[#047857] font-bold text-lg mb-8">
          <ShieldAlert className="h-5 w-5" />
          <h2>Độ nhạy phát hiện</h2>
        </div>

        {/* Slider Simulation */}
        <div className="px-4 mb-10 relative">
          <div className="h-2 bg-[#e2e8f0] rounded-full absolute left-4 right-4 top-1/2 -translate-y-1/2"></div>
          {/* Active Track */}
          <div className="h-2 bg-[#047857] rounded-full absolute left-4 right-1/2 top-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between relative z-10">
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
            <div className="w-5 h-5 bg-[#047857] rounded-full cursor-pointer shadow-md border-2 border-white relative -mt-0.5 hover:scale-110 transition-transform"></div>
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
          </div>

          <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase mt-4">
            <span className="w-1/4 text-left">Thấp</span>
            <span className="w-1/4 text-center text-slate-800">Trung bình</span>
            <span className="w-1/4 text-center">Cao</span>
            <span className="w-1/4 text-right">Rất cao</span>
          </div>
        </div>

        {/* Descriptions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-transparent">
            <h4 className="font-bold text-slate-500 mb-2">Thấp</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">Chỉ lọc những trường hợp lộ liễu nhất. Phù hợp cho môi trường tin cậy cao.</p>
          </div>
          <div className="p-4 rounded-xl border border-[#047857] bg-emerald-50/50">
            <h4 className="font-bold text-[#047857] mb-2">Trung bình</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">Cân bằng giữa bảo mật và trải nghiệm người dùng. Khuyên dùng cho hầu hết trường hợp.</p>
          </div>
          <div className="p-4 rounded-xl border border-transparent">
            <h4 className="font-bold text-slate-500 mb-2">Cao</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">Mức cao có thể dẫn đến nhiều cảnh báo giả hơn nhưng bảo mật tối đa cho hệ thống.</p>
          </div>
          <div className="p-4 rounded-xl border border-transparent">
            <h4 className="font-bold text-slate-500 mb-2">Rất cao</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">Quét chuyên sâu tất cả các pattern ẩn. Yêu cầu kiểm duyệt thủ công liên tục.</p>
          </div>
        </div>

      </div>

      {/* Keywords & Patterns Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <div className="flex items-center space-x-2 text-[#047857] font-bold text-lg mb-4">
          <Code className="h-5 w-5" />
          <h2>Danh sách từ khóa & Pattern</h2>
        </div>
        
        <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
          Các từ khóa và định dạng số điện thoại sẽ bị Engine quét và gắn cờ ngay lập tức khi xuất hiện trong khung chat hoặc mô tả công việc.
        </p>

        {/* Tags Box */}
        <div className="border border-slate-200 rounded-xl p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            {['Zalo', '090*', '03*', 'chuyển khoản', 'bank', 'số điện thoại', 'facebook'].map((tag) => (
              <div key={tag} className="flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold group cursor-default">
                <span>{tag}</span>
                <button className="text-slate-400 hover:text-rose-500 transition-colors">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Input */}
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Thêm từ khóa hoặc pattern mới (VD: telegram, 08*...)"
            className="flex-1 px-4 py-3.5 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:outline-none focus:border-[#047857] bg-white"
          />
          <button className="px-8 py-3.5 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold rounded-xl text-[15px] transition-colors">
            Thêm
          </button>
        </div>
      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] z-50 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#047857] text-sm font-medium">
            <AlertCircle className="h-5 w-5" />
            <span>Cấu hình sẽ có hiệu lực ngay lập tức sau khi lưu.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 bg-white text-slate-600 hover:text-slate-800 font-bold rounded-lg text-sm transition-colors">
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
