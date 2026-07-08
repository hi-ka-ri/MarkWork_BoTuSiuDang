import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, RotateCcw, Eye, FileText, CheckCircle2, 
  XCircle, Clock
} from 'lucide-react';

// ================= DỮ LIỆU MẪU CHUẨN FIGMA =================
const kycStats = [
  { id: 1, label: 'Chờ xử lý', value: 142, change: '+12%', icon: Clock, bgColor: 'bg-emerald-50 text-emerald-700' },
  { id: 2, label: 'Đã duyệt hôm nay', value: 86, change: '88%', icon: CheckCircle2, bgColor: 'bg-teal-50 text-teal-700' },
  { id: 3, label: 'Đã từ chối hôm nay', value: 14, change: '12%', icon: XCircle, bgColor: 'bg-rose-50 text-rose-700' },
  { id: 4, label: 'Cần xem xét thủ công', value: 24, change: 'URGENT', icon: FileText, bgColor: 'bg-amber-50 text-amber-700', isUrgent: true },
];

const kycListMock = [
  {
    id: '1',
    name: 'Minh Nguyễn',
    email: 'minh.nguyen@email.com',
    avatarText: 'MN',
    avatarColor: 'bg-sky-100 text-sky-700',
    type: 'eKYC',
    date: '15/05/2024 14:30',
    sla: 'Còn 2 giờ',
    slaProgress: 75,
    slaColor: 'bg-emerald-500',
    status: 'pending', // Sửa lại thành key chuẩn để dễ đối soát filter
    statusLabel: 'Chờ duyệt',
    statusStyle: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: '2',
    name: 'Công ty CP Toàn Cầu',
    email: 'contact@toancau.vn',
    avatarText: 'AT',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    type: 'KYB',
    date: '15/05/2024 09:15',
    sla: 'Quá hạn 1 giờ',
    slaProgress: 100,
    slaColor: 'bg-rose-500',
    status: 'need_review',
    statusLabel: 'Cần xem xét',
    statusStyle: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    id: '3',
    name: 'Hoàng Linh',
    email: 'hlinh.dev@gmail.com',
    avatarText: 'HL',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    type: 'eKYC',
    date: '14/05/2024 18:45',
    sla: 'SLA Xanh',
    slaProgress: 25,
    slaColor: 'bg-sky-400',
    status: 'reviewing',
    statusLabel: 'Đang xem xét',
    statusStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: '4',
    name: 'Kiều Việt',
    email: 'vietkieu@startup.io',
    avatarText: 'KV',
    avatarColor: 'bg-violet-100 text-violet-700',
    type: 'eKYC',
    date: '15/05/2024 16:20',
    sla: 'Còn 4 giờ',
    slaProgress: 50,
    slaColor: 'bg-emerald-500',
    status: 'pending',
    statusLabel: 'Chờ duyệt',
    statusStyle: 'bg-amber-50 text-amber-700 border-amber-200'
  }
];

const VerificationPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Các state quản lý bộ lọc dữ liệu
  const [search, setSearch] = useState('');
  const [profileType, setProfileType] = useState('');
  const [partner, setPartner] = useState('');
  const [slaStatus, setSlaStatus] = useState('');
  const [status, setStatus] = useState('');

  const handleResetFilters = () => {
    setSearch('');
    setProfileType('');
    setPartner('');
    setSlaStatus('');
    setStatus('');
  };

  // VÙNG LOGIC SỬA ĐỔI: Tự động tính toán lọc dữ liệu ngay tại Client
  const filteredKycList = kycListMock.filter((row) => {
    // 1. Kiểm tra từ khóa Tìm kiếm (Không phân biệt hoa thường)
    const matchesSearch = 
      row.name.toLowerCase().includes(search.toLowerCase()) || 
      row.email.toLowerCase().includes(search.toLowerCase());

    // 2. Kiểm tra Loại hồ sơ (eKYC / KYB)
    const matchesType = profileType === '' || row.type === profileType;

    // 3. Kiểm tra Trạng thái duyệt
    const matchesStatus = status === '' || row.status === status;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 text-slate-700">
      
      {/* KHỐI THỐNG KÊ PHÍA TRÊN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kycStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${stat.isUrgent ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-500'}`}>
                  {stat.change}
                </span>
                <div className={`p-2 rounded-xl ${stat.bgColor}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* KHỐI THANH BỘ LỌC HOÀN CHỈNH OPTION */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3 flex-1 min-w-0">
          
          {/* 1. Ô tìm kiếm */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm tên, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-9 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-slate-800"
            />
          </div>

          {/* 2. Bộ lọc Loại hồ sơ */}
          <select 
            value={profileType}
            onChange={(e) => setProfileType(e.target.value)}
            className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none text-slate-600 cursor-pointer hover:bg-slate-100/50"
          >
            <option value="">Loại hồ sơ (Tất cả)</option>
            <option value="eKYC">eKYC (Cá nhân)</option>
            <option value="KYB">KYB (Doanh nghiệp)</option>
          </select>

          {/* 3. Bộ lọc Đối tác */}
          <select 
            value={partner}
            onChange={(e) => setPartner(e.target.value)}
            className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none text-slate-600 cursor-pointer hover:bg-slate-100/50"
          >
            <option value="">Đối tác (Tất cả)</option>
            <option value="Rikkei">Rikkei Capital</option>
            <option value="ToanCau">Toàn Cầu Group</option>
          </select>

          {/* 4. Bộ lọc SLA */}
          <select 
            value={slaStatus}
            onChange={(e) => setSlaStatus(e.target.value)}
            className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none text-slate-600 cursor-pointer hover:bg-slate-100/50"
          >
            <option value="">SLA (Tất cả)</option>
            <option value="urgent">Khẩn cấp (Dưới 1 giờ)</option>
            <option value="safe">An toàn (SLA Xanh)</option>
          </select>

          {/* 5. Bộ lọc Trạng thái duyệt */}
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none text-slate-600 cursor-pointer hover:bg-slate-100/50"
          >
            <option value="">Trạng thái (Tất cả)</option>
            <option value="pending">Chờ duyệt</option>
            <option value="reviewing">Đang xem xét</option>
            <option value="need_review">Cần xem xét</option>
          </select>
        </div>

        {/* Nút làm mới bộ lọc */}
        <button 
          onClick={handleResetFilters}
          className="flex items-center space-x-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 active:bg-slate-100 rounded-xl text-xs font-semibold text-slate-600 transition-all shadow-sm"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Làm mới</span>
        </button>
      </div>

      {/* KHỐI BẢNG HỒ SƠ (DATATABLE) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4 w-12 text-center">
                  <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 border-slate-300" />
                </th>
                <th className="p-4">Người đăng ký</th>
                <th className="p-4">Loại xác thực</th>
                <th className="p-4">Thời gian nộp</th>
                <th className="p-4">SLA</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs">
              {/* SỬA TẠI ĐÂY: Dùng filteredKycList thay vì dùng kycListMock gốc */}
              {filteredKycList.length > 0 ? (
                filteredKycList.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors animate-in fade-in duration-150">
                    <td className="p-4 text-center">
                      <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 border-slate-300" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`h-9 w-9 rounded-xl font-bold flex items-center justify-center text-xs ${row.avatarColor}`}>
                          {row.avatarText}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{row.name}</h4>
                          <p className="text-[11px] text-slate-400 mt-0.5">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${row.type === 'eKYC' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{row.date}</td>
                    <td className="p-4 w-44">
                      <div className="space-y-1">
                        <span className="text-[11px] font-medium text-slate-500">{row.sla}</span>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full ${row.slaColor}`} style={{ width: `${row.slaProgress}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold ${row.statusStyle}`}>
                        {row.statusLabel}
                      </span>
                    </td>
                    
                    {/* HÀNH ĐỘNG: Click con mắt điều hướng đi xem Chi tiết 4 bước */}
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => navigate('/admin/verification/review')}
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // Hiển thị trạng thái trống khi không tìm thấy kết quả lọc
                <tr>
                  <td colSpan={7} className="p-10 text-center text-slate-400 font-medium">
                    Không tìm thấy dữ liệu hồ sơ phù hợp với bộ lọc.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PHÂN TRANG */}
        <div className="p-4 border-t border-slate-50 flex items-center justify-between text-slate-400 text-[11px] font-medium">
          <span>Hiển thị 1-{filteredKycList.length} trên {filteredKycList.length} hồ sơ</span>
          <div className="flex items-center space-x-1">
            <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-50">‹</button>
            <button className="px-2.5 py-1 bg-[#047857] text-white rounded-lg font-semibold shadow-sm">1</button>
            <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-50">›</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VerificationPage;