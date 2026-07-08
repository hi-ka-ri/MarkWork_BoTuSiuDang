import React from 'react';
import { 
  Settings, Plus, GripVertical, Trash2, Bold, Italic, Link, List,
  Smartphone, Monitor, ChevronDown, ChevronUp, Search
} from 'lucide-react';

export const FaqEditorPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] -m-6 flex flex-col bg-slate-50">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold rounded-lg text-sm transition-colors">
            Xem trước
          </button>
          <button className="px-5 py-2 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm">
            Xuất bản
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=047857&color=fff" alt="Admin User" />
          </div>
          <div className="text-sm">
            <div className="font-bold text-slate-800">Admin User</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">FINANCE DEPARTMENT</div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Editor Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 bg-white">
          
          {/* Cấu hình trang */}
          <div className="border border-slate-200 rounded-xl p-6 bg-[#f8fafc]">
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm mb-4">
              <Settings className="h-4 w-4 text-slate-500" />
              <span>Cấu hình trang</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Tên trang</label>
                <input 
                  type="text" 
                  defaultValue="Hỗ trợ & FAQ - Doanh nghiệp"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-[15px] font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857] bg-white shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">URL Slug</label>
                <div className="flex rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <span className="bg-slate-50 px-4 py-3 text-slate-500 font-medium text-sm border-r border-slate-200">
                    gigflow.vn/faq/
                  </span>
                  <input 
                    type="text" 
                    defaultValue="enterprise-help"
                    className="flex-1 px-4 py-3 font-bold text-slate-800 text-[15px] focus:outline-none bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Danh sách câu hỏi */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
                <List className="h-4 w-4 text-slate-500" />
                <span>Danh sách câu hỏi (4)</span>
              </div>
              <button className="flex items-center space-x-1.5 text-[#047857] hover:text-[#065f46] font-bold text-sm transition-colors">
                <Plus className="h-4 w-4" />
                <span>Thêm mới</span>
              </button>
            </div>

            <div className="space-y-4">
              
              {/* Question Item 1 */}
              <div className="border border-slate-200 rounded-xl bg-white shadow-sm group">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-[#f8fafc] rounded-t-xl">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <GripVertical className="h-4 w-4 cursor-grab" />
                    <span className="text-xs font-bold font-mono">01</span>
                  </div>
                  <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-4 space-y-4">
                  <input 
                    type="text" 
                    defaultValue="Làm thế nào để xác minh tài khoản doanh nghiệp?"
                    className="w-full font-bold text-slate-800 text-base focus:outline-none placeholder-slate-300"
                    placeholder="Nhập câu hỏi..."
                  />
                  
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-[#f0f4f8] px-3 py-2 flex items-center space-x-1 border-b border-slate-200">
                      <button className="p-1.5 hover:bg-white rounded text-slate-700 font-bold"><Bold className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700 font-serif italic"><Italic className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700"><Link className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700"><List className="h-4 w-4" /></button>
                    </div>
                    <textarea 
                      className="w-full p-4 font-medium text-slate-600 text-sm focus:outline-none min-h-[100px] resize-y"
                      defaultValue="Để xác minh, bạn cần tải lên Giấy phép kinh doanh (GPKD) và ảnh CCCD của người đại diện pháp luật tại mục &#34;Xác minh danh tính&#34;."
                    />
                  </div>
                </div>
              </div>

              {/* Question Item 2 */}
              <div className="border border-slate-200 rounded-xl bg-white shadow-sm group">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-[#f8fafc] rounded-t-xl">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <GripVertical className="h-4 w-4 cursor-grab" />
                    <span className="text-xs font-bold font-mono">02</span>
                  </div>
                  <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-4 space-y-4">
                  <input 
                    type="text" 
                    defaultValue="Hợp đồng Escrow bảo vệ tôi như thế nào?"
                    className="w-full font-bold text-slate-800 text-base focus:outline-none placeholder-slate-300"
                    placeholder="Nhập câu hỏi..."
                  />
                  
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-[#f0f4f8] px-3 py-2 flex items-center space-x-1 border-b border-slate-200">
                      <button className="p-1.5 hover:bg-white rounded text-slate-700 font-bold"><Bold className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700 font-serif italic"><Italic className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700"><Link className="h-4 w-4" /></button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-700"><List className="h-4 w-4" /></button>
                    </div>
                    <textarea 
                      className="w-full p-4 font-medium text-slate-600 text-sm focus:outline-none min-h-[100px] resize-y"
                      defaultValue="Hệ thống Escrow giữ tiền thanh toán từ khi bắt đầu công việc. Tiền chỉ được giải ngân cho worker sau khi doanh nghiệp xác nhận kết quả đạt yêu cầu."
                    />
                  </div>
                </div>
              </div>

              {/* Add New Button */}
              <button className="w-full py-8 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-[#047857] hover:border-[#047857] hover:bg-emerald-50 transition-all flex flex-col items-center justify-center space-y-2">
                <Plus className="h-6 w-6" />
                <span className="font-bold text-sm tracking-widest uppercase">Thêm câu hỏi mới</span>
              </button>

            </div>
          </div>

        </div>

        {/* Right Side: Live Preview (Mobile Mockup) */}
        <div className="w-[450px] bg-slate-50 border-l border-slate-200 flex flex-col flex-shrink-0 z-10">
          
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-white">
            <h3 className="font-bold text-[11px] text-slate-500 tracking-widest uppercase">Xem trước thời gian thực</h3>
            <div className="flex space-x-2">
              <button className="p-1.5 text-[#047857] bg-emerald-50 rounded"><Smartphone className="h-4 w-4" /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded transition-colors"><Monitor className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 flex justify-center items-start bg-[#f1f5f9]">
            
            {/* Mobile Phone Mockup */}
            <div className="w-[320px] h-[650px] bg-[#2d3748] rounded-[2.5rem] p-3 shadow-2xl relative">
              {/* Phone screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#2d3748] rounded-b-xl mx-24 z-20"></div>

                {/* App Content */}
                <div className="flex-1 bg-slate-50 overflow-y-auto pb-8">
                  
                  {/* Header Area */}
                  <div className="bg-[#047857] px-6 pt-12 pb-8 text-white relative">
                    <h2 className="font-bold text-[19px] font-serif mb-2 relative z-10">Trung tâm trợ giúp</h2>
                    <p className="text-[11px] opacity-90 leading-relaxed relative z-10">
                      Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 với các thắc mắc về hệ thống GigFlow.
                    </p>
                    
                    <div className="mt-4 relative z-10">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2.5 flex items-center space-x-2">
                        <Search className="h-4 w-4 text-emerald-100" />
                        <span className="text-xs text-emerald-100">Tìm kiếm vấn đề...</span>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Accordions */}
                  <div className="px-4 -mt-4 relative z-20 space-y-3">
                    
                    {/* Item 1 - Expanded */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                      <div className="px-4 py-3 flex justify-between items-start">
                        <h4 className="font-bold text-[#1e293b] text-[13px] leading-snug">
                          Làm thế nào để xác minh tài khoản doanh nghiệp?
                        </h4>
                        <ChevronUp className="h-4 w-4 text-[#047857] flex-shrink-0 mt-0.5" />
                      </div>
                      <div className="px-4 pb-4 text-[11px] text-slate-500 leading-relaxed font-medium">
                        Để xác minh, bạn cần tải lên Giấy phép kinh doanh (GPKD) và ảnh CCCD của người đại diện pháp luật tại mục "Xác minh danh tính".
                      </div>
                    </div>

                    {/* Item 2 - Collapsed */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="px-4 py-3 flex justify-between items-center">
                        <h4 className="font-bold text-[#1e293b] text-[13px] leading-snug">
                          Hợp đồng Escrow bảo vệ tôi như thế nào?
                        </h4>
                        <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0 ml-2" />
                      </div>
                    </div>

                    {/* Item 3 - Collapsed */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="px-4 py-3 flex justify-between items-center">
                        <h4 className="font-bold text-slate-400 text-[13px] leading-snug">
                          Câu hỏi tiếp theo...
                        </h4>
                        <ChevronDown className="h-4 w-4 text-slate-300 flex-shrink-0 ml-2" />
                      </div>
                    </div>

                    <div className="pt-6 text-center">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">Cần hỗ trợ thêm?</div>
                      <button className="text-[#047857] font-bold text-xs hover:underline">Liên hệ chúng tôi ngay</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="p-4 bg-white border-t border-slate-200 text-center">
            <p className="text-[11px] font-bold text-slate-500">Bản xem trước hiển thị giao diện trên thiết bị di động</p>
          </div>

        </div>
      </div>

    </div>
  );
};
