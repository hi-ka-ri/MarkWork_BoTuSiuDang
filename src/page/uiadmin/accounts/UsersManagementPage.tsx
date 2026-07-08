import React, { useState } from 'react';
import { 
  Search, RotateCcw, Eye, Lock, Unlock, MoreVertical, 
  ChevronLeft, ChevronRight, UserCheck, ShieldAlert
} from 'lucide-react';

// Dữ liệu mẫu danh sách người dùng (Freelancer / Khách hàng cá nhân)
const mockUsers = [
  {
    id: 1,
    name: 'Nguyễn Văn Minh',
    username: '@minh.nguyen',
    email: 'minh.nguyen@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    kycStatus: 'Verified',
    completedTasks: 142,
    disputes: 0,
    balance: '45,200,000 đ',
    status: 'Hoạt động',
    isRisk: false
  },
  {
    id: 2,
    name: 'Trần Thị Thanh Tuyền',
    username: '@tuyen.ttt',
    email: 'tuyen.tran@workmark.vn',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    kycStatus: 'Pending',
    completedTasks: 38,
    disputes: 1,
    balance: '12,850,000 đ',
    status: 'Tạm dừng',
    isRisk: false
  },
  {
    id: 3,
    name: 'Lê Anh Tuấn',
    username: '@tuan.leanh',
    email: 'anhtuan.le@outlook.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    kycStatus: 'Verified',
    completedTasks: 312,
    disputes: 3,
    balance: '185,000,000 đ',
    status: 'Hoạt động',
    isRisk: false
  },
  {
    id: 4,
    name: 'Phạm Minh Hoàng',
    username: '@bot_checker',
    email: 'hoangpm99@yahoo.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    kycStatus: 'Rejected',
    completedTasks: 12,
    disputes: 5,
    balance: '240,000 đ',
    status: 'Bị khóa',
    isRisk: true,
    riskMessage: 'Risk Detected (Bypass Alert)'
  }
];

