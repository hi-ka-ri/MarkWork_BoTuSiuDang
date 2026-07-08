import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const GuestLayout: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/guest/home' },
    { name: 'Quy trình', path: '/guest/how-it-works' },
    { name: 'Việc làm', path: '/guest/jobs' },
    { name: 'Chuyên gia', path: '/guest/talent/1' },
    { name: 'Bảo mật', path: '/guest/verification' },
    { name: 'Bảng giá', path: '/guest/pricing' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/guest/jobs" className="flex items-center">
            <span className="text-xl font-bold text-[#047857] tracking-tight">WorkMark</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[13px] font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`${location.pathname === link.path ? 'text-[#047857] border-b-2 border-[#047857] pb-7 pt-7' : 'text-slate-500 hover:text-slate-800 transition-colors'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <Link to="/login" className="text-[13px] font-bold text-slate-600 hover:text-[#047857] transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="px-5 py-2.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm">
              Get Started
            </Link>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#eef2ff] border-t border-indigo-50/50 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div>
              <Link to="/guest/jobs" className="flex items-center mb-2">
                <span className="text-lg font-serif font-bold text-[#047857] tracking-tight">Guest</span>
              </Link>
              <p className="text-[11px] text-slate-500 font-medium">
                © 2024 Guest Professional Warmth Legal Systems. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-[11px] font-bold text-slate-500">
              <Link to="#" className="hover:text-[#047857] transition-colors">Security</Link>
              <Link to="/guest/legal" className="hover:text-[#047857] transition-colors">Terms</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Compliance</Link>
              <Link to="#" className="hover:text-[#047857] transition-colors">Sitemap</Link>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default GuestLayout;
