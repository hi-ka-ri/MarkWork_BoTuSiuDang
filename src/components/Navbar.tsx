import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, X, User, Settings, LogOut, ShieldAlert } from 'lucide-react';

const Navbar: React.FC = () => {
  // Quản lý trạng thái đóng/mở của các menu dropdown
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<HTMLDivElement>(null);

  // Danh sách thông báo mẫu liên kết với dữ liệu hệ thống
  const notificationList = [
    { id: 1, title: 'Phát hiện Bypass hệ thống!', desc: 'Tài khoản @bot_checker quét API bất thường.', type: 'danger', time: '10 phút trước' },
    { id: 2, title: 'Xác thực KYC tồn đọng', desc: 'Có 12 yêu cầu doanh nghiệp chưa xử lý.', type: 'warning', time: '48 giờ qua' },
  ];

  // Logic click ra ngoài menu thì tự động đóng menu lại
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notifyRef.current && !notifyRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between relative z-40">
      
      {/* 1. THANH TÌM KIẾM (CÓ NÚT XÓA NHANH) */}
      <div className="relative w-96">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm mã hợp đồng, tài khoản, nhật ký..."
          className="w-full bg-slate-50 border border-slate-200 pl-10 pr-10 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 transition-all"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* CỤM CHỨC NĂNG BÊN PHẢI */}
      <div className="flex items-center space-x-6">
        
        {/* 2. NÚT THÔNG BÁO VÀ HỘP THOẠI POPUP */}
        <div className="relative" ref={notifyRef}>
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className={`relative p-2 rounded-xl transition-all ${showNotifications ? 'bg-slate-100 text-emerald-600' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Hộp thoại danh sách thông báo khi click vào chuông */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-slate-50 flex justify-between items-center">
                <span className="font-bold text-slate-800 text-sm">Thông báo bảo mật</span>
                <span className="text-[10px] font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">Ưu tiên</span>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-slate-50">
                {notificationList.map((item) => (
                  <div key={item.id} className="p-4 hover:bg-slate-50/80 transition-colors cursor-pointer">
                    <div className="flex space-x-2.5">
                      <ShieldAlert className={`h-4 w-4 mt-0.5 ${item.type === 'danger' ? 'text-red-500' : 'text-amber-500'}`} />
                      <div className="flex-1">
                        <h5 className="text-xs font-bold text-slate-800">{item.title}</h5>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pt-2 pb-1 border-t border-slate-50 text-center">
                <button className="text-xs font-semibold text-[#047857] hover:underline w-full">Xem tất cả nhật ký thông báo</button>
              </div>
            </div>
          )}
        </div>

        {/* 3. THÔNG TIN USER VÀ DROPDOWN MENU MENU */}
        <div className="relative" ref={userMenuRef}>
          <div 
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center space-x-3 border-l border-slate-100 pl-6 cursor-pointer group"
          >
            <div className="text-right select-none">
              <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">Admin User</h4>
              <p className="text-xs text-slate-400">Quản trị viên cấp cao</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
              alt="Avatar"
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-slate-100 group-hover:ring-emerald-500/30 transition-all"
            />
          </div>

          {/* Menu thả xuống khi click vào Avatar */}
          {showUserMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2.5 border-b border-slate-50">
                <p className="text-[11px] text-slate-400 font-medium">Tài khoản đang đăng nhập</p>
                <p className="text-xs font-bold text-slate-700 truncate mt-0.5">admin@marketplace.vn</p>
              </div>
              <div className="p-1.5 space-y-0.5">
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all">
                  <User className="h-4 w-4 text-slate-400" />
                  <span>Hồ sơ của tôi</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all">
                  <Settings className="h-4 w-4 text-slate-400" />
                  <span>Cài đặt hệ thống</span>
                </button>
              </div>
              <div className="p-1.5 border-t border-slate-50">
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-all">
                  <LogOut className="h-4 w-4 text-red-500" />
                  <span>Đăng xuất tài khoản</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;