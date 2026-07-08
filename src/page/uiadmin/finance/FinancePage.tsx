import React, { useState } from 'react';
import { 
  Download, Filter, Calendar,
  CheckCircle2, Clock, XCircle, ChevronLeft, ChevronRight,
  TrendingUp, FileText, ShieldCheck, DownloadCloud,
  MoreHorizontal, Building2
} from 'lucide-react';

// --- MOCK DATA GIAO DỊCH ---
const mockTransactions = [
  {
    idPrefix: '#TXN-',
    idSuffix: '882910',
    business: 'VinGroup\nTech',
    worker: 'Nguyễn\nVăn A',
    amount: '12.500.000\nđ',
    amountColor: 'text-[#047857]',
    type: 'THANH\nTOÁN',
    typeColor: 'bg-blue-50 text-blue-700',
    status: 'Thành\ncông',
    statusIcon: <CheckCircle2 className="h-3.5 w-3.5 text-[#047857] mt-0.5" />,
    statusColor: 'text-[#047857]',
    date: '24/05/2024'
  },
  {
    idPrefix: '#TXN-',
    idSuffix: '882911',
    business: 'Shopee\nVN',
    worker: 'Trần\nThị B',
    amount: '2.450.000\nđ',
    amountColor: 'text-rose-600',
    type: 'HOÀN\nTIỀN',
    typeColor: 'bg-rose-100 text-rose-700',
    status: 'Đang\nchờ',
    statusIcon: <MoreHorizontal className="h-3.5 w-3.5 text-amber-600 mt-0.5 bg-amber-100 rounded-full p-0.5" />,
    statusColor: 'text-amber-700',
    date: '24/05/2024'
  },
  {
    idPrefix: '#TXN-',
    idSuffix: '882912',
    business: 'FPT\nSoftware',
    worker: 'Lê\nHoàng\nC',
    amount: '8.200.000\nđ',
    amountColor: 'text-[#047857]',
    type: 'THANH\nTOÁN',
    typeColor: 'bg-blue-50 text-blue-700',
    status: 'Thành\ncông',
    statusIcon: <CheckCircle2 className="h-3.5 w-3.5 text-[#047857] mt-0.5" />,
    statusColor: 'text-[#047857]',
    date: '23/05/2024'
  },
  {
    idPrefix: '#TXN-',
    idSuffix: '882913',
    business: 'Momo\nPay',
    worker: 'Phạm\nMinh D',
    amount: '15.000.000\nđ',
    amountColor: 'text-[#047857]',
    type: 'THANH\nTOÁN',
    typeColor: 'bg-blue-50 text-blue-700',
    status: 'Thất\nbại',
    statusIcon: <XCircle className="h-3.5 w-3.5 text-rose-600 mt-0.5" />,
    statusColor: 'text-rose-600',
    date: '23/05/2024'
  }
];

// --- MOCK DATA HÓA ĐƠN ---
const mockInvoices = [
  {
    id: 'INV-2024-001',
    customer: 'VinGroup Tech',
    taxCode: '0101245486',
    amount: '12.500.000 đ',
    date: '25/05/2024',
    status: 'Đã xuất',
    statusColor: 'text-emerald-600 bg-emerald-50'
  },
  {
    id: 'INV-2024-002',
    customer: 'Shopee VN',
    taxCode: '0314922220',
    amount: '45.200.000 đ',
    date: '24/05/2024',
    status: 'Chờ duyệt',
    statusColor: 'text-amber-600 bg-amber-50'
  },
  {
    id: 'INV-2024-003',
    customer: 'FPT Software',
    taxCode: '0104111983',
    amount: '8.200.000 đ',
    date: '23/05/2024',
    status: 'Đã xuất',
    statusColor: 'text-emerald-600 bg-emerald-50'
  }
];

