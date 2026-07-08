import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, Banknote, Lock, ChevronRight, ChevronLeft,
  Sparkles, TrendingUp
} from 'lucide-react';

import uiuxImg from '../../assets/hi.jpg'; // We can reuse some local image or place a generic background

const TalentDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tổng quan');

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      
      {/* Welcome Banner */}
      <div className="bg-[#047857] rounded-2xl p-8 text-white mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Chào mừng, Nguyễn Văn A!</h1>
          <p className="text-emerald-100 font-medium mb-6">
            Bạn đang thực hiện rất tốt. Chỉ còn một vài bước nữa để hồ sơ của bạn đạt trạng thái hoàn hảo.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-emerald-100">Hồ sơ: 95%</span>
            <div className="w-64 h-2 bg-emerald-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-300 w-[95%] rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 shrink-0">
          <Link to="/talent/profile" className="px-6 py-3 bg-white text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-sm inline-block">
            Nâng cấp hồ sơ
          </Link>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 mb-8">
        {['Tổng quan', 'Tài chính'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold transition-colors relative ${
              activeTab === tab ? 'text-[#047857]' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#047857] rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'Tổng quan' ? (
        <>
          {/* Financial Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tổng thu nhập</h3>
            <Wallet className="h-5 w-5 text-[#047857]" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-slate-800">45,000,000</span>
            <span className="text-sm font-bold text-slate-500 ml-1">VNĐ</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#047857] mt-auto">
            <TrendingUp className="h-4 w-4" />
            <span>+12% tháng này</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Số dư khả dụng</h3>
            <Banknote className="h-5 w-5 text-[#047857]" />
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-slate-800">12,450,000</span>
            <span className="text-sm font-bold text-slate-500 ml-1">VNĐ</span>
          </div>
          <button className="w-full py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors mt-auto">
            Rút tiền
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Đang đóng băng</h3>
            <Lock className="h-5 w-5 text-slate-400" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-slate-800">5,000,000</span>
            <span className="text-sm font-bold text-slate-500 ml-1">VNĐ</span>
          </div>
          <div className="text-xs font-medium text-slate-500 mt-auto flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-[9px]">i</span>
            Dự kiến mở khóa sau 3 ngày
          </div>
        </div>
      </div>

      {/* Active Jobs */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">Công việc đang thực hiện</h2>
          <Link to="/talent/workspace" className="text-sm font-bold text-[#047857] hover:underline">
            Xem tất cả
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Job 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-slate-400">TN</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Thiết kế UI/UX Mobile App</h3>
                  <p className="text-sm font-medium text-slate-500">TechNova Solutions</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-[#047857] text-xs font-bold rounded-full whitespace-nowrap">Đang làm</span>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-500">Tiến độ dự án</span>
                <span className="text-slate-800">65%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#047857] w-[65%] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-slate-500">Hạn chót: 25 Th12, 2024</span>
              <Link to="/talent/workspace" className="text-sm font-bold text-[#047857] hover:underline">Chi tiết</Link>
            </div>
          </div>

          {/* Job 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-slate-400">CF</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-800 group-hover:text-[#047857] transition-colors">Viết nội dung Blog Branding</h3>
                  <p className="text-sm font-medium text-slate-500">CreativeFlow Agency</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full whitespace-nowrap">Chờ duyệt</span>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-500">Tiến độ dự án</span>
                <span className="text-slate-800">100%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 w-[100%] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-slate-500">Đã nộp: 1 giờ trước</span>
              <Link to="/talent/workspace" className="text-sm font-bold text-[#047857] hover:underline">Xem bài nộp</Link>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Đề xuất từ AI cho bạn</h2>
          <div className="px-2 py-0.5 bg-[#047857] rounded flex items-center gap-1 text-[10px] font-bold text-white uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            AI
          </div>
        </div>

        <div className="relative">
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-[#047857] shadow-sm z-10 hidden md:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-[#047857] shadow-sm z-10 hidden md:flex">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="grid md:grid-cols-4 gap-6">
            
            {/* AI Rec 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="h-32 bg-slate-100 relative">
                <img src={uiuxImg} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#047857] uppercase tracking-wider">
                  PHÙ HỢP 98%
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">Product Designer</h3>
                <p className="text-xs font-medium text-slate-500 mb-4">Mức lương: $2,500 - $4,000</p>
                <div className="flex gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Figma</span>
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Remote</span>
                </div>
                <Link to="/talent/jobs/1/apply" className="block w-full py-2.5 text-center bg-transparent border-2 border-[#047857] text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                  Ứng tuyển
                </Link>
              </div>
            </div>

            {/* AI Rec 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="h-32 bg-slate-100 relative">
                <img src={uiuxImg} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#047857] uppercase tracking-wider">
                  PHÙ HỢP 92%
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">Senior React Dev</h3>
                <p className="text-xs font-medium text-slate-500 mb-4">Mức lương: $3,000 - $5,500</p>
                <div className="flex gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">React</span>
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Full-time</span>
                </div>
                <Link to="/talent/jobs/1/apply" className="block w-full py-2.5 text-center bg-transparent border-2 border-[#047857] text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                  Ứng tuyển
                </Link>
              </div>
            </div>

            {/* AI Rec 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="h-32 bg-slate-100 relative">
                <img src={uiuxImg} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#047857] uppercase tracking-wider">
                  PHÙ HỢP 89%
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">Technical Writer</h3>
                <p className="text-xs font-medium text-slate-500 mb-4">Mức lương: $1,200 - $2,000</p>
                <div className="flex gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Writing</span>
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Freelance</span>
                </div>
                <Link to="/talent/jobs/1/apply" className="block w-full py-2.5 text-center bg-transparent border-2 border-[#047857] text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                  Ứng tuyển
                </Link>
              </div>
            </div>

            {/* AI Rec 4 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hidden lg:block">
              <div className="h-32 bg-slate-100 relative">
                <img src={uiuxImg} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#047857] uppercase tracking-wider">
                  PHÙ HỢP 85%
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">Marketing Lead</h3>
                <p className="text-xs font-medium text-slate-500 mb-4">Mức lương: $2,000 - $3,500</p>
                <div className="flex gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Strategy</span>
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Remote</span>
                </div>
                <Link to="/talent/jobs/1/apply" className="block w-full py-2.5 text-center bg-transparent border-2 border-[#047857] text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                  Ứng tuyển
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
      ) : (
        <>
          {/* Detailed Financial View from TalentFinancePage */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tổng thu nhập</h3>
                <Wallet className="h-5 w-5 text-[#047857]" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#047857]">đ142.500.000</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#047857] mt-auto">
                <TrendingUp className="h-4 w-4" />
                <span>+12% so với tháng trước</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Khả dụng</h3>
                <Banknote className="h-5 w-5 text-[#047857]" />
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-800">đ32.450.000</span>
              </div>
              <button className="w-full py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors mt-auto shadow-sm">
                Rút tiền
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Đang tạm giữ</h3>
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-800">đ18.000.000</span>
              </div>
              <div className="text-xs font-medium text-slate-500 mt-auto leading-relaxed">
                Khoản thanh toán đang chờ nghiệm thu hoặc trong thời gian ký quỹ.
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-800">Lịch sử giao dịch</h2>
              <div className="flex items-center gap-3">
                <input type="date" className="pl-4 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-[#047857] w-40" />
                <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-[#047857] w-44">
                  <option>Tất cả trạng thái</option>
                  <option>DISBURSED</option>
                  <option>HELD</option>
                  <option>PROCESSING</option>
                </select>
                <button className="px-5 py-2.5 bg-white border border-slate-200 text-[#047857] font-bold rounded-lg hover:bg-slate-50 transition-colors">
                  Áp dụng
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Mã giao dịch</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Thời gian</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mô tả</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Số tiền</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84920</td>
                    <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">24/05/2024, 14:30</td>
                    <td className="py-4 px-6 font-medium text-slate-700">Thanh toán Milestone 2: Thiết kế UI Dashboard</td>
                    <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">+đ12.500.000</td>
                    <td className="py-4 px-6 text-right whitespace-nowrap"><span className="inline-flex items-center justify-center px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-wider rounded-md">DISBURSED</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84811</td>
                    <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">22/05/2024, 09:15</td>
                    <td className="py-4 px-6 font-medium text-slate-700">Ký quỹ Dự án App Mobile E-commerce</td>
                    <td className="py-4 px-6 font-bold text-slate-800 text-right whitespace-nowrap">+đ8.000.000</td>
                    <td className="py-4 px-6 text-right whitespace-nowrap"><span className="inline-flex items-center justify-center px-2.5 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-wider rounded-md">HELD</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">#WM-84755</td>
                    <td className="py-4 px-6 font-medium text-slate-500 whitespace-nowrap">20/05/2024, 16:45</td>
                    <td className="py-4 px-6 font-medium text-slate-700">Rút tiền về tài khoản Techcombank (*4421)</td>
                    <td className="py-4 px-6 font-bold text-red-600 text-right whitespace-nowrap">-đ15.000.000</td>
                    <td className="py-4 px-6 text-right whitespace-nowrap"><span className="inline-flex items-center justify-center px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">PROCESSING</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Hiển thị 1-10 trên 45 giao dịch</p>
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#047857] bg-[#047857] rounded-lg text-white font-bold text-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default TalentDashboardPage;
