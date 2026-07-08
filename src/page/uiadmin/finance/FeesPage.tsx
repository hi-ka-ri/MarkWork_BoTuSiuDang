import React from 'react';
import { 
  Banknote, TrendingUp, Tag, Plus, Edit2, Eye, AlertTriangle, Save
} from 'lucide-react';

const mockPromotions = [
  {
    id: 1,
    name: 'Chào mừng\nWorker mới',
    condition: 'Hợp đồng đầu tiên\n> 5M',
    time: '01/01/2024 -\n31/03/2024',
    status: 'ĐANG\nCHẠY',
    statusColor: 'bg-emerald-100 text-[#047857]',
    statusDot: 'bg-[#047857]',
    canEdit: true,
  },
  {
    id: 2,
    name: 'Ưu đãi Tết Giáp\nThìn',
    condition: 'Giảm 2% Take-rate',
    time: '01/02/2024 -\n15/02/2024',
    status: 'SẮP DIỄN\nRA',
    statusColor: 'bg-[#fef3c7] text-[#b45309]',
    statusDot: 'bg-[#b45309]',
    canEdit: true,
  },
  {
    id: 3,
    name: 'Khách hàng VIP\nHạng S',
    condition: 'Giao dịch tích lũy >\n500M',
    time: 'Vô thời hạn',
    status: 'ĐANG\nCHẠY',
    statusColor: 'bg-emerald-100 text-[#047857]',
    statusDot: 'bg-[#047857]',
    canEdit: true,
  },
  {
    id: 4,
    name: 'Black Friday\n2023',
    condition: 'Hoàn tiền 5%\nEscrow',
    time: '24/11/2023 -\n26/11/2023',
    status: 'ĐÃ KẾT\nTHÚC',
    statusColor: 'bg-[#e2e8f0] text-[#475569]',
    statusDot: 'bg-[#64748b]',
    canEdit: false,
  }
];

export const FeesPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-24 relative">
      
      {/* Breadcrumb equivalent text */}
      <div className="text-sm font-medium text-slate-500 mb-2">
        Quản lý cơ cấu doanh thu và các chiến dịch kích cầu giao dịch.
      </div>

      {/* Top Cards: Core Revenue Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Phí mặc định */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center space-x-2 text-[#047857] font-bold text-lg mb-6">
            <Banknote className="h-5 w-5" />
            <h3>Phí mặc định</h3>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-2">Phí dịch vụ (Take-rate %)</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="12.50"
                  className="w-full pl-4 pr-8 py-2.5 border border-slate-200 rounded-lg text-[15px] font-bold text-slate-800 text-right focus:outline-none focus:ring-2 focus:ring-[#047857]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-2">Phí chuyển đổi (%)</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="3.20"
                  className="w-full pl-4 pr-8 py-2.5 border border-slate-200 rounded-lg text-[15px] font-bold text-slate-800 text-right focus:outline-none focus:ring-2 focus:ring-[#047857]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fafc] rounded-lg p-3 text-[11px] font-medium text-slate-600 flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">Các phí này được áp dụng tự động cho mọi hợp đồng mới trừ khi có quy định khác trong chương trình khuyến mãi.</p>
          </div>
        </div>

        {/* Doanh thu phí */}
        <div className="bg-[#047857] rounded-2xl p-8 text-white relative overflow-hidden shadow-md flex flex-col justify-center">
          <div className="relative z-10">
            <h4 className="text-[13px] font-bold text-emerald-100 uppercase tracking-widest mb-1.5">DOANH THU PHÍ (THÁNG NÀY)</h4>
            <div className="text-[32px] font-serif mb-4">245,800,000đ</div>
            <div className="flex items-center space-x-2 text-sm font-bold text-emerald-50">
              <TrendingUp className="h-4 w-4" />
              <span>+14.2% so với tháng trước</span>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -right-8 -bottom-8 opacity-20">
            <Banknote className="w-48 h-48" />
          </div>
        </div>

        {/* Tỉ lệ chuyển đổi */}
        <div className="bg-[#e2e8f0] rounded-2xl p-8 relative overflow-hidden shadow-sm flex flex-col justify-center border border-slate-200">
          <div className="relative z-10">
            <h4 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">TỈ LỆ CHUYỂN ĐỔI TRUNG BÌNH</h4>
            <div className="text-[40px] font-serif text-slate-800 mb-6">68.4%</div>
            
            {/* Progress bar visual */}
            <div className="w-full bg-slate-300 h-2 rounded-full overflow-hidden">
              <div className="bg-[#047857] h-full" style={{ width: '68.4%' }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Table: Promotions */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-lg">
            <Tag className="h-5 w-5 text-[#047857]" />
            <h3>Chương trình khuyến mãi</h3>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm">
            <Plus className="h-4 w-4" />
            <span>Tạo khuyến mãi mới</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-600 font-bold text-[12px]">
              <tr>
                <th className="px-6 py-4">Tên khuyến mãi</th>
                <th className="px-6 py-4">Điều kiện</th>
                <th className="px-6 py-4">Thời gian áp dụng</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockPromotions.map((promo) => (
                <tr key={promo.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                    {promo.name}
                  </td>
                  <td className="px-6 py-5 font-medium text-slate-700 whitespace-pre-line leading-relaxed">
                    {promo.condition}
                  </td>
                  <td className="px-6 py-5 font-medium text-slate-700 font-mono text-[13px] whitespace-pre-line leading-relaxed">
                    {promo.time}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest whitespace-pre-line leading-tight ${promo.statusColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${promo.statusDot}`}></div>
                      <span>{promo.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="p-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-bold">
                      {promo.canEdit ? <Edit2 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#f8fafc] border-t border-slate-100 p-4 text-center">
          <button className="text-[13px] font-bold text-[#047857] hover:underline">
            Xem tất cả chương trình →
          </button>
        </div>

      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#b45309] bg-[#fffbeb] px-4 py-2 rounded-lg text-sm font-bold border border-[#fcd34d]">
            <AlertTriangle className="h-5 w-5" />
            <span>Bạn có thay đổi chưa lưu trong cấu hình Phí mặc định.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-lg text-sm transition-colors shadow-sm">
              Hủy bỏ
            </button>
            <button className="px-6 py-2.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-lg text-sm transition-colors shadow-sm flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Lưu thay đổi</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
