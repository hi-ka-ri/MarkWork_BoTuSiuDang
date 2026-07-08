import React from 'react';
import profileImg from '../../assets/hi.jpg';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, MapPin, Briefcase, Calendar, Star, Heart, 
  Award, ShieldCheck, Zap, ExternalLink, MessageSquare, ChevronRight
} from 'lucide-react';

export const FreelancerProfilePage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] flex-1 pb-24">
      
      {/* Alert Banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-2 text-sm text-blue-700 font-medium">
          <ShieldCheck className="h-4 w-4" />
          <span>Lưu ý: Vì lý do bảo mật, thông tin liên hệ (Số điện thoại, Email) và CCCD của thành viên này được ẩn cho đến khi bạn đăng nhập và gửi lời mời làm việc chính thức.</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="lg:w-2/3 space-y-6">
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col md:flex-row gap-8">
            <div className="relative flex-shrink-0">
              <img 
                src={profileImg} 
                alt="Nguyễn Văn Ánh" 
                className="w-32 h-32 rounded-2xl object-cover shadow-sm border-2 border-white"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#047857] text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Online & Verified">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl font-bold text-slate-800">Nguyễn Văn Ánh</h1>
                    <div className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-[#047857] rounded-md text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Đã xác thực eKYC
                    </div>
                  </div>
                  <h2 className="text-lg font-bold text-slate-600 mb-4">Senior Frontend Developer & UI Architect</h2>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>Hà Nội, Việt Nam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      <span>5+ Năm kinh nghiệm</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#047857]">
                      <Calendar className="h-4 w-4" />
                      <span>Sẵn sàng: Ngay lập tức</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/register" className="px-6 py-2.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-sm transition-colors flex items-center gap-2">
                  Đăng ký để mời ứng tuyển
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link to="/register" className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl transition-colors flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Lưu hồ sơ
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">124</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dự án hoàn thành</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <span className="text-2xl font-bold text-slate-800">4.92</span>
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Điểm đánh giá (50 đánh giá)</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="text-2xl font-bold text-[#047857] mb-1">98%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tỉ lệ hoàn thành</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">&lt;2h</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phản hồi trung bình</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">2021</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Thành viên từ</div>
            </div>
            <div className="bg-[#047857] text-white rounded-xl border border-[#065f46] p-5 shadow-sm text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Giao việc đúng hạn</div>
            </div>
          </div>

          {/* About & Skills */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Giới thiệu bản thân</h3>
            <p className="text-[15px] font-medium text-slate-600 leading-relaxed mb-8">
              Xin chào, tôi là một Frontend Developer với niềm đam mê sâu sắc trong việc tạo ra những trải nghiệm người dùng tinh tế và hiệu quả. Với hơn 5 năm làm việc trong lĩnh vực SaaS và Fintech, tôi tập trung vào việc tối ưu hóa hiệu suất và khả năng mở rộng của ứng dụng. <br/><br/>
              Tôi tin rằng một sản phẩm tốt không chỉ ở mã nguồn sạch mà còn ở sự thấu hiểu hành vi khách hàng. Tôi luôn tìm kiếm các thử thách mới tại các doanh nghiệp coi trọng chất lượng và tư duy đột phá.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Mô hình làm việc</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">Remote</span>
                  <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">Hybrid</span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-lg border border-purple-100">Digital Nomad</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Kỹ năng chuyên môn</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-700">Frontend (React / Next.js)</span>
                      <span className="text-[#047857]">Chuyên gia</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#047857] w-[95%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-700">UI/UX (Figma / Tailwind)</span>
                      <span className="text-[#047857]">Nâng cao</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#047857] w-[85%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Dự án tiêu biểu</h3>
              <a href="#" className="text-sm font-bold text-[#047857] hover:underline flex items-center gap-1">
                Xem tất cả <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group cursor-pointer hover:border-[#047857] transition-colors">
                <div className="h-48 bg-slate-100 overflow-hidden relative border-b border-slate-100">
                  <div className="absolute inset-0 bg-[#047857]/0 group-hover:bg-[#047857]/10 transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#047857] transition-colors">Nexus Trading Dashboard</h4>
                  <p className="text-sm font-medium text-slate-500 mb-4 line-clamp-2">Hệ thống quản lý giao dịch tiền điện tử real-time thời gian thực cho doanh nghiệp.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">REACT</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">TYPESCRIPT</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">TAILWIND</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> Live Demo</span>
                    <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Q3 2023</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group cursor-pointer hover:border-[#047857] transition-colors">
                <div className="h-48 bg-slate-100 overflow-hidden relative border-b border-slate-100">
                  <div className="absolute inset-0 bg-[#047857]/0 group-hover:bg-[#047857]/10 transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#047857] transition-colors">Bloom Health App</h4>
                  <p className="text-sm font-medium text-slate-500 mb-4 line-clamp-2">Ứng dụng di động theo dõi sức khỏe và dinh dưỡng cá nhân hóa bằng AI.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">REACT NATIVE</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">FIREBASE</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 border border-slate-200 rounded">FIGMA</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> Figma Case</span>
                    <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Q1 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assessment */}
          <div className="bg-[#1e293b] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#047857] rounded-full filter blur-[80px] opacity-20 -mr-20 -mt-20"></div>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 rounded-full bg-slate-800/50 border-4 border-[#047857] flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(4,120,87,0.3)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">92%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Match Score</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-xl font-bold">AI Profile Assessment</h3>
                </div>
                <p className="text-[15px] font-medium text-slate-300 leading-relaxed italic mb-4">
                  "Thành viên này sở hữu các kỹ năng chuyên môn phù hợp 92% với tiêu chuẩn nhân sự cấp cao tại các doanh nghiệp Tech Unicorn. Điểm mạnh đặc biệt ở khả năng tối ưu hóa UI và kiến trúc hệ thống ổn định."
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded border border-white/20 text-xs font-bold text-slate-300">Độ tin cậy: Cao</span>
                  <span className="px-3 py-1 bg-white/10 rounded border border-white/20 text-xs font-bold text-slate-300">Kỹ năng Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Đánh giá từ đối tác (12)</h3>
            
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100 font-bold">TN</div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">TechNova Solutions</h5>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-400">2 tháng trước</span>
                </div>
                <p className="text-[14px] font-medium text-slate-600 leading-relaxed italic">
                  "Ánh là một developer có trách nhiệm cao. Anh ấy không chỉ làm theo yêu cầu mà còn đóng góp ý tưởng để cải thiện trải nghiệm người dùng. Chúng tôi rất hài lòng với kết quả của dự án Mobile Banking."
                </p>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-50 text-[#047857] rounded-lg flex items-center justify-center border border-emerald-100 font-bold">VC</div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">V-Creative Lab</h5>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-400">4 tháng trước</span>
                </div>
                <p className="text-[14px] font-medium text-slate-600 leading-relaxed italic">
                  "Tiến độ làm việc cực kỳ nhanh và chuẩn xác. Các mã nguồn của Ánh rất dễ bảo trì và mở rộng. Rất khuyến khích các team outsource hợp tác."
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#047857] rounded-2xl p-10 mt-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Bắt đầu dự án cùng Ánh ngay hôm nay</h2>
              <p className="text-emerald-100 font-medium mb-8 max-w-md mx-auto text-sm">
                Tham gia cộng đồng WorkMark để kết nối với những nhân tài hàng đầu và quản lý công việc một cách chuyên nghiệp nhất.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/register" className="px-6 py-3 bg-white text-[#047857] font-bold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5">
                  Đăng ký ngay
                </Link>
                <Link to="/login" className="px-6 py-3 bg-[#065f46] border border-emerald-700 text-white hover:bg-[#074a37] font-bold rounded-xl shadow-sm transition-colors">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:w-1/3 space-y-6">
          
          {/* Platform Achievements */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Thành tựu Platform</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#047857] flex items-center justify-center border border-emerald-100 flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Top Rated Talent 2023</h4>
                  <p className="text-xs font-medium text-slate-500">Thành viên nằm trong top 3% xuất sắc nhất.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 flex-shrink-0">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">100+ Task Completed</h4>
                  <p className="text-xs font-medium text-slate-500">Đạt cột mốc 100 công việc hoàn thành.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 flex-shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Fast Responder</h4>
                  <p className="text-xs font-medium text-slate-500">Phản hồi trung bình dưới 30 phút.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Chứng chỉ quốc tế</h3>
            <div className="space-y-4">
              <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-4 hover:border-[#047857] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#047857]/10 transition-colors">
                  <div className="w-6 h-1 bg-[#047857] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-[#047857] transition-colors">Professional Cloud Developer</h4>
                  <p className="text-[10px] font-bold text-slate-400">GOOGLE CLOUD — 2022</p>
                </div>
              </div>
              <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-4 hover:border-[#047857] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#047857]/10 transition-colors">
                  <div className="w-6 h-6 border-4 border-[#047857] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-[#047857] transition-colors">AWS Solutions Architect</h4>
                  <p className="text-[10px] font-bold text-slate-400">AMAZON WEB SERVICES — 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
            <h3 className="font-bold text-slate-800 mb-6 border-b border-emerald-200/50 pb-4">An toàn & Tin cậy</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#047857] flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-600 leading-relaxed"><strong className="text-slate-800">eKYC Verified:</strong> Đã xác thực danh tính qua căn cước công dân và sinh trắc học khuôn mặt.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 text-[#047857] flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-600 leading-relaxed"><strong className="text-slate-800">Escrow Protected:</strong> Thanh toán được giữ an toàn bởi WorkMark cho đến khi bạn xác nhận hoàn thành công việc.</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-[#047857] flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-600 leading-relaxed"><strong className="text-slate-800">AI Fraud Detection:</strong> Hệ thống giám sát 24/7 để bảo vệ quyền lợi và dữ liệu của cả hai bên.</p>
              </div>
            </div>
          </div>

          {/* Similar Talents */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Thành viên tương tự</h3>
            <div className="space-y-5 mb-6">
              {[
                { name: 'Lê Tuyết Mai', role: 'Full Stack Developer', initial: 'LM' },
                { name: 'Trần Hoàng Long', role: 'UI/UX Designer', initial: 'TL' },
                { name: 'Đặng Phương Thảo', role: 'Product Manager', initial: 'DT' }
              ].map((talent, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                      {talent.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#047857] transition-colors">{talent.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{talent.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors text-sm">
              Xem thêm chuyên gia
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
