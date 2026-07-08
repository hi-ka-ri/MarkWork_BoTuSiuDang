import React from 'react';
import { 
  FileText, Shield, FileCheck, Cookie, Info
} from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] flex-1">
      
      {/* Page Header */}
      <div className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">Điều khoản dịch vụ</h1>
          <p className="text-sm font-medium text-slate-500">Cập nhật lần cuối: 25/10/2023</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden sticky top-28">
            <div className="p-6 bg-[#f0f9ff] border-b border-indigo-50/50">
              <h3 className="font-bold text-[#047857] text-lg mb-1">Legal Documentation</h3>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Last updated Oct 2023</p>
            </div>
            
            <div className="p-2 space-y-1">
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <Info className="h-4 w-4" />
                <span>Introduction</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-[13px] font-bold text-[#047857] bg-[#eef2ff] rounded-lg transition-colors">
                <FileText className="h-4 w-4" />
                <span>Terms of Service</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <FileCheck className="h-4 w-4" />
                <span>Business Licenses</span>
              </button>

              <button className="w-full flex items-center space-x-3 px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <Cookie className="h-4 w-4" />
                <span>Cookie Policy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-16 shadow-sm">
            
            <div className="prose prose-slate max-w-none space-y-12">
              
              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-6">1. Định nghĩa</h2>
                <div className="space-y-4 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Chào mừng bạn đến với Guest. Các thuật ngữ sau đây được sử dụng xuyên suốt thỏa thuận này:</p>
                  <p><strong>"Guest", "chúng tôi", hoặc "của chúng tôi"</strong> để cập đến Hệ thống Pháp lý Chuyên nghiệp Guest, nền tảng cung cấp các giải pháp kết nối tài năng và doanh nghiệp hàng đầu.</p>
                  <p><strong>"Người dùng"</strong> để cập đến bất kỳ cá nhân hoặc tổ chức nào truy cập hoặc sử dụng Dịch vụ, bao gồm cả Doanh nghiệp tuyển dụng và Chuyên gia độc lập.</p>
                  <p><strong>"Dịch vụ"</strong> bao gồm tất cả các trang web, ứng dụng, công cụ và tính năng được cung cấp dưới thương hiệu Guest.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-6">2. Quyền và nghĩa vụ</h2>
                <div className="space-y-6 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Bằng cách sử dụng Dịch vụ của chúng tôi, bạn cam kết rằng bạn đủ năng lực hành vi dân sự và đồng ý tuân thủ các quy tắc ứng xử chuyên nghiệp được quy định bởi Guest.</p>
                  
                  <div className="pl-6 border-l-2 border-slate-200 space-y-4">
                    <p><strong>Nghĩa vụ của Chuyên gia:</strong> Cung cấp thông tin hồ sơ trung thực, cập nhật kỹ năng chính xác và duy trì tính bảo mật cho các dự án của khách hàng.</p>
                    <p><strong>Quyền của Doanh nghiệp:</strong> Được truy cập vào mạng lưới tài năng cao cấp, sử dụng các công cụ quản lý quy trình và nhận hỗ trợ từ đội ngũ vận hành Guest.</p>
                    <p><strong>Hành vi nghiêm cấm:</strong> Nghiêm cấm mọi hành vi gian lận thông tin, sử dụng trái phép dữ liệu người dùng khác hoặc cố tình gây gián đoạn hoạt động của hệ thống.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-6">3. Bảo mật thông tin</h2>
                <div className="space-y-4 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Chúng tôi coi trọng sự riêng tư của bạn. Dữ liệu cá nhân và thông tin doanh nghiệp được bảo vệ bằng các tiêu chuẩn mã hóa cao nhất hiện nay.</p>
                  <p>Guest cam kết không chia sẻ thông tin định danh của bạn cho bên thứ ba khi chưa có sự đồng ý rõ ràng, ngoại trừ các trường hợp được quy định cụ thể trong Chính sách Quyền riêng tư hoặc theo yêu cầu của cơ quan pháp luật có thẩm quyền.</p>
                  <p>Người dùng có trách nhiệm tự bảo vệ thông tin đăng nhập cá nhân. Guest không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc sơ suất để lộ mật khẩu từ phía người dùng.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl font-serif font-bold text-slate-800 mb-6">4. Sở hữu trí tuệ</h2>
                <div className="space-y-4 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Tất cả nội dung, nhãn hiệu, logo và mã nguồn cấu thành nên nền tảng Guest đều là tài sản thuộc sở hữu độc quyền của chúng tôi hoặc các đối tác cấp phép. Bạn không được sao chép, sửa đổi hoặc phân phối bất kỳ phần nào của Dịch vụ mà không có văn bản chấp thuận chính thức.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl font-serif font-bold text-slate-800 mb-6">5. Giới hạn trách nhiệm</h2>
                <div className="space-y-4 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Guest nỗ lực duy trì hệ thống hoạt động ổn định 24/7. Tuy nhiên, chúng tôi không bảo đảm rằng Dịch vụ sẽ luôn không có lỗi hoặc không bao giờ bị gián đoạn do các yếu tố kỹ thuật khách quan hoặc sự cố hạ tầng internet toàn cầu.</p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl font-serif font-bold text-slate-800 mb-6">6. Thay đổi điều khoản</h2>
                <div className="space-y-4 text-[14px] text-slate-600 font-medium leading-relaxed">
                  <p>Chúng tôi có quyền cập nhật các điều khoản này vào bất kỳ lúc nào để phù hợp với sự thay đổi của pháp luật hoặc cập nhật tính năng mới. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang web.</p>
                </div>
              </section>

            </div>

            {/* Bottom Actions */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[13px] font-bold text-slate-500">
                Bạn có thắc mắc về điều khoản này?
              </p>
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2.5 bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 font-bold rounded-lg text-sm transition-colors shadow-sm">
                  Tải bản PDF
                </button>
                <button className="px-6 py-2.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm">
                  Liên hệ hỗ trợ
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
