import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShieldCheck, UserCheck, Scale, AlertTriangle, 
  Wallet, FileText, FileCode, History, Settings, LogOut, ChevronDown,
  Users, Building2, Banknote, ReceiptText, HelpCircle, LayoutTemplate,
  ShieldAlert, Calculator
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mảng trạng thái mở cho từng dropdown menu
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const menuItems = [
    { name: 'Bảng điều khiển', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Xác thực', icon: ShieldCheck, path: '/admin/verification' },
    { 
      name: 'Tài khoản', 
      icon: UserCheck, 
      id: 'accounts',
      subItems: [
        { name: 'Quản lý người dùng', path: '/admin/accounts/users', icon: Users },
        { name: 'Quản lý doanh nghiệp', path: '/admin/accounts/businesses', icon: Building2 },
      ]
    },
    { name: 'Tranh chấp', icon: Scale, path: '/admin/disputes' },
    { name: 'Phát hiện Bypass', icon: AlertTriangle, path: '/admin/bypass' },
    { 
      name: 'Tài chính', 
      icon: Wallet, 
      id: 'finance',
      subItems: [
        { name: 'Quản lý quỹ', path: '/admin/finance/funds', icon: Banknote },
        { name: 'Giao dịch & Hóa đơn', path: '/admin/finance', icon: ReceiptText },
        { name: 'Cấu hình phí', path: '/admin/finance/fees', icon: Settings },
      ]
    },
    { name: 'Hợp đồng', icon: FileText, path: '/admin/contracts' },
    { 
      name: 'Nội dung', 
      icon: FileCode, 
      id: 'content',
      subItems: [
        { name: 'Quản lý Trang tĩnh', path: '/admin/content/pages', icon: FileText },
        { name: 'Trung tâm trợ giúp', path: '/admin/content/faq', icon: HelpCircle },
        { name: 'Banner & Quảng cáo', path: '/admin/content/banners', icon: LayoutTemplate }
      ]
    },
    { name: 'Nhật ký hệ thống', icon: History, path: '/admin/logs' },
    { 
      name: 'Cài đặt', 
      icon: Settings, 
      id: 'settings',
      subItems: [
        { name: 'Engine chống Bypass', path: '/admin/settings/bypass', icon: ShieldAlert },
        { name: 'Cấu hình Thuế TNCN', path: '/admin/settings/tax', icon: Calculator }
      ]
    },
  ];

  // Tự động mở menu nếu đang ở trang con
  useEffect(() => {
    const newOpenMenus = { ...openMenus };
    menuItems.forEach(item => {
      if (item.subItems) {
        const isActive = item.subItems.some(sub => location.pathname === sub.path || location.pathname.startsWith(sub.path + '/'));
        if (isActive) {
          newOpenMenus[item.id] = true;
        }
      }
    });
    setOpenMenus(newOpenMenus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleMenu = (id: string) => {
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-64 bg-[#1e293b] text-slate-300 min-h-screen flex flex-col justify-between border-r border-slate-700/50 shrink-0 select-none">
      <div>
        {/* Logo Header */}
        <div className="p-6">
          <h1 className="text-xl font-bold text-white tracking-wide">WorkMark</h1>
          <p className="text-xs text-emerald-400 mt-0.5">Enterprise Security</p>
        </div>

        {/* Navigation List */}
        <nav className="mt-4 px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            if (item.subItems) {
              const isOpen = openMenus[item.id] || false;
              const isAnySubActive = item.subItems.some(sub => {
                if (sub.path === '/admin/finance' && location.pathname !== '/admin/finance') return false;
                return location.pathname === sub.path || location.pathname.startsWith(sub.path + '/');
              });
              
              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isAnySubActive 
                        ? 'bg-slate-800 text-white' 
                        : 'hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 ${isAnySubActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`pl-4 pr-1 overflow-hidden transition-all duration-300 space-y-1 ${
                    isOpen ? 'max-h-32 opacity-100 py-1' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    {item.subItems.map(sub => {
                      const SubIcon = sub.icon;
                      const isActiveSub = sub.path === '/admin/finance' 
                        ? location.pathname === '/admin/finance'
                        : (location.pathname === sub.path || location.pathname.startsWith(sub.path + '/'));
                      
                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                            isActiveSub
                              ? 'bg-[#047857] text-white shadow-sm'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <SubIcon className="h-4 w-4" />
                          <span>{sub.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#047857] text-white shadow-md shadow-emerald-900/20' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Nút Đăng xuất */}
      <div className="p-4 border-t border-slate-700/50">
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-red-950/30 hover:text-red-400 transition-all"
        >
          <LogOut className="h-5 w-5" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;