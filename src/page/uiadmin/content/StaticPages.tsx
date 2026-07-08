import React from 'react';
import { 
  Search, Plus, FileText, CheckCircle2, Pencil, 
  Home, HelpCircle, Shield, FileSignature, 
  Lightbulb, History, ChevronLeft, ChevronRight, Filter, Trash2, Edit3
} from 'lucide-react';

const mockPages = [
  {
    id: 1,
    name: 'Trang chủ',
    url: '/index.html',
    icon: Home,
    updated: '2023-10-24 14:30',
    author: 'An Nguyễn',
    authorInitials: 'AN',
    status: 'ĐÃ XUẤT BẢN',
    statusColor: 'bg-emerald-50 text-emerald-700',
    statusDot: 'bg-emerald-500',
  },
  {
    id: 2,
    name: 'FAQ',
    url: '/tro-giup/faq',
    icon: HelpCircle,
    updated: '2023-10-22 09:15',
    author: 'Tâm Võ',
    authorInitials: 'TV',
    authorColor: 'bg-amber-600',
    status: 'ĐÃ XUẤT BẢN',
    statusColor: 'bg-emerald-50 text-emerald-700',
    statusDot: 'bg-emerald-500',
  },
  {
    id: 3,
    name: 'Điều khoản sử dụng',
    url: '/phap-ly/dieu-khoan',
    icon: FileSignature,
    updated: '2023-10-21 17:45',
    author: 'Lâm Hoàng',
    authorInitials: 'LH',
    authorColor: 'bg-emerald-700',
    status: 'BẢN NHÁP',
    statusColor: 'bg-[#e2e8f0] text-slate-700',
    statusDot: 'bg-slate-500',
  },
  {
    id: 4,
    name: 'Chính sách bảo mật',
    url: '/phap-ly/bao-mat',
    icon: Shield,
    updated: '2023-10-15 11:20',
    author: 'An Nguyễn',
    authorInitials: 'AN',
    status: 'ĐÃ XUẤT BẢN',
    statusColor: 'bg-emerald-50 text-emerald-700',
    statusDot: 'bg-emerald-500',
  }
];

export const StaticPages: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="relative w-full sm:w-[500px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm trang..." 
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#047857] transition-colors"
          />
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#047857] text-white rounded-lg hover:bg-[#065f46] transition-colors text-sm font-semibold shadow-sm">
          <Plus className="h-4 w-4" />
          <span>Tạo trang mới</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 rounded-lg text-[#047857]">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">TỔNG SỐ TRANG</h4>
            <div className="text-2xl font-extrabold text-slate-800">12</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 rounded-lg text-[#047857]">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">ĐÃ XUẤT BẢN</h4>
            <div className="text-2xl font-extrabold text-slate-800">10</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-[#fef3c7] rounded-lg text-[#b45309]">
            <Pencil className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">BẢN NHÁP</h4>
            <div className="text-2xl font-extrabold text-slate-800">02</div>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm">
        
        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-700">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-bold">Bộ lọc:</span>
          </div>
          <select className="text-sm border-none bg-transparent font-medium text-slate-600 focus:ring-0 cursor-pointer outline-none">
            <option>Tất cả trạng thái</option>
            <option>Đã xuất bản</option>
            <option>Bản nháp</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">TÊN TRANG</th>
                <th className="px-6 py-4">CẬP NHẬT LẦN CUỐI</th>
                <th className="px-6 py-4">NGƯỜI SỬA</th>
                <th className="px-6 py-4">TRẠNG THÁI</th>
                <th className="px-6 py-4 text-right">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockPages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 text-slate-500">
                        <page.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-[15px]">{page.name}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{page.url}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-800 font-bold font-mono text-sm">
                    {page.updated}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${page.authorColor || 'bg-blue-300'}`}>
                        {page.authorInitials}
                      </div>
                      <span className="font-semibold text-slate-700">{page.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${page.statusColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${page.statusDot}`}></div>
                      <span>{page.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 text-slate-400 hover:text-[#047857] hover:bg-emerald-50 rounded-lg transition-colors">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-slate-50">
          <div className="text-sm font-medium text-slate-500">
            Hiển thị 4 trên 12 trang
          </div>
          <div className="flex items-center space-x-1">
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-3.5 py-1.5 bg-[#047857] text-white rounded-md font-medium shadow-sm text-sm">
              1
            </button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-medium transition-colors text-sm">
              2
            </button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-medium transition-colors text-sm">
              3
            </button>
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#f0f4f8] rounded-xl p-6 flex items-start space-x-4">
          <div className="p-2 bg-white rounded-full text-[#047857] shadow-sm flex-shrink-0">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#047857] text-[15px] mb-2">Mẹo Quản lý</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Các bản nháp sẽ không được hiển thị công khai trên ứng dụng Worker hoặc Client cho đến khi bạn nhấn 'Xác nhận xuất bản' trong trình chỉnh sửa chi tiết.
            </p>
          </div>
        </div>

        <div className="bg-[#f8fafc] rounded-xl p-6 flex items-start space-x-4 border border-slate-100">
          <div className="p-2 bg-white rounded-full text-[#3b82f6] shadow-sm flex-shrink-0">
            <History className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#3b82f6] text-[15px] mb-2">Lịch sử thay đổi</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Hệ thống lưu giữ 10 phiên bản gần nhất của mỗi trang tĩnh. Bạn có thể khôi phục lại bất kỳ phiên bản nào nếu xảy ra lỗi cập nhật.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
