import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, User, ShieldCheck, Wallet, RefreshCcw, Rocket, CheckSquare, FileText, ArrowRight
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const businessSteps = [
    { title: 'Đăng ký & xác thực KYB', desc: 'Tạo tài khoản doanh nghiệp và hoàn tất xác thực thông tin pháp lý (Know Your Business) để bắt đầu sử dụng.' },
    { title: 'Nạp ký quỹ escrow', desc: 'Nạp ngân sách dự án vào tài khoản ký quỹ an toàn. Tiền chỉ được giải ngân khi bạn hài lòng với kết quả.' },
    { title: 'Đăng task', desc: 'Mô tả công việc chi tiết, yêu cầu kỹ năng và ngân sách dự kiến để thu hút nhân tài phù hợp nhất.' },
    { title: 'Duyệt ứng viên', desc: 'Xem hồ sơ ứng viên, lịch sử làm việc và đánh giá từ cộng đồng để chọn ra chuyên gia tối ưu.' },
    { title: 'Giám sát tiến độ', desc: 'Theo dõi quá trình thực hiện thông qua công cụ quản lý tích hợp trên nền tảng WorkMark theo thời gian thực.' },
    { title: 'Nghiệm thu & giải ngân', desc: 'Xác nhận hoàn thành task. Hệ thống sẽ tự động giải ngân tiền từ Escrow cho người thực hiện.' }
  ];

  const talentSteps = [
    { title: 'Đăng ký & xác thực eKYC', desc: 'Xác thực danh tính điện tử nhanh chóng để đảm bảo tính minh bạch và uy tín trong cộng đồng.' },
    { title: 'Xây dựng hồ sơ', desc: 'Cập nhật kỹ năng, kinh nghiệm và portfolio dự án thực tế để làm nổi bật hồ sơ của bản thân.' },
    { title: 'Ứng tuyển', desc: 'Tìm kiếm và apply vào các task phù hợp với chuyên môn. Tự động đề xuất việc phù hợp.' },
    { title: 'Ký NDA điện tử', desc: 'Bảo vệ quyền lợi đôi bên bằng việc ký kết thỏa thuận bảo mật trực tuyến ngay trên nền tảng.' },
    { title: 'Làm việc qua nền tảng', desc: 'Trao đổi và bàn giao sản phẩm thông qua hệ thống quản lý tập trung của WorkMark.' },
    { title: 'Nhận thanh toán đảm bảo', desc: 'Nhận tiền ngay khi nghiệm thu. WorkMark đảm bảo thanh toán sòng phẳng cho mọi đóng góp của bạn.' }
  ];

  return (
    <div className="bg-[#f8fafc] flex-1">
      
      {/* Header */}
      <div className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quy trình minh bạch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
          Nền tảng hoạt động như thế nào?
        </h1>
        <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
          WorkMark kết nối doanh nghiệp với nhân tài hàng đầu thông qua quy trình bảo mật nghiêm ngặt và cơ chế ký quỹ Escrow an toàn tuyệt đối.
        </p>
      </div>

      {/* Side by side steps */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Vertical Divider for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-px bg-slate-200 -translate-x-1/2"></div>

          {/* Business Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2.5 bg-[#047857] text-white rounded-xl">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Dành cho Doanh nghiệp</h2>
            </div>

            <div className="space-y-8 relative">
              {/* Connector line for mobile */}
              <div className="lg:hidden absolute left-[19px] top-6 bottom-6 w-px bg-slate-200 z-0"></div>
              
              {businessSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative z-10 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#047857] bg-white flex items-center justify-center font-bold text-sm text-[#047857] group-hover:bg-[#047857] group-hover:text-white transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Talent Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2.5 bg-[#e2e8f0] text-slate-700 rounded-xl">
                <User className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Dành cho Người làm</h2>
            </div>

            <div className="space-y-8 relative">
              {/* Connector line for mobile */}
              <div className="lg:hidden absolute left-[19px] top-6 bottom-6 w-px bg-slate-200 z-0"></div>
              
              {talentSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative z-10 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-indigo-200 bg-white flex items-center justify-center font-bold text-sm text-indigo-500 group-hover:border-indigo-500 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Escrow Mechanism */}
      <div className="bg-[#f0f9ff] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Cơ chế Ký quỹ Escrow</h2>
            <p className="text-slate-600 font-medium">Dòng tiền luôn được bảo vệ an toàn cho đến khi giao dịch hoàn tất.</p>
          </div>

          {/* Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative">
            
            {/* Arrows background */}
            <div className="hidden md:flex absolute top-1/2 left-24 right-24 h-0.5 -translate-y-1/2 items-center justify-between z-0">
              <div className="w-1/2 border-t-2 border-dashed border-slate-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-400">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
              <div className="w-1/2 border-t-2 border-dashed border-slate-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-slate-400">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Entity 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full md:w-56 text-center relative z-10">
              <div className="w-12 h-12 bg-emerald-50 text-[#047857] rounded-xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 mb-1">Doanh nghiệp</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nạp quỹ</p>
            </div>

            {/* Escrow Core */}
            <div className="bg-[#047857] p-8 rounded-3xl shadow-xl w-full md:w-72 text-center relative z-10 border-[6px] border-white ring-1 ring-slate-100 transform md:-translate-y-4">
              <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Tài khoản trung gian</h4>
              <p className="text-xs font-medium text-emerald-100/90 leading-relaxed">Tiền được khóa an toàn, chỉ được giải ngân khi dự án hoàn thành.</p>
            </div>

            {/* Entity 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full md:w-56 text-center relative z-10">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <User className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 mb-1">Người làm</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nhận tiền</p>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-[#047857]" /> An tâm tuyển dụng
              </h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">Doanh nghiệp chỉ thanh toán khi sản phẩm đúng cam kết. Không còn lo ngại bị bỏ dở dự án.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-[#047857]" /> Đảm bảo thu nhập
              </h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">Người làm yên tâm bắt tay vào công việc khi biết ngân sách đã được khóa trong hệ thống ký quỹ.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#047857]" /> Pháp lý minh bạch
              </h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">Mọi giao dịch đều có hóa đơn và hợp đồng điện tử đi kèm, tuân thủ tiêu chuẩn kế toán quốc tế.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1e293b] mb-12">Sẵn sàng bắt đầu hành trình của bạn?</h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/register" className="flex-1 bg-[#047857] rounded-3xl p-10 text-white hover:bg-[#065f46] transition-colors border-2 border-transparent hover:scale-[1.02] transform duration-300">
            <Rocket className="h-10 w-10 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Tôi là Doanh nghiệp</h3>
            <p className="text-sm text-emerald-100 font-medium">Tìm kiếm nhân tài và bắt đầu dự án ngay</p>
          </Link>
          
          <Link to="/register" className="flex-1 bg-white rounded-3xl p-10 text-slate-800 border-2 border-slate-200 hover:border-[#047857] transition-all hover:scale-[1.02] transform duration-300">
            <RefreshCcw className="h-10 w-10 mx-auto mb-4 text-[#047857]" />
            <h3 className="text-xl font-bold mb-2">Tôi là Người làm</h3>
            <p className="text-sm text-slate-500 font-medium">Gia nhập đội ngũ tinh hoa và nhận việc ngay</p>
          </Link>
        </div>
      </div>

    </div>
  );
};
