import React, { useState } from 'react';
import { 
  Search, RotateCcw, Eye, Lock, Unlock, MoreVertical, 
  ChevronLeft, ChevronRight, Building2, ShieldAlert
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Dữ liệu mẫu danh sách doanh nghiệp theo đúng thiết kế của bạn
const mockBusinesses = [
  {
    id: 1,
    name: 'Công ty Cổ phần Công nghệ VTI',
    shortName: 'VTI Cloud',
    taxCode: '0108934125',
    email: 'contact@vti.com.vn',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80',
    kybStatus: 'Verified',
    activeContracts: 24,
    disputes: 0,
    gmv: '12.4B đ',
    status: 'Hoạt động',
    isRisk: false
  },
  {
    id: 2,
    name: 'Tập đoàn Giải pháp Số NextPay',
    shortName: 'NextPay Holdings',
    taxCode: '0315478962',
    email: 'info@nextpay.vn',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&q=80',
    kybStatus: 'Pending',
    activeContracts: 7,
    disputes: 1,
    gmv: '850M đ',
    status: 'Tạm dừng',
    isRisk: false
  },
  {
    id: 3,
    name: 'Công ty TNHH Giải pháp Phần mềm Rikkei',
    shortName: 'Rikkei Soft',
    taxCode: '0106235481',
    email: 'hr@rikkeisoft.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&q=80',
    kybStatus: 'Verified',
    activeContracts: 89,
    disputes: 2,
    gmv: '45.8B đ',
    status: 'Hoạt động',
    isRisk: false
  },
  {
    id: 4,
    name: 'Hệ thống Quét Dữ liệu Tự động (Giả mạo)',
    shortName: '@bot_checker',
    taxCode: 'Unknown',
    email: 'spam_detector@blackhat.io',
    logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=100&q=80',
    kybStatus: 'Rejected',
    activeContracts: 0,
    disputes: 4,
    gmv: '0 đ',
    status: 'Bị khóa',
    isRisk: true,
    riskMessage: 'Risk Detected (Bypass Alert)'
  }
];

export const BusinessesManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      
      {/* KHU VỰC BẢNG DANH SÁCH DOANH NGHIỆP */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        
        {/* Tab Tiêu Đề */}
        <div className="border-b border-slate-100 px-6">
          <div className="flex space-x-6">
            <button className="border-b-2 border-cyan-600 text-cyan-600 font-semibold py-4 text-xs tracking-wide">
              Quản lý doanh nghiệp
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
                placeholder="Tìm kiếm doanh nghiệp, mã số thuế, email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-xs rounded-lg pl-9 pr-4 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            
            {/* Dropdown 1: Trạng thái tài khoản */}
            <select className="bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-600 focus:outline-none w-full sm:w-auto">
              <option>Trạng thái đối tác</option>
              <option>Hoạt động</option>
              <option>Tạm dừng</option>
              <option>Bị khóa</option>
            </select>

            {/* Dropdown 2: Trạng thái xác thực */}
            <select className="bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-600 focus:outline-none w-full sm:w-auto">
              <option>Xác thực KYB</option>
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

        {/* BẢNG DỮ LIỆU DOANH NGHIỆP */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 tracking-wider uppercase border-b border-slate-100">
                <th className="py-3 px-6 w-16">Logo</th>
                <th className="py-3 px-4">Tên doanh nghiệp</th>
                <th className="py-3 px-4">Mã số thuế</th>
                <th className="py-3 px-4">Email liên hệ</th>
                <th className="py-3 px-4">Trạng thái KYB</th>
                <th className="py-3 px-4 text-center">Hợp đồng</th>
                <th className="py-3 px-4 text-center">Tranh chấp</th>
                <th className="py-3 px-4 text-right">Tổng GMV</th>
                <th className="py-3 px-4 text-center">Trạng thái</th>
                <th className="py-3 px-6 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {mockBusinesses.map((biz) => (
                <tr 
                  key={biz.id} 
                  className={`transition ${biz.isRisk ? 'bg-red-50/30 hover:bg-red-50/50' : 'hover:bg-slate-50/80'}`}
                >
                  {/* Cột 1: Logo */}
                  <td className="py-4 px-6">
                    <img 
                      src={biz.logo} 
                      alt={biz.name} 
                      className="w-8 h-8 rounded-lg object-cover border border-slate-200"
                    />
                  </td>

                  {/* Cột 2: Tên & Tên ngắn */}
                  <td className="py-4 px-4">
                    <p className="font-semibold text-slate-800">{biz.name}</p>
                    {biz.isRisk ? (
                      <p className="text-[11px] text-red-500 font-medium mt-0.5 flex items-center">
                        <ShieldAlert className="h-3 w-3 mr-1 shrink-0" />
                        {biz.riskMessage}
                      </p>
                    ) : (
                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium">{biz.shortName}</p>
                    )}
                  </td>

                  {/* Cột 3: Mã số thuế */}
                  <td className="py-4 px-4 text-slate-600 font-mono font-medium">{biz.taxCode}</td>

                  {/* Cột 4: Email */}
                  <td className="py-4 px-4 text-slate-600 font-medium">{biz.email}</td>

                  {/* Cột 5: Trạng thái KYB */}
                  <td className="py-4 px-4">
                    {biz.kybStatus === 'Verified' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <Building2 className="h-2.5 w-2.5 mr-1" /> KYB Verified
                      </span>
                    )}
                    {biz.kybStatus === 'Pending' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-600 border border-amber-200">
                        ● Pending
                      </span>
                    )}
                    {biz.kybStatus === 'Rejected' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-50 text-red-600 border border-red-200">
                        ✕ Rejected
                      </span>
                    )}
                  </td>

                  {/* Cột 6: Hợp đồng hoạt động */}
                  <td className="py-4 px-4 text-center font-medium text-slate-700">{biz.activeContracts}</td>

                  {/* Cột 7: Tranh chấp */}
                  <td className="py-4 px-4 text-center font-medium text-slate-700">
                    <span className={biz.disputes > 0 ? 'text-amber-600 font-semibold' : 'text-slate-500'}>
                      {biz.disputes}
                    </span>
                  </td>

                  {/* Cột 8: Tổng GMV doanh nghiệp */}
                  <td className="py-4 px-4 text-right font-semibold text-slate-800">{biz.gmv}</td>

                  {/* Cột 9: Trạng thái đối tác */}
                  <td className="py-4 px-4 text-center">
                    {biz.status === 'Hoạt động' && (
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Hoạt động
                      </span>
                    )}
                    {biz.status === 'Tạm dừng' && (
                      <span className="bg-amber-50 text-amber-700 font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Tạm dừng
                      </span>
                    )}
                    {biz.status === 'Bị khóa' && (
                      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded text-[10px] uppercase tracking-wide">
                        Bị khóa
                      </span>
                    )}
                  </td>

                  {/* Cột 10: Thao tác hành động nhanh */}
                  <td className="py-4 px-6 text-center text-slate-400 space-x-3">
                    <button 
                      onClick={() => navigate(`/admin/accounts/businesses/${biz.id}`)}
                      className="hover:text-cyan-600 transition"
                    >
                      <Eye className="h-4 w-4 inline" />
                    </button>
                    <button className="hover:text-slate-600 transition">
                      {biz.status === 'Bị khóa' ? <Unlock className="h-4 w-4 inline text-emerald-600" /> : <Lock className="h-4 w-4 inline" />}
                    </button>
                    <button className="hover:text-slate-600 transition"><MoreVertical className="h-4 w-4 inline" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PHÂN TRANG (PAGINATION) */}
        <div className="p-4 flex items-center justify-between border-t border-slate-100 text-slate-500 text-xs">
          <div>
            Hiển thị <span className="font-medium text-slate-700">1-4</span> trên <span className="font-medium text-slate-700">1,248</span> doanh nghiệp
          </div>
          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"><ChevronLeft className="h-3 w-3" /></button>
            <button className="w-8 h-8 rounded bg-cyan-700 text-white font-medium flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
            <span className="px-1 text-slate-400">...</span>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">125</button>
            <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"><ChevronRight className="h-3 w-3" /></button>
          </div>
        </div>

      </div>
    </div>
  );
};