import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, ChevronDown, Calendar, Clock, Banknote, MoreVertical } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const ManageJobsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 font-serif mb-2">Quản lý Task</h1>
          <p className="text-slate-500 font-medium">Theo dõi và quản lý các công việc đang tuyển dụng và thực hiện.</p>
        </div>
        <Link 
          to="/company/post-job"
          className="px-6 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm shrink-0"
        >
          <Plus className="h-4 w-4" /> Đăng task mới
        </Link>
      </div>

      {/* Filters & Tabs */}
      <div className="flex flex-col xl:flex-row gap-4 justify-between mb-8">
        <div className="flex items-center gap-6 border-b border-slate-200 flex-1 overflow-x-auto hide-scrollbar">
          <button className="pb-3 text-sm font-bold text-[#047857] border-b-2 border-[#047857] whitespace-nowrap">
            Tất cả <span className="ml-1 text-[#047857] font-medium opacity-80">12</span>
          </button>
          <button className="pb-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">
            Đang mở <span className="ml-1 text-slate-400 font-medium">5</span>
          </button>
          <button className="pb-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">
            Đang thực hiện <span className="ml-1 text-slate-400 font-medium">3</span>
          </button>
          <button className="pb-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">
            Đã hoàn thành <span className="ml-1 text-slate-400 font-medium">4</span>
          </button>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 appearance-none focus:outline-none focus:border-[#047857]">
              <option>Loại hình</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 appearance-none focus:outline-none focus:border-[#047857]">
              <option>Sắp xếp</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4 mb-8">
        
        {/* Task 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857]/30 transition-colors flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded">CÔNG NGHỆ</span>
              <span className="text-[11px] font-bold text-slate-400">#WM-8829</span>
              <span className="ml-auto lg:hidden px-3 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#047857] rounded-full"></span> Đang mở
              </span>
            </div>
            <h3 
              onClick={() => navigate('/company/workspace')}
              className="text-lg font-bold text-slate-800 mb-3 hover:text-[#047857] transition-colors cursor-pointer"
            >
              Thiết kế UI/UX App Mobile Quản lý Tài chính cá nhân
            </h3>
            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Đăng: 12/05/2024</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Hạn: 30/05/2024</span>
              <span className="flex items-center gap-1.5 font-bold text-amber-600"><Banknote className="h-4 w-4" /> 15.000.000 VNĐ</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src={avatarImg} className="w-8 h-8 rounded-full border-2 border-white object-cover z-10 relative" alt="User" />
                <img src={avatarImg} className="w-8 h-8 rounded-full border-2 border-white object-cover z-20 relative" alt="User" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 z-30 relative">
                  +8
                </div>
              </div>
              <button 
                onClick={() => navigate('/company/talents')}
                className="px-5 py-2.5 bg-emerald-50 text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-100 transition-colors"
              >
                Xem ứng viên
              </button>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#047857]/30 transition-colors flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-widest rounded">MARKETING</span>
              <span className="text-[11px] font-bold text-slate-400">#WM-8750</span>
              <span className="ml-auto lg:hidden px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Đang thực hiện
              </span>
            </div>
            <h3 
              onClick={() => navigate('/company/workspace')}
              className="text-lg font-bold text-slate-800 mb-3 hover:text-[#047857] transition-colors cursor-pointer"
            >
              Chiến dịch SEO Website & Content Marketing Quý 2
            </h3>
            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Đăng: 01/05/2024</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Hạn: 15/06/2024</span>
              <span className="flex items-center gap-1.5 font-bold text-amber-600"><Banknote className="h-4 w-4" /> 25.500.000 VNĐ</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 border-r border-slate-100 pr-6 relative">
                <div className="absolute -top-8 left-4 px-3 py-1 bg-amber-50 rounded-full flex items-center gap-1.5 shadow-sm border border-amber-100 whitespace-nowrap">
                   <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                   <span className="text-[10px] font-bold text-amber-600">Đang thực hiện</span>
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-50 border-r border-b border-amber-100 rotate-45"></div>
                </div>
                <img src={avatarImg} className="w-10 h-10 rounded-full border border-slate-200 object-cover" alt="User" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Minh Anh Digital</h4>
                  <p className="text-[10px] font-medium text-slate-400">Đang xử lý milestone 2</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/company/workspace')}
                className="px-5 py-2.5 bg-emerald-50 text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-100 transition-colors"
              >
                Chi tiết
              </button>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Task 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm opacity-70 hover:opacity-100 transition-all flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded">VẬN HÀNH</span>
              <span className="text-[11px] font-bold text-slate-400">#WM-8621</span>
              <span className="ml-auto lg:hidden px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Đã đóng
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-400 mb-3">Dịch thuật tài liệu kỹ thuật sang tiếng Anh (50 trang)</h3>
            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Đăng: 20/04/2024</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Hạn: 05/05/2024</span>
              <span className="flex items-center gap-1.5 font-bold"><Banknote className="h-4 w-4" /> 5.000.000 VNĐ</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 relative">
            <div className="absolute -top-10 right-16 px-3 py-1 bg-slate-50 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-200 whitespace-nowrap">
               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
               <span className="text-[10px] font-bold text-slate-500">Đã đóng</span>
               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-50 border-r border-b border-slate-200 rotate-45"></div>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pr-6 border-r border-slate-100">
                Xem lưu trữ
              </button>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <p className="text-sm font-medium text-slate-500">Hiển thị <span className="font-bold text-slate-800">1-3</span> trong số <span className="font-bold text-slate-800">12</span> kết quả</p>
        <div className="flex items-center gap-1.5">
          <button className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-xl text-slate-400 hover:bg-slate-50 transition-colors">
            &lt;
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-[#047857] bg-[#047857] text-white font-bold rounded-xl shadow-sm">
            1
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
            3
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
            ...
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
            &gt;
          </button>
        </div>
      </div>

    </div>
  );
};
