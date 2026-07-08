import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import avatarImg from '../assets/hi.jpg';

const TalentLayout: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Bảng điều khiển', path: '/talent/dashboard' },
    { name: 'Tìm việc', path: '/talent/jobs' },
    { name: 'Việc đã lưu', path: '/talent/saved-jobs' },
    { name: 'Workspace', path: '/talent/workspace' },
    { name: 'Hỗ trợ & Pháp lý', path: '/talent/support-legal' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/talent/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-[#047857] tracking-tight">WorkMarket</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-[13px] font-bold">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`${
                    location.pathname.startsWith(link.path) 
                      ? 'text-[#047857] border-b-2 border-[#047857] pb-5 pt-5' 
                      : 'text-slate-500 hover:text-slate-800 transition-colors py-5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            <Link to="/talent/notifications" className="p-2 text-slate-500 hover:text-[#047857] hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Link>
            
            <Link to="/talent/profile" className="w-8 h-8 rounded-full border-2 border-slate-200 overflow-hidden hover:border-[#047857] transition-colors">
              <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
            </Link>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#f8fafc] border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div>
              <span className="text-sm font-bold text-slate-800 tracking-tight">WorkMarket</span>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                © 2024 WorkMarket. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-[11px] font-bold text-slate-500">
              <Link to="#" className="hover:text-[#047857] transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Help Center</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Contact Us</Link>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default TalentLayout;
