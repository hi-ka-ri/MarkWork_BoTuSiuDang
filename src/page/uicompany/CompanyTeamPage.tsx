import React from 'react';
import { Users, UserPlus, Shield, Filter, Download, MoreHorizontal, X } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const CompanyTeamPage: React.FC = () => {
  return (
    <div className="w-full pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
        <span className="hover:text-slate-800 cursor-pointer">Quản trị hệ thống</span>
        <ChevronRightIcon className="h-3 w-3" />
        <span className="text-[#047857]">Quản lý thành viên</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">Thành viên đội ngũ</h1>
          <p className="text-sm font-medium text-slate-500">Quản lý phân quyền và lời mời tham gia dự án cho các thành viên trong tổ chức.</p>
        </div>
        <button className="px-5 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
          <UserPlus className="h-4 w-4" /> Mời thành viên
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-emerald-50 text-[#047857] rounded-xl flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-[#047857] bg-emerald-50 px-2 py-1 rounded-md">+2 trong tháng này</span>
          </div>
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">TỔNG THÀNH VIÊN</h3>
          <p className="text-2xl font-bold text-slate-800">24</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <ClipboardListIcon className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">3 Đang chờ</span>
          </div>
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">LỜI MỜI HOẠT ĐỘNG</h3>
          <p className="text-2xl font-bold text-slate-800">05</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
          </div>
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">VAI TRÒ BẢO MẬT</h3>
          <p className="text-2xl font-bold text-slate-800">03</p>
        </div>

      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-800">Danh sách thành viên</h2>
            <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] text-xs font-bold rounded">24</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" /> Lọc
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" /> Xuất dữ liệu
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="p-4 pl-6">THÀNH VIÊN</th>
                <th className="p-4">EMAIL</th>
                <th className="p-4">VAI TRÒ</th>
                <th className="p-4">TRẠNG THÁI</th>
                <th className="p-4 pr-6">HÀNH ĐỘNG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6 flex items-center gap-3">
                  <img src={avatarImg} alt="User" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <p className="font-bold text-slate-800">Lê Minh Trang</p>
                    <p className="text-xs font-medium text-slate-500">Trưởng phòng Nhân sự</p>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">trang.le@workmarket.com</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-[#047857] text-[10px] font-bold rounded-full">Quản trị</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#047857]"></span> Đang hoạt động
                  </div>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6 flex items-center gap-3">
                  <img src={avatarImg} alt="User" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <p className="font-bold text-slate-800">Trần Hoàng Nam</p>
                    <p className="text-xs font-medium text-slate-500">Project Manager</p>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">nam.tran@workmarket.com</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold rounded-full">Đăng task</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#047857]"></span> Đang hoạt động
                  </div>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6 flex items-center gap-3">
                  <img src={avatarImg} alt="User" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <p className="font-bold text-slate-800">Phạm Hải Anh</p>
                    <p className="text-xs font-medium text-slate-500">Finance Auditor</p>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">haianh.p@workmarket.com</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full">Chỉ xem</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span> Vắng mặt
                  </div>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors bg-amber-50/10">
                <td className="p-4 pl-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 border-dashed flex items-center justify-center text-slate-400">
                    <MoreHorizontal className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 italic">nguyen.lan@gmail.com</p>
                    <p className="text-xs font-medium text-amber-600">Đang chờ xác nhận...</p>
                  </div>
                </td>
                <td className="p-4 text-slate-400 font-medium italic">nguyen.lan@gmail.com</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold rounded-full">Đăng task</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Chờ chấp nhận
                  </div>
                </td>
                <td className="p-4 pr-6">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-xs font-bold text-[#047857] hover:underline">Gửi lại lời mời</button>
                    <button className="text-slate-400 hover:text-rose-500 transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm font-medium text-slate-500">Hiển thị <span className="font-bold text-slate-800">1-4</span> trên tổng số <span className="font-bold text-slate-800">24</span> thành viên</p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-white transition-colors">
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#047857] bg-[#047857] text-white font-bold rounded-lg shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-white transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-white transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">
              &gt;
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

const ChevronRightIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const ClipboardListIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
