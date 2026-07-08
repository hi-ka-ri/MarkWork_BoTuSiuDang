import React from 'react';
import { 
  Search, Calendar, Filter, Download, 
  Wallet, Banknote, Undo2, Lock, CheckCircle2, Gavel,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const mockEscrow = [
  {
    id: '#ESC-88421',
    task: 'Thiết kế UI\nDashboard',
    business: 'VNG\nCorporation',
    worker: 'Nguyễn Văn\nA',
    amount: '15,000,000 đ',
    status: 'ĐANG GIỮ',
    date: '05/11/2024'
  },
  {
    id: '#ESC-88390',
    task: 'Viết 10 bài Content\nSEO',
    business: 'FPT Software',
    worker: 'Trần Thị B',
    amount: '4,200,000 đ',
    status: 'ĐÃ GIẢI\nNGÂN',
    date: '04/11/2024'
  },
  {
    id: '#ESC-88312',
    task: 'Phát triển App React\nNative',
    business: 'Momo FinTech',
    worker: 'Lê Hoàng C',
    amount: '85,000,000 đ',
    status: 'TRANH\nCHẤP',
    date: '02/11/2024'
  },
  {
    id: '#ESC-88201',
    task: 'Quay dựng Video\nIntro',
    business: 'Shopee VN',
    worker: 'Phạm Minh\nD',
    amount: '2,500,000 đ',
    status: 'ĐÃ HOÀN\nTIỀN',
    date: '01/11/2024'
  },
  {
    id: '#ESC-88115',
    task: 'Hợp đồng tư vấn Luật\n1 năm',
    business: 'VinGroup PJSC',
    worker: 'Đỗ Bảo E',
    amount: '240,000,000\nđ',
    status: 'ĐANG GIỮ',
    date: '28/10/2024'
  }
];

export const FundsPage: React.FC = () => {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ĐANG GIỮ':
        return (
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-[#ffedd5] text-[#9a3412] font-bold text-[10px] tracking-wide">
            <Lock className="h-3.5 w-3.5" />
            <span>ĐANG GIỮ</span>
          </div>
        );
      case 'ĐÃ GIẢI\nNGÂN':
        return (
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-[#a7f3d0] text-[#065f46] font-bold text-[10px] tracking-wide text-left">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span className="whitespace-pre-line leading-tight">ĐÃ GIẢI{'\n'}NGÂN</span>
          </div>
        );
      case 'TRANH\nCHẤP':
        return (
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-[#fecdd3] text-[#9f1239] font-bold text-[10px] tracking-wide text-left">
            <Gavel className="h-3.5 w-3.5" />
            <span className="whitespace-pre-line leading-tight">TRANH{'\n'}CHẤP</span>
          </div>
        );
      case 'ĐÃ HOÀN\nTIỀN':
        return (
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-[#dbeafe] text-[#1e40af] font-bold text-[10px] tracking-wide text-left">
            <Undo2 className="h-3.5 w-3.5" />
            <span className="whitespace-pre-line leading-tight">ĐÃ HOÀN{'\n'}TIỀN</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
          <p className="text-sm font-medium text-slate-600 mb-2">Tổng đang giữ</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-wide">1,284,500,000 đ</h3>
          <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-[11px] font-bold text-[#047857]">
            +12% so với tháng trước
          </div>
          <div className="absolute top-6 right-6 text-amber-600">
            <Wallet className="h-5 w-5" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
          <p className="text-sm font-medium text-slate-600 mb-2">Đã giải ngân kỳ này</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-wide">452,100,000 đ</h3>
          <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-[11px] font-bold text-blue-600">
            128 giao dịch
          </div>
          <div className="absolute top-6 right-6 text-[#047857]">
            <Banknote className="h-5 w-5" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
          <p className="text-sm font-medium text-slate-600 mb-2">Đã hoàn tiền kỳ này</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-wide">12,400,000 đ</h3>
          <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-[11px] font-bold text-blue-600">
            5 giao dịch
          </div>
          <div className="absolute top-6 right-6 text-rose-600">
            <Undo2 className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="flex space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm Mã Escrow ID..." 
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#047857]"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm text-slate-600 font-medium whitespace-nowrap">
            <Calendar className="h-4 w-4" />
            <span>01/10/2024 - 31/10/2024</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm text-slate-600 font-medium whitespace-nowrap">
            <Filter className="h-4 w-4" />
            <span>Trạng thái: Tất cả</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#047857] text-white rounded-lg hover:bg-[#065f46] font-medium text-sm transition-colors whitespace-nowrap">
          <Download className="h-4 w-4" />
          <span>Xuất báo cáo</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-600 font-bold text-[12px]">
              <tr>
                <th className="px-6 py-5 align-middle">Mã<br/>Escrow</th>
                <th className="px-6 py-5 align-middle">Task</th>
                <th className="px-6 py-5 align-middle">Doanh nghiệp</th>
                <th className="px-6 py-5 align-middle">Worker</th>
                <th className="px-6 py-5 align-middle text-right">Số tiền</th>
                <th className="px-6 py-5 align-middle">Trạng thái</th>
                <th className="px-6 py-5 align-middle">Cập nhật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockEscrow.map((escrow, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-[#047857] whitespace-pre-line leading-relaxed">
                    {escrow.id}
                  </td>
                  <td className="px-6 py-5 font-semibold text-slate-700 whitespace-pre-line leading-relaxed">
                    {escrow.task}
                  </td>
                  <td className="px-6 py-5 font-medium text-slate-600 whitespace-pre-line leading-relaxed">
                    {escrow.business}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0"></div>
                      <span className="font-semibold text-slate-700 whitespace-pre-line leading-tight">{escrow.worker}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                    {escrow.amount}
                  </td>
                  <td className="px-6 py-5">
                    {getStatusBadge(escrow.status)}
                  </td>
                  <td className="px-6 py-5 text-slate-500 font-medium">
                    {escrow.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 border-t border-slate-50 gap-4">
          <div className="font-medium text-slate-500">
            Hiển thị 1 - 5 của 1,248 giao dịch
          </div>
          <div className="flex items-center space-x-1">
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-3.5 py-1.5 bg-[#047857] text-white rounded-md font-medium shadow-sm">
              1
            </button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-medium transition-colors">
              2
            </button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-medium transition-colors">
              3
            </button>
            <span className="px-2 py-1.5 text-slate-400">...</span>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-medium transition-colors">
              250
            </button>
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