export const UsersManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      
      {/* NỘI DUNG CHÍNH: BẢNG DANH SÁCH NGƯỜI DÙNG */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        
        {/* Tab Tiêu Đề */}
        <div className="border-b border-slate-100 px-6">
          <div className="flex space-x-6">
            <button className="border-b-2 border-cyan-600 text-cyan-600 font-semibold py-4 text-xs tracking-wide">
              Người dùng cá nhân
            </button>
          </div>
        </div>

        {/* Bộ Lọc Thao Tác (Filters & Actions) */}
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between bg-slate-50/50 border-b border-slate-100 gap-3">
          <div className="flex flex-wrap items-center gap-3 flex-1 w-full sm:w-auto">
            {/* Thanh tìm kiếm */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Tìm kiếm tên, số điện thoại, email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-xs rounded-lg pl-9 pr-4 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            
            {/* Dropdown 1 */}
            <select className="bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-600 focus:outline-none w-full sm:w-auto">
              <option>Trạng thái tài khoản</option>
              <option>Hoạt động</option>
              <option>Tạm dừng</option>
              <option>Bị khóa</option>
            </select>

            {/* Dropdown 2 */}
            <select className="bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-600 focus:outline-none w-full sm:w-auto">
              <option>Trạng thái KYC</option>
              <option>Verified</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Nút Làm mới */}
          <button className="flex items-center space-x-2 bg-white border border-slate-200 text-xs px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition w-full sm:w-auto justify-center">
            <RotateCcw className="h-3 w-3" />
            <span>Làm mới</span>
          </button>
        </div>

        {/* BẢNG DỮ LIỆU TÀI KHOẢN (USER TABLE) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 tracking-wider uppercase border-b border-slate-100">
                <th className="py-3 px-6 w-16">Avatar</th>
                <th className="py-3 px-4">Họ và tên / Username</th>
                <th className="py-3 px-4">Email liên hệ</th>
                <th className="py-3 px-4">Trạng thái KYC</th>
                <th className="py-3 px-4 text-center">Nhiệm vụ xong</th>
                <th className="py-3 px-4 text-center">Tranh chấp</th>
                <th className="py-3 px-4 text-right">Số dư ví</th>
                <th className="py-3 px-4 text-center">Trạng thái</th>
                <th className="py-3 px-6 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {mockUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className={`transition ${user.isRisk ? 'bg-red-50/30 hover:bg-red-50/50' : 'hover:bg-slate-50/80'}`}
                >
                  {/* Cột 1: Avatar */}
                  <td className="py-4 px-6">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                  </td>

                  {/* Cột 2: Tên & Username */}
                  <td className="py-4 px-4">
                    <p className="font-semibold text-slate-800">{user.name}</p>
                    {user.isRisk ? (
                      <p className="text-[11px] text-red-500 font-medium mt-0.5 flex items-center">
                        <ShieldAlert className="h-3 w-3 mr-1 shrink-0" />
                        {user.riskMessage}
                      </p>
                    ) : (
                      <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{user.username}</p>
                    )}
                  </td>

                  {/* Cột 3: Email */}
                  <td className="py-4 px-4 text-slate-600 font-medium">{user.email}</td>

                  {/* Cột 4: Trạng thái KYC */}
                  <td className="py-4 px-4">
                    {user.kycStatus === 'Verified' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <UserCheck className="h-2.5 w-2.5 mr-1" /> Verified
                      </span>
                    )}
                    {user.kycStatus === 'Pending' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-600 border border-amber-200">
                        ● Pending
                      </span>
                    )}
                    {user.kycStatus === 'Rejected' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-50 text-red-600 border border-red-200">
                        ✕ Rejected
                      </span>
                    )}
                  </td>

                  {/* Cột 5: Số nhiệm vụ */}
                  <td className="py-4 px-4 text-center font-medium text-slate-700">{user.completedTasks}</td>

                  {/* Cột 6: Số tranh chấp */}
                  <td className="py-4 px-4 text-center font-medium text-slate-700">
                    <span className={user.disputes > 0 ? 'text-amber-600 font-semibold' : 'text-slate-500'}>
                      {user.disputes}
                    </span>
                  </td>

                  {/* Cột 7: Số dư ví */}
                  <td className="py-4 px-4 text-right font-semibold text-slate-800">{user.balance}</td>

                  {/* Cột 8: Trạng thái hoạt động */}
                  <td className="py-4 px-4 text-center">
                    {user.status === 'Hoạt động' && (
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Hoạt động
                      </span>
                    )}
                    {user.status === 'Tạm dừng' && (
                      <span className="bg-amber-50 text-amber-700 font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Tạm dừng
                      </span>
                    )}
                    {user.status === 'Bị khóa' && (
                      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Bị khóa
                      </span>
                    )}
                  </td>

                  {/* Cột 9: Thao tác nhanh */}
                  <td className="py-4 px-6 text-center text-slate-400 space-x-3">
                    <button className="hover:text-cyan-600 transition"><Eye className="h-4 w-4 inline" /></button>
                    <button className="hover:text-slate-600 transition">
                      {user.status === 'Bị khóa' ? <Unlock className="h-4 w-4 inline text-emerald-600" /> : <Lock className="h-4 w-4 inline" />}
                    </button>
                    <button className="hover:text-slate-600 transition"><MoreVertical className="h-4 w-4 inline" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phân Trang (Pagination) */}
        <div className="p-4 flex items-center justify-between border-t border-slate-100 text-slate-500 text-xs">
          <div>
            Hiển thị <span className="font-medium text-slate-700">1-4</span> trên <span className="font-medium text-slate-700">45,890</span> người dùng
          </div>
          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"><ChevronLeft className="h-3 w-3" /></button>
            <button className="w-8 h-8 rounded bg-cyan-700 text-white font-medium flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
            <span className="px-1 text-slate-400">...</span>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">4589</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"><ChevronRight className="h-3 w-3" /></button>
          </div>
        </div>

      </div>
    </div>
  );
};