import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ChevronDown, Check, ArrowRight
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] flex-1">
      
      {/* Hero Section */}
      <div className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
          Bảng giá minh bạch — không phí ẩn
        </h1>
        <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
          Mô hình chi phí được thiết kế tối ưu, giúp Doanh nghiệp và Chuyên gia đều tối đa hóa lợi nhuận trong mỗi dự án.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-12 pb-24">
        
        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Income Tax */}
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-[360px]">
            <div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-4">MỨC KHẤU TRỪ THUẾ TNCN</div>
              <div className="flex items-baseline mb-6">
                <span className="text-6xl font-bold text-slate-800 tracking-tight">10</span>
                <span className="text-2xl font-bold text-slate-500 ml-1">%</span>
                <span className="text-sm font-medium text-slate-400 ml-2">/ giao dịch</span>
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-[280px]">
                Thuế thu nhập cá nhân trích lại theo luật định khi Chuyên gia đạt ngưỡng thu nhập <span className="font-bold text-slate-800">2.000.000 VNĐ</span>.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#047857] mr-3" />
                Chứng từ thuế (PIT) được cung cấp tự động
              </div>
              <div className="flex items-center text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#047857] mr-3" />
                Chỉ tính khi rút tiền về tài khoản ngân hàng
              </div>
              <div className="flex items-center text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#047857] mr-3" />
                Nền tảng miễn hoàn toàn phí xử lý hóa đơn
              </div>
            </div>
          </div>

          {/* Card 2: Platform Fee */}
          <div className="bg-[#047857] rounded-3xl p-10 shadow-xl relative overflow-hidden text-white flex flex-col justify-between h-[360px]">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="text-[10px] font-bold text-emerald-100 tracking-widest uppercase mb-4">PHÍ NỀN TẢNG & GIAO DỊCH</div>
              <div className="flex items-baseline mb-6">
                <span className="text-6xl font-bold tracking-tight text-white">0</span>
                <span className="text-3xl font-bold text-emerald-100 ml-1">%</span>
              </div>
              <p className="font-bold text-lg mb-4">Không thu phí trích phần trăm từ doanh thu dự án</p>
              <p className="text-emerald-100 font-medium text-sm leading-relaxed max-w-sm">
                Bất kể giá trị dự án là bao nhiêu, Chuyên gia sẽ nhận được 100% thù lao sau khi đã khấu trừ thuế TNCN. Guest cam kết đồng hành cùng sự thành công của bạn.
              </p>
            </div>
          </div>
          
        </div>

        {/* Calculation Example & Small Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Ví dụ minh họa</h3>
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Calculator Visual */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                
                <div className="flex justify-between items-center py-4 border-b border-slate-200 border-dashed">
                  <span className="text-sm font-bold text-slate-500 uppercase">Ngân sách từ Doanh nghiệp</span>
                  <span className="font-mono font-bold text-slate-800">10.000.000 VNĐ</span>
                </div>
                
                <div className="flex justify-between items-center py-4 border-b border-slate-200 border-dashed">
                  <span className="text-sm font-bold text-slate-500 uppercase">Doanh thu nhận được</span>
                  <span className="font-mono font-bold text-slate-800">10.000.000 VNĐ</span>
                </div>
                
                <div className="flex justify-between items-center py-4">
                  <span className="text-sm font-bold text-rose-500 uppercase">Thuế thu nhập (10%)</span>
                  <span className="font-mono font-bold text-rose-500">- 1.000.000 VNĐ</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-300">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-800">Thực nhận sau thuế:</span>
                    <span className="text-xl font-mono font-bold text-[#047857]">9.000.000 VNĐ</span>
                  </div>
                </div>

              </div>
              
              <p className="mt-6 text-[12px] font-medium text-slate-500 leading-relaxed italic text-center">
                Ghi chú: Số tiền thuế sẽ được giải ngân và nộp lại cho kho bạc nhà nước. Chuyên gia có thể sử dụng biên lai thuế thu nhập để làm thủ tục hoàn thuế định kỳ vào cuối năm.
              </p>
            </div>

            {/* Sub Cards */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                
                {/* Conversion Fee */}
                <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex flex-col h-full">
                  <h4 className="font-bold text-slate-800 mb-2">Phí chuyển đổi tuyển dụng chính thức (Conversion Fee)</h4>
                  <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">
                    Chỉ phát sinh khi Doanh nghiệp muốn tuyển dụng chính thức Freelancer độc quyền qua nền tảng vào biên chế.
                  </p>
                  <div className="mt-auto bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
                    <div className="text-[10px] font-bold text-indigo-500 uppercase mb-1">MỨC PHÍ</div>
                    <div className="font-bold text-slate-800 text-sm">Bằng 20% mức lương tháng đầu tiên của nhân sự</div>
                  </div>
                </div>

                {/* No hidden fees */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 flex flex-col h-full">
                  <h4 className="font-bold text-slate-800 mb-6">Không có phí ẩn</h4>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm font-bold text-slate-700 bg-white px-3 py-2.5 rounded-lg shadow-sm border border-emerald-50">
                      <Check className="h-4 w-4 text-[#047857] mr-3" />
                      Không giới hạn gửi Proposal / Báo giá
                    </div>
                    <div className="flex items-center text-sm font-bold text-slate-700 bg-white px-3 py-2.5 rounded-lg shadow-sm border border-emerald-50">
                      <Check className="h-4 w-4 text-[#047857] mr-3" />
                      Không phí nạp tiền hoặc rút tiền (VND)
                    </div>
                    <div className="flex items-center text-sm font-bold text-slate-700 bg-white px-3 py-2.5 rounded-lg shadow-sm border border-emerald-50">
                      <Check className="h-4 w-4 text-[#047857] mr-3" />
                      Không phí duy trì tài khoản Escrow
                    </div>
                  </div>
                </div>

              </div>
              
            </div>

          </div>
        </div>

        {/* Warning Alert */}
        <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-2xl p-4 flex items-center space-x-4 shadow-sm">
          <div className="bg-amber-400 text-white p-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider flex-shrink-0">
            CẢNH BÁO
          </div>
          <p className="text-xs font-bold text-amber-900 leading-relaxed">
            Các giao dịch ngoài nền tảng sẽ không được hệ thống bảo vệ quyền lợi, và tỷ lệ lừa đảo cao. Hệ thống AI Bypass Engine sẽ tự động khóa tài khoản vi phạm.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="pt-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">So sánh với thị trường</h3>
          
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-6 px-8 text-sm font-bold text-slate-800 w-1/3">Tính năng</th>
                  <th className="py-6 px-8 text-sm font-bold text-[#047857] w-1/3 bg-emerald-50/30">WorkMark</th>
                  <th className="py-6 px-8 text-sm font-bold text-slate-500 w-1/3">Nền tảng khác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-5 px-8 text-sm font-bold text-slate-600">Chiết khấu phí</td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-800 bg-emerald-50/30">0% (chỉ trích thuế nộp nhà nước theo quy định)</td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">Thường từ 10% đến 20% doanh thu dự án</td>
                </tr>
                <tr>
                  <td className="py-5 px-8 text-sm font-bold text-slate-600">Xác minh danh tính (eKYC)</td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-800 bg-emerald-50/30">100% người dùng (Cá nhân & Doanh nghiệp) bắt buộc</td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">Thường chỉ yêu cầu email hoặc số điện thoại, không có độ tin cậy</td>
                </tr>
                <tr>
                  <td className="py-5 px-8 text-sm font-bold text-slate-600">Ký quỹ (Escrow)</td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-800 bg-emerald-50/30">Có, 100% giao dịch thanh toán phải qua Escrow</td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">Chỉ một số nền tảng hỗ trợ, đa phần tự thỏa thuận rủi ro cao</td>
                </tr>
                <tr>
                  <td className="py-5 px-8 text-sm font-bold text-slate-600">Xử lý tranh chấp</td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-800 bg-emerald-50/30">Tự động hóa với thuật toán và Ban quản trị</td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">Quy trình thủ công, kéo dài, thường thiệt thòi cho người làm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">Câu hỏi thường gặp</h3>
          
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors">
              <span className="font-bold text-slate-700 text-sm">Ai là người chịu trách nhiệm về thuế thu nhập cá nhân?</span>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors">
              <span className="font-bold text-slate-700 text-sm">Thuế này sẽ nộp lên kho bạc nhà nước dưới tên của ai?</span>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors">
              <span className="font-bold text-slate-700 text-sm">Nếu dự án thất bại, số tiền thuế tạm thu sẽ xử lý thế nào?</span>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors">
              <span className="font-bold text-slate-700 text-sm">Hợp đồng trên nền tảng có giá trị pháp lý ra tòa không?</span>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#e2e8f0] rounded-3xl p-12 text-center border border-slate-300/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Sẵn sàng tối ưu chi phí vận hành?</h2>
          <Link to="/register" className="px-8 py-3.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 flex items-center space-x-2 mx-auto w-fit">
            <span>Tạo tài khoản doanh nghiệp</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>

    </div>
  );
};
