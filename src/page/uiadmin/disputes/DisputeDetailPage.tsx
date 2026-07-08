import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Sparkles, MessageSquare, FileText, 
  Video, FileSpreadsheet, Lock, Check, AlertTriangle, 
  ArrowRightLeft, FileArchive
} from 'lucide-react';

export const DisputeDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/admin/disputes');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={handleBack}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-[#047857]">#{id || 'CLM-82910'}</h1>
            <span className="px-2.5 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wide">
              ĐANG XEM XÉT
            </span>
          </div>
          <p className="text-sm text-slate-600 font-medium mt-1 flex items-center space-x-2">
            <span>Vinamilk Corp</span>
            <ArrowRightLeft className="h-3 w-3 text-slate-400" />
            <span>Trần Anh Khoa</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content (Left Column) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* AI Alert Card */}
          <div className="bg-[#fdf2f8] border border-[#fbcfe8] p-5 rounded-xl flex items-start space-x-4">
            <div className="p-2 bg-[#fce7f3] text-[#be185d] rounded-lg flex-shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#be185d] mb-1.5">Cảnh báo hệ thống AI</h3>
              <p className="text-sm text-[#9f1239] leading-relaxed font-medium">
                Phát hiện dấu hiệu bất thường: Tỷ lệ trùng lặp nội dung báo cáo milestone 3 đạt 85% so với dữ liệu nguồn mở. Nghi ngờ worker sử dụng công cụ tạo nội dung tự động không qua chỉnh sửa.
              </p>
            </div>
          </div>

          {/* Lịch sử trao đổi */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center space-x-3 text-slate-800">
                <MessageSquare className="h-5 w-5 text-[#047857]" />
                <h3 className="text-lg font-bold">Lịch sử trao đổi</h3>
              </div>
              <span className="text-sm font-medium text-slate-500">32 tin nhắn • 2 file đính kèm</span>
            </div>

            <div className="space-y-6">
              {/* Message 1: Client */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-bold text-slate-800 text-sm">Vinamilk Corp (HR)</span>
                  <span className="text-[11px] font-medium text-slate-500">10:24, 12/10/2023</span>
                </div>
                <div className="bg-[#f1f5f9] text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm text-[13.5px] leading-relaxed max-w-[85%] font-medium">
                  Chúng tôi từ chối thanh toán milestone 3 vì chất lượng code không đạt yêu cầu. Các module xử lý ảnh bị leak memory và không chạy được trên môi trường staging của chúng tôi.
                </div>
              </div>

              {/* Message 2: Worker */}
              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[11px] font-medium text-slate-500">10:35, 12/10/2023</span>
                  <span className="font-bold text-[#047857] text-sm">Trần Anh Khoa</span>
                </div>
                <div className="bg-[#047857] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-[13.5px] leading-relaxed max-w-[85%] font-medium">
                  Tôi đã test kỹ trên local và Docker container. Vấn đề memory leak là do cấu hình server staging của bên công ty không giới hạn tài nguyên. Tôi đã gửi video demo vận hành bình thường.
                </div>
              </div>

              {/* System Divider */}
              <div className="flex items-center justify-center py-2">
                <div className="px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200">
                  Tranh chấp được mở bởi Worker
                </div>
              </div>

              {/* Message 3: Client */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-bold text-slate-800 text-sm">Vinamilk Corp (Tech Lead)</span>
                  <span className="text-[11px] font-medium text-slate-500">14:20, 12/10/2023</span>
                </div>
                <div className="bg-[#f1f5f9] text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm text-[13.5px] leading-relaxed max-w-[85%] font-medium">
                  Video demo không chứng minh được code tối ưu. Chúng tôi đã gửi báo cáo benchmark kèm theo. Yêu cầu hoàn trả 50% phí milestone này để chúng tôi thuê bên thứ 3 fix lỗi.
                </div>
              </div>
            </div>
          </div>

          {/* File đã nộp */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 text-slate-800 border-b border-slate-100 pb-4 mb-6">
              <FileArchive className="h-5 w-5 text-[#047857]" />
              <h3 className="text-lg font-bold">File đã nộp</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <FileText className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-800 truncate mb-1">Contract_GigFlow_VNM.pdf</h4>
                <p className="text-[11px] text-slate-500 font-medium">2.4 MB • HỢP ĐỒNG</p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Video className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-800 truncate mb-1">Demo_Staging_Success.mp4</h4>
                <p className="text-[11px] text-slate-500 font-medium">45.0 MB • VIDEO</p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-800 truncate mb-1">Benchmark_Report.xlsx</h4>
                <p className="text-[11px] text-slate-500 font-medium">1.2 MB • DỮ LIỆU</p>
              </div>

            </div>
          </div>

          {/* Tiến trình Milestone */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between text-slate-800 border-b border-slate-100 pb-4 mb-8">
              <h3 className="text-lg font-bold flex items-center space-x-3">
                <span className="text-[#047857]">⚲</span> {/* placeholder icon */}
                <span>Tiến trình Milestone</span>
              </h3>
            </div>
            
            <div className="relative px-4">
              {/* Line */}
              <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-10"></div>

              <div className="grid grid-cols-4 gap-4 text-center">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#047857] text-white flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">UI Design</h4>
                  <div className="text-xs font-bold text-[#047857] mt-0.5">8,000,000 đ</div>
                  <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">ĐÃ THANH TOÁN</div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#047857] text-white flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Frontend API</h4>
                  <div className="text-xs font-bold text-[#047857] mt-0.5">10,000,000 đ</div>
                  <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">ĐÃ THANH TOÁN</div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-[#b45309] text-white flex items-center justify-center mb-3 border-4 border-white shadow-sm relative -top-1">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#b45309]">Video Engine</h4>
                  <div className="text-xs font-bold text-[#b45309] mt-0.5">6,500,000 đ</div>
                  <div className="text-[10px] font-bold text-[#b45309] mt-1 uppercase tracking-wider">TRANH CHẤP</div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-400">Bảo trì</h4>
                  <div className="text-xs font-bold text-slate-400 mt-0.5">0 đ</div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">CHƯA MỞ</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Sidebar Action (Right Column) */}
        <div className="space-y-6">
          
          {/* Action Box */}
          <div className="bg-[#2a303c] rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <div className="p-6 border-b border-slate-700/50">
              <h2 className="text-xl font-bold text-white tracking-wide">Quyết định</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-600 bg-slate-800/50 cursor-pointer hover:bg-slate-700 transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-500 flex-shrink-0"></div>
                  <span className="text-sm text-slate-200 font-medium">Hoàn tiền cho Doanh nghiệp</span>
                </label>
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-600 bg-slate-800/50 cursor-pointer hover:bg-slate-700 transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-500 flex-shrink-0"></div>
                  <span className="text-sm text-slate-200 font-medium">Thanh toán cho Worker</span>
                </label>
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-600 bg-slate-800/50 cursor-pointer hover:bg-slate-700 transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-500 flex-shrink-0"></div>
                  <span className="text-sm text-slate-200 font-medium">Chia tỷ lệ (%)</span>
                </label>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">Lý do quyết định</label>
                <textarea 
                  rows={4} 
                  placeholder="Nhập căn cứ pháp lý và phân tích bằng chứng..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#047857] resize-none"
                ></textarea>
              </div>

              <label className="flex items-start space-x-3 cursor-pointer group">
                <div className="w-5 h-5 border-2 border-slate-500 rounded mt-0.5 flex-shrink-0 group-hover:border-slate-400 transition-colors"></div>
                <span className="text-xs text-slate-400 font-medium leading-relaxed">
                  Tôi xác nhận đã xem xét đầy đủ bằng chứng và chịu trách nhiệm về quyết định này.
                </span>
              </label>

              <div className="pt-2">
                <button className="w-full bg-[#047857] text-white rounded-lg py-3.5 font-bold text-sm hover:bg-[#065f46] transition-colors shadow-[0_0_15px_rgba(4,120,87,0.3)]">
                  Xác nhận quyết định
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-3 leading-relaxed">
                  Quyết định này sẽ thực hiện lệnh giải tỏa quỹ<br/>Escrow ngay lập tức.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-center">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Thời gian chờ</h4>
              <p className="text-xl font-bold text-[#047857]">18h <span className="text-lg">42m</span></p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-center">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Độ ưu tiên</h4>
              <p className="text-xl font-bold text-rose-600 uppercase tracking-widest">CAO</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
