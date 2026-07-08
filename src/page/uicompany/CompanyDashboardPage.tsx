import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckSquare, Users, Wallet, CheckCircle, Eye, ArrowRight } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const CompanyDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      
      {/* Welcome Banner */}
      <div className="bg-[#047857] rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute right-40 -bottom-20 w-48 h-48 bg-emerald-900/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white mb-2 font-serif">Chào mừng trở lại, Công ty ABC!</h1>
          <p className="text-emerald-100 font-medium">Hôm nay bạn có 5 ứng viên mới đang chờ phỏng vấn.</p>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-full md:w-auto min-w-[280px]">
          <div className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest mb-1 flex items-center justify-between">
            <span>SỐ DƯ HIỆN TẠI</span>
            <Wallet className="h-4 w-4 opacity-50" />
          </div>
          <div className="text-3xl font-bold text-white flex items-end gap-2">
            50.000.000 <span className="text-lg text-emerald-200">VNĐ</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-[#047857]">
              <CheckSquare className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p className="text-xs font-bold text-slate-500 mb-1">Task đang mở</p>
          <h3 className="text-2xl font-bold text-slate-800">24</h3>
        </div>

        {/* Stat 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+5</span>
          </div>
          <p className="text-xs font-bold text-slate-500 mb-1">Ứng viên chờ</p>
          <h3 className="text-2xl font-bold text-slate-800">18</h3>
        </div>

        {/* Stat 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
              <Wallet className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-slate-400">Milestone</span>
          </div>
          <p className="text-xs font-bold text-slate-500 mb-1">Đã giải ngân</p>
          <h3 className="text-2xl font-bold text-slate-800">125.0M</h3>
        </div>

        {/* Stat 4 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">3 Pending</span>
          </div>
          <p className="text-xs font-bold text-slate-500 mb-1">Chờ duyệt</p>
          <h3 className="text-2xl font-bold text-slate-800">7</h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Task đang mở */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800 font-serif">Task đang mở</h2>
            <Link to="/company/manage-jobs" className="text-sm font-bold text-[#047857] hover:underline flex items-center gap-1">
              Tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {/* Task Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857]/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">Thiết kế UI/UX App Fintech</h3>
                  <p className="text-sm font-medium text-slate-500">Sản phẩm ví điện tử thế hệ mới cho giới trẻ.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded-md">ACTIVE</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 items-end">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Ứng viên</p>
                  <div className="flex -space-x-2">
                    <img src={avatarImg} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Avatar" />
                    <img src={avatarImg} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Avatar" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      12+
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hạn nộp</p>
                  <p className="text-sm font-bold text-slate-700">20/10/2023</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ngân sách</p>
                  <div className="flex items-center justify-end gap-4">
                    <p className="text-base font-bold text-[#047857]">15.000.000đ</p>
                    <button 
                      onClick={() => navigate('/company/workspace')}
                      className="px-5 py-2 bg-[#047857] text-white font-bold text-sm rounded-lg hover:bg-[#065f46] transition-colors shadow-sm"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857]/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">Content Marketing chiến dịch Q4</h3>
                  <p className="text-sm font-medium text-slate-500">Lên kế hoạch và triển khai nội dung Social Media.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded-md">ACTIVE</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 items-end">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Ứng viên</p>
                  <div className="flex -space-x-2">
                    <img src={avatarImg} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Avatar" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      8+
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hạn nộp</p>
                  <p className="text-sm font-bold text-slate-700">15/10/2023</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ngân sách</p>
                  <div className="flex items-center justify-end gap-4">
                    <p className="text-base font-bold text-[#047857]">8.500.000đ</p>
                    <button 
                      onClick={() => navigate('/company/workspace')}
                      className="px-5 py-2 bg-[#047857] text-white font-bold text-sm rounded-lg hover:bg-[#065f46] transition-colors shadow-sm"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Ứng viên mới nhất */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800 font-serif">Ứng viên mới nhất</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            
            <div className="p-5 border-b border-slate-100 flex items-start gap-4 hover:bg-slate-50 transition-colors group">
              <img src={avatarImg} className="w-12 h-12 rounded-full object-cover" alt="Candidate" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Nguyễn Mai Anh</h4>
                  <button className="text-slate-400 hover:text-[#047857] transition-colors"><Eye className="h-4 w-4" /></button>
                </div>
                <p className="text-xs font-medium text-slate-500 mb-2.5">Senior UI Designer • 5 năm kn</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">Figma</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">React</span>
                </div>
              </div>
            </div>

            <div className="p-5 border-b border-slate-100 flex items-start gap-4 hover:bg-slate-50 transition-colors group">
              <img src={avatarImg} className="w-12 h-12 rounded-full object-cover" alt="Candidate" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Trần Hoàng Nam</h4>
                  <button className="text-slate-400 hover:text-[#047857] transition-colors"><Eye className="h-4 w-4" /></button>
                </div>
                <p className="text-xs font-medium text-slate-500 mb-2.5">Fullstack Developer • 3 năm kn</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">NodeJS</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">AWS</span>
                </div>
              </div>
            </div>

            <div className="p-5 border-b border-slate-100 flex items-start gap-4 hover:bg-slate-50 transition-colors group">
              <img src={avatarImg} className="w-12 h-12 rounded-full object-cover" alt="Candidate" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Lê Kim Liên</h4>
                  <button className="text-slate-400 hover:text-[#047857] transition-colors"><Eye className="h-4 w-4" /></button>
                </div>
                <p className="text-xs font-medium text-slate-500 mb-2.5">Marketing Specialist • 4 năm kn</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">SEO</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] border border-emerald-100 text-[10px] font-bold rounded">Ads</span>
                </div>
              </div>
            </div>

            <Link to="/company/talents" className="block text-center py-4 text-sm font-bold text-slate-600 hover:text-[#047857] hover:bg-slate-50 transition-colors">
              Xem tất cả ứng viên
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};