export const FinancePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transactions' | 'invoices'>('transactions');

  return (
    <div className="space-y-6">
      {/* Nút thao tác góc phải */}
      <div className="flex justify-end">
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#047857] text-white rounded-md hover:bg-[#065f46] font-medium text-sm transition-colors shadow-sm">
          <Download className="h-4 w-4" />
          <span>Xuất báo cáo tháng</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setActiveTab('transactions')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'transactions' 
              ? 'bg-[#047857] text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
          }`}
        >
          Lịch sử giao dịch
        </button>
        <button 
          onClick={() => setActiveTab('invoices')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'invoices' 
              ? 'bg-[#047857] text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
          }`}
        >
          Hóa đơn điện tử
        </button>
      </div>

      {/* Nội dung Tab */}
      {activeTab === 'transactions' ? (
        <div className="space-y-4">
          {/* Toolbar Transactions */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <div className="flex space-x-3 w-full sm:w-auto">
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                <Filter className="h-3.5 w-3.5 text-slate-400" />
                <span>Lọc theo: Tất cả trạng thái</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 rotate-90 ml-1" />
              </button>
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>30 ngày qua</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 rotate-90 ml-1" />
              </button>
            </div>
            <div className="w-full sm:w-auto text-right text-slate-500">
              Hiển thị 1 - 25 trong 1,248 giao dịch
            </div>
          </div>

          {/* Table Transactions */}
          <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-600 font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-5 align-middle">MÃ GIAO<br/>DỊCH</th>
                    <th className="px-4 py-5 align-middle">DOANH NGHIỆP</th>
                    <th className="px-4 py-5 align-middle">WORKER</th>
                    <th className="px-4 py-5 align-middle text-right">SỐ TIỀN</th>
                    <th className="px-4 py-5 align-middle text-center">LOẠI</th>
                    <th className="px-4 py-5 align-middle">TRẠNG<br/>THÁI</th>
                    <th className="px-4 py-5 align-middle">NGÀY THỰC<br/>HIỆN</th>
                    <th className="px-6 py-5 align-middle text-center">THAO<br/>TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mockTransactions.map((trx, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-slate-700 whitespace-pre-line leading-relaxed">
                        {trx.idPrefix}<br/>{trx.idSuffix}
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 p-1.5 bg-[#eef2ff] text-indigo-500 rounded flex-shrink-0">
                            <Building2 className="h-3 w-3" />
                          </div>
                          <span className="font-medium text-slate-700 whitespace-pre-line leading-relaxed">{trx.business}</span>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-slate-700 font-medium whitespace-pre-line leading-relaxed">{trx.worker}</td>
                      <td className={`px-4 py-5 text-right font-bold whitespace-pre-line leading-relaxed ${trx.amountColor}`}>
                        {trx.amount}
                      </td>
                      <td className="px-4 py-5 text-center">
                        <div className={`inline-block px-1.5 py-1 rounded text-[9px] font-bold tracking-wide whitespace-pre-line leading-tight text-center ${trx.typeColor}`}>
                          {trx.type}
                        </div>
                      </td>
                      <td className="px-4 py-5">
                        <div className={`flex items-start space-x-1.5 font-bold text-[12px] whitespace-pre-line leading-tight ${trx.statusColor}`}>
                          {trx.statusIcon}
                          <span>{trx.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-slate-600 font-medium">{trx.date}</td>
                      <td className="px-6 py-5 text-center">
                        <button className="text-[#047857] hover:underline font-bold text-xs whitespace-pre-line leading-relaxed">
                          Xem<br/>hóa<br/>đơn
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Transactions */}
            <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 border-t border-slate-50 gap-4">
              <div className="font-medium text-slate-500">
                Hiển thị 1 - 25 của 1,248 giao dịch
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
                  50
                </button>
                <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Toolbar Invoices */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <div className="flex space-x-3 w-full sm:w-auto">
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                <Filter className="h-3.5 w-3.5 text-slate-400" />
                <span>Lọc theo: Tất cả trạng thái</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 rotate-90 ml-1" />
              </button>
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>Tháng này</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 rotate-90 ml-1" />
              </button>
            </div>
          </div>

          {/* Table Invoices */}
          <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-600 font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-5">Mã hóa đơn</th>
                    <th className="px-6 py-5">Khách hàng</th>
                    <th className="px-6 py-5">Mã số thuế</th>
                    <th className="px-6 py-5 text-right">Tổng tiền</th>
                    <th className="px-6 py-5">Ngày lập</th>
                    <th className="px-6 py-5">Trạng thái</th>
                    <th className="px-6 py-5 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mockInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-slate-700">{inv.id}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded flex-shrink-0">
                            <FileText className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium text-slate-700">{inv.customer}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-600 font-medium">{inv.taxCode}</td>
                      <td className="px-6 py-5 text-right font-bold text-slate-800">
                        {inv.amount}
                      </td>
                      <td className="px-6 py-5 text-slate-600 font-medium">{inv.date}</td>
                      <td className="px-6 py-5">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${inv.statusColor}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button className="p-2 text-slate-400 hover:text-[#047857] hover:bg-emerald-50 rounded-lg transition-colors" title="Tải PDF">
                          <DownloadCloud className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Invoices */}
            <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 border-t border-slate-50 gap-4">
              <div className="font-medium text-slate-500">
                Hiển thị 1 - 3 của 3 hóa đơn
              </div>
              <div className="flex items-center space-x-1">
                <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50 transition-colors" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="px-3.5 py-1.5 bg-[#047857] text-white rounded-md font-medium shadow-sm">
                  1
                </button>
                <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50 transition-colors" disabled>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards (Footer) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Card 1 */}
        <div className="bg-[#eff6ff] p-6 rounded-xl relative overflow-hidden">
          <p className="text-[13px] font-medium text-slate-600 mb-2">Tổng doanh thu kỳ này</p>
          <h3 className="text-2xl font-semibold text-slate-800 mb-3 tracking-wide">4.829.500.000 đ</h3>
          <div className="flex items-center text-[11px] font-bold text-[#047857]">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+12.4% so với tháng trước</span>
          </div>
          {/* Decorative graphic bottom right */}
          <div className="absolute right-0 bottom-0 text-blue-100 opacity-50 translate-x-1/4 translate-y-1/4">
             <div className="w-24 h-24 rounded-full border-[8px] border-blue-200"></div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-[#eef2ff] p-6 rounded-xl relative overflow-hidden">
          <p className="text-[13px] font-medium text-slate-600 mb-2">Hóa đơn chờ xử lý</p>
          <h3 className="text-2xl font-semibold text-slate-800 mb-3 tracking-wide">42 <span className="text-xl font-medium">Hóa đơn</span></h3>
          <div className="flex items-center text-[11px] font-bold text-amber-600">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>Yêu cầu phê duyệt gấp</span>
          </div>
          {/* Decorative graphic bottom right */}
          <div className="absolute right-0 bottom-0 text-indigo-100 opacity-50 translate-x-1/4 translate-y-1/4">
             <div className="w-24 h-24 rounded border-[8px] border-indigo-200"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f0fdf4] p-6 rounded-xl relative overflow-hidden border border-[#d1fae5]">
          <div className="relative z-10">
            <p className="text-[13px] font-medium text-[#047857] mb-2">Dư nợ ký quỹ</p>
            <h3 className="text-2xl font-semibold text-[#047857] mb-3 tracking-wide">892.300.000 đ</h3>
            <div className="flex items-center text-[11px] font-bold text-emerald-500">
              <ShieldCheck className="h-3 w-3 mr-1" />
              <span>Đã được bảo mật 100%</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 text-emerald-100 opacity-60 z-0 translate-x-1/4 translate-y-1/4">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
        </div>
      </div>

    </div>
  );
};
