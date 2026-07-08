import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Lock, Sparkles, GraduationCap, Building2, User,
  CheckCircle2, ArrowRight
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] flex-1">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#f0fdf4] text-[#047857] rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#bbf7d0]">
            Nền tảng làm việc số 1
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1e293b] leading-tight">
            Kết nối Doanh nghiệp với Chuyên gia & Thực tập sinh <span className="text-[#047857]">đã xác thực</span>
          </h1>
          
          <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-lg">
            Nền tảng duy nhất kết hợp 100% tài khoản đã định danh (eKYC/KYB), bảo vệ thanh toán qua ví Escrow, và hệ thống matching AI vượt trội.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2">
              <Building2 className="h-5 w-5" />
              <span>Tìm freelancer</span>
            </Link>
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2">
              <User className="h-5 w-5" />
              <span>Trở thành freelancer</span>
            </Link>
          </div>
        </div>

        {/* Hero Illustration / Banner */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center border-8 border-white">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6 w-full px-12">
              {/* Fake UI elements for Hero */}
              <div className="w-full h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center px-6 gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                <div className="ml-auto h-6 w-16 bg-white/20 rounded-full"></div>
              </div>

              <div className="w-3/4 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center px-6 gap-4 self-end">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Lock className="h-4 w-4 text-blue-400" />
                </div>
                <div className="h-2 w-24 bg-white/20 rounded-full"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e293b]">Tại sao chọn WorkMark?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit mb-6 text-[#047857]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">Xác thực danh tính</h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Loại bỏ rủi ro giả mạo với công nghệ eKYC và KYB cho 100% doanh nghiệp và người làm trên nền tảng.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit mb-6 text-[#047857]">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">Thanh toán Escrow</h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Tiền được ký quỹ an toàn vào tài khoản trung gian, đảm bảo thanh toán sòng phẳng 100% khi dự án hoàn tất.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit mb-6 text-[#047857]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">Tuyển dụng AI</h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Hệ thống AI tự động phân tích kỹ năng và đánh giá mức độ phù hợp giữa dự án và chuyên gia một cách chuẩn xác.
              </p>
            </div>

            <div className="bg-[#0f342b] border border-[#047857] p-8 rounded-2xl text-white">
              <div className="p-3 bg-white/10 rounded-xl shadow-sm w-fit mb-6 text-emerald-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">Mô hình Internship</h3>
              <p className="text-sm font-medium text-emerald-100/70 leading-relaxed">
                Nơi duy nhất kết nối sinh viên với các dự án thực tế có mentor từ các tập đoàn lớn, mở rộng cơ hội việc làm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Steps */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#1e293b] mb-16">Quy trình 5 bước đơn giản</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
          
          {[
            { id: 1, title: 'Tạo tài khoản', desc: 'Đăng ký nhanh chóng' },
            { id: 2, title: 'Xác thực định danh', desc: 'Xác minh eKYC/KYB' },
            { id: 3, title: 'Đăng / Nhận việc', desc: 'Đăng task hoặc Apply' },
            { id: 4, title: 'Thực hiện & Nghiệm thu', desc: 'Ký quỹ và làm việc' },
            { id: 5, title: 'Nhận thanh toán', desc: 'Tiền được giải ngân' }
          ].map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 w-full md:w-48 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#047857] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">
                {step.id}
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">{step.title}</h4>
              <p className="text-xs font-medium text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Cards */}
      <div className="bg-[#f0f9ff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* For Business */}
            <div className="flex-1 bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase border border-blue-100 mb-8">
                  Dành cho Doanh nghiệp
                </div>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#047857] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-[15px] mb-1">AI Candidate Matching</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">Tìm được đúng người cho đúng việc chỉ trong vài giây, tiết kiệm thời gian lọc CV.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#047857] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-[15px] mb-1">Internship Ecosystem</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">Tiếp cận nguồn sinh viên thực tập chất lượng từ các trường đại học hàng đầu.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#047857] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-[15px] mb-1">Comprehensive Dashboard</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">Quản lý toàn bộ tiến độ công việc, chi phí, và bảo mật với một giao diện duy nhất.</p>
                    </div>
                  </li>
                </ul>
                
                <Link to="/register" className="inline-flex items-center space-x-2 text-[#047857] font-bold hover:text-[#065f46]">
                  <span>Đăng ký Doanh nghiệp</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* For Freelancers */}
            <div className="flex-1 bg-[#1e293b] rounded-[2rem] p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-32 h-32 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-800 text-emerald-400 rounded-full text-[10px] font-bold tracking-widest uppercase border border-slate-700 mb-8">
                  Dành cho Người làm
                </div>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-[15px] mb-1">AI Resume Builder</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">Xây dựng hồ sơ số được tối ưu hóa bởi AI để thu hút các nhà tuyển dụng hàng đầu.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-[15px] mb-1">Secured Workplace</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">Mọi thanh toán đều được đảm bảo thông qua Escrow. Không lo bị bùng tiền.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-[15px] mb-1">Mentorship & Certificate</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">Nhận chứng chỉ kinh nghiệm thực tế sau khi hoàn thành dự án xuất sắc.</p>
                    </div>
                  </li>
                </ul>
                
                <Link to="/register" className="inline-flex items-center space-x-2 text-emerald-400 font-bold hover:text-emerald-300">
                  <span>Trở thành Chuyên gia</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Tiêu chuẩn bảo mật hàng đầu</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-800 text-[15px] mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#047857]" /> AI Fraud Detection
                </h4>
                <p className="text-sm font-medium text-slate-500">Phát hiện gian lận bằng AI, bảo vệ nền tảng 24/7</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[15px] mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#047857]" /> Audit Logs
                </h4>
                <p className="text-sm font-medium text-slate-500">Lưu lại mọi thao tác quan trọng để đối soát khi cần thiết</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[15px] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#047857]" /> 100% Compliance
                </h4>
                <p className="text-sm font-medium text-slate-500">Tuân thủ tiêu chuẩn an toàn thông tin quốc tế ISO 27001</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center gap-4 flex-wrap">
            <div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-400">eKYC Verified</div>
            <div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-400">Escrow Protected</div>
            <div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-400">ISO 27001 Certified</div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e293b]">Trải nghiệm từ cộng đồng WorkMark</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-4 left-6 text-6xl text-slate-100 font-serif">"</span>
              <p className="text-sm text-slate-600 font-medium leading-relaxed italic relative z-10 mb-6 mt-4">
                "WorkMark giúp chúng tôi tìm được các ứng viên chất lượng cực nhanh, có độ tin cậy tuyệt đối. Tính năng Escrow khiến chúng tôi cực kỳ an tâm."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">Phạm Thị Lan</h5>
                  <p className="text-xs text-slate-500 font-medium">HR Manager, TechNova</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-4 left-6 text-6xl text-slate-100 font-serif">"</span>
              <p className="text-sm text-slate-600 font-medium leading-relaxed italic relative z-10 mb-6 mt-4">
                "Hệ thống Escrow là cứu cánh của mình! Từ khi dùng WorkMark, mình không bao giờ sợ bị bùng tiền công nữa. Quá tuyệt vời!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">Lê Quốc Tuấn</h5>
                  <p className="text-xs text-slate-500 font-medium">Senior Backend Dev</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-4 left-6 text-6xl text-slate-100 font-serif">"</span>
              <p className="text-sm text-slate-600 font-medium leading-relaxed italic relative z-10 mb-6 mt-4">
                "Kỳ thực tập trên WorkMark đã giúp mình có được CV cực xịn với dự án thực tế. Tính năng đánh giá profile AI cũng rất chính xác."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">Nguyễn Châu Trinh</h5>
                  <p className="text-xs text-slate-500 font-medium">Marketing Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="bg-[#1e293b] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng kiến tạo tương lai sự nghiệp?</h2>
          <p className="text-slate-400 font-medium text-lg mb-10 max-w-xl mx-auto">
            Gia nhập cộng đồng WorkMark ngay hôm nay để trải nghiệm môi trường làm việc số minh bạch, an toàn và hiệu quả.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center">
              Tạo tài khoản miễn phí
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-600 text-white hover:border-slate-400 font-bold rounded-xl transition-all flex items-center justify-center">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
