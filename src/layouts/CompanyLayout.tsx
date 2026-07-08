import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, FileText, Users, DollarSign, Settings, Bell, Mail, Search, LogOut, UserPlus, AlertTriangle } from 'lucide-react';
import avatarImg from '../assets/hi.jpg';

export const CompanyLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/company/dashboard' },
    { name: 'Đăng task', icon: PlusCircle, path: '/company/post-job' },
    { name: 'Task của tôi', icon: FileText, path: '/company/manage-jobs' },
    { name: 'Ứng viên', icon: Users, path: '/company/talents' },
    { name: 'Tài chính', icon: DollarSign, path: '/company/finance' },
    { name: 'Cài đặt', icon: Settings, path: '/company/settings' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#f8fafc] border-r border-slate-200 flex flex-col fixed h-screen z-20">
        
        {/* Logo */}
        <div className="h-20 flex flex-col justify-center px-8 border-b border-slate-100">
          <Link to="/company/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#047857] rounded-lg flex items-center justify-center text-white font-bold text-lg">W</div>
            <span className="text-xl font-bold text-[#047857] tracking-tight">WorkMarket</span>
          </Link>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 ml-10">Corporate Portal</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.path) || 
                             (item.path === '/company/manage-jobs' && location.pathname.includes('/company/workspace'));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive 
                    ? 'bg-emerald-50 text-[#047857] shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-[#047857]' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Bottom */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex justify-between items-center m-4 rounded-2xl shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden shrink-0">
              <img src={avatarImg} alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-bold text-slate-800 truncate">Nguyễn Minh Quân</h4>
              <p className="text-[10px] font-medium text-slate-500 truncate">Premium Account</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="text-slate-400 hover:text-rose-600 transition-colors shrink-0"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-20 bg-[#f8fafc] px-8 flex items-center justify-between sticky top-0 z-10">
          
          {/* Search */}
          <div className="relative w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm nội dung task..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all shadow-sm"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-[#047857] transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-slate-500 hover:text-[#047857] transition-colors">
              <Mail className="h-5 w-5" />
            </button>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <div className="relative">
              <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <div className="text-right hidden sm:block">
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#047857] transition-colors">TechFlow Studio</h4>
                  <p className="text-[10px] font-medium text-slate-500">Project Owner</p>
                </div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm relative shrink-0">
                  <div className="w-6 h-6 bg-slate-100 rounded text-xs flex items-center justify-center font-bold text-slate-500">TF</div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <Link 
                    to="/company/kyb" 
                    className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#047857] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Hồ sơ Công ty
                  </Link>
                  <div className="h-[1px] bg-slate-100 my-1"></div>
                  <button 
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>

        </header>

        {/* Page Content */}
        <div className="flex-1 px-8 pb-10">
          <Outlet />
        </div>

      </main>
    </div>
  );
};
