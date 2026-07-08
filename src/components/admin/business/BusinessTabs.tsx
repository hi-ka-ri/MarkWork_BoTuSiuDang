import React, { useState } from 'react';
import { Search, ExternalLink, Download, MoreVertical, RefreshCw, ArrowUpRight, ArrowDownLeft, Phone, MapPin, Globe, Wallet, CreditCard, UserCheck } from 'lucide-react';

// Mock Data nội bộ tab
const mockContracts = [
  { id: 'HD-2026-0089', name: 'Hợp đồng Cung cấp Nhân sự IT Quy mô lớn', type: 'Outsourcing', value: '1.2B đ', status: 'Đang chạy', date: '12/05/2026' },
  { id: 'HD-2026-0045', name: 'Hợp đồng Phát triển Module LMS - Giai đoạn 1', type: 'Fixed-price', value: '450M đ', status: 'Hoàn thành', date: '18/02/2026' },
  { id: 'HD-2025-0912', name: 'Tư vấn Giải pháp Bảo mật và Enterprise Security', type: 'Consulting', value: '300M đ', status: 'Đang chạy', date: '05/11/2025' },
  { id: 'HD-2025-0734', name: 'Bảo trì Hệ thống & Hạ tầng Cloud AWS', type: 'Maintenance', value: '85M đ/tháng', status: 'Tạm dừng', date: '14/08/2025' },
];

const mockTransactions = [
  { id: 'TX-99821', type: 'Rút tiền', amount: '-150,000,000 đ', account: 'Techcombank (***882)', status: 'Thành công', date: '06/07/2026 14:22' },
  { id: 'TX-99540', type: 'Nạp quỹ ký gửi', amount: '+500,000,000 đ', account: 'Ví điện tử MoMo', status: 'Thành công', date: '02/07/2026 09:15' },
  { id: 'TX-98122', type: 'Thanh toán đợt 2 HĐ-0045', amount: '-225,000,000 đ', account: 'Số dư đóng băng', status: 'Thành công', date: '28/06/2026 17:00' },
];

const mockSystemLogs = [
  { id: 1, action: 'Cập nhật trạng thái hợp đồng', details: 'Thay đổi trạng thái #HD-2026-0089 sang [Đang chạy]', user: 'Admin User', time: '10 phút trước', ip: '113.190.22.4' },
  { id: 2, action: 'Yêu cầu rút tiền ký quỹ', details: 'Khởi tạo lệnh rút 150,000,000 đ về ngân hàng', user: 'Đại diện đối tác', time: '2 giờ trước', ip: '27.72.105.18' },
];

export const BusinessTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'contracts' | 'transactions' | 'logs'>('contracts');
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-slate-100 px-6 flex items-center justify-between">
        <div className="flex space-x-6 text-xs font-medium">
          {(['info', 'contracts', 'transactions', 'logs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 uppercase tracking-wide border-b-2 transition-all ${
                activeTab === tab 
                  ? 'border-cyan-600 text-cyan-600 font-bold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'info' && 'Thông tin chung'}
              {tab === 'contracts' && 'Danh sách hợp đồng'}
              {tab === 'transactions' && 'Lịch sử giao dịch'}
              {tab === 'logs' && 'Nhật ký tác vụ'}
            </button>
          ))}
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition"><RefreshCw className="h-3.5 w-3.5" /></button>
      </div>

      {/* TAB CONTAINER CONTENT */}
      <div className="w-full">
        {/* Tab 1: Thông tin chung */}
        {activeTab === 'info' && (
          <div className="p-6 text-xs text-slate-600 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-slate-800 font-bold border-l-2 border-cyan-600 pl-2 mb-2">THÔNG TIN LIÊN HỆ</h4>
              <div className="flex items-center space-x-2"><Phone className="h-3.5 w-3.5 text-slate-400" /><span>024.7300.5656</span></div>
              <div className="flex items-start space-x-2"><MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" /><span>Tầng 7, Tòa nhà Sông Đà, Mễ Trì, Nam Từ Liêm, Hà Nội</span></div>
              <div className="flex items-center space-x-2"><Globe className="h-3.5 w-3.5 text-slate-400" /><span className="text-cyan-600 underline cursor-pointer">https://vti.com.vn</span></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-slate-800 font-bold border-l-2 border-cyan-600 pl-2 mb-2">TÀI CHÍNH & VÍ KÝ GỬI</h4>
              <div className="flex items-center space-x-2"><Wallet className="h-3.5 w-3.5 text-slate-400" /><span>Số dư khả dụng: <strong className="text-slate-800">1,420,000,000 đ</strong></span></div>
              <div className="flex items-center space-x-2"><CreditCard className="h-3.5 w-3.5 text-slate-400" /><span>Số dư đóng băng: <strong className="text-slate-800">450,000,000 đ</strong></span></div>
              <div className="flex items-center space-x-2"><UserCheck className="h-3.5 w-3.5 text-slate-400" /><span>Hạn mức ngày: <span className="text-emerald-600 font-medium">Không giới hạn</span></span></div>
            </div>
          </div>
        )}

        {/* Tab 2: Danh sách hợp đồng */}
        {activeTab === 'contracts' && (
          <>
            <div className="p-4 bg-slate-50/40 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5" />
                <input 
                  type="text" 
                  placeholder="Tìm mã hoặc tên hợp đồng..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white text-xs rounded-lg pl-9 pr-4 py-1.5 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <select className="bg-white border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 text-slate-600 focus:outline-none">
                <option>Tất cả trạng thái</option>
                <option>Đang chạy</option>
                <option>Hoàn thành</option>
                <option>Tạm dừng</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 text-[10px] font-semibold text-slate-400 tracking-wider uppercase border-b border-slate-100">
                    <th className="py-3 px-4">Mã HĐ</th>
                    <th className="py-3 px-4">Tên hợp đồng</th>
                    <th className="py-3 px-4 text-center">Giá trị</th>
                    <th className="py-3 px-4 text-center">Trạng thái</th>
                    <th className="py-3 px-4 text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                  {mockContracts.map((contract) => (
                    <tr key={contract.id} className="hover:bg-slate-50/50 transition">
                      <td className="py-3.5 px-4 font-mono font-medium text-slate-800">{contract.id}</td>
                      <td className="py-3.5 px-4 font-medium">
                        <p className="text-slate-800 line-clamp-1">{contract.name}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{contract.type} • Tạo ngày {contract.date}</p>
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-700">{contract.value}</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                          contract.status === 'Đang chạy' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                          contract.status === 'Hoàn thành' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                        }`}>{contract.status}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center text-slate-400 space-x-2">
                        <button className="hover:text-cyan-600 transition"><ExternalLink className="h-3.5 w-3.5 inline" /></button>
                        <button className="hover:text-slate-600 transition"><Download className="h-3.5 w-3.5 inline" /></button>
                        <button className="hover:text-slate-600 transition"><MoreVertical className="h-3.5 w-3.5 inline" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Tab 3: Lịch sử giao dịch */}
        {activeTab === 'transactions' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-[10px] font-semibold text-slate-400 tracking-wider uppercase border-b border-slate-100">
                  <th className="py-3 px-4">Mã Giao Dịch</th>
                  <th className="py-3 px-4">Loại hình</th>
                  <th className="py-3 px-4 text-right">Biến động</th>
                  <th className="py-3 px-4">Phương thức</th>
                  <th className="py-3 px-4 text-center">Thời gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3.5 px-4 font-mono text-slate-800 font-semibold">{tx.id}</td>
                    <td className="py-3.5 px-4 font-medium flex items-center">
                      {tx.amount.startsWith('+') ? <ArrowUpRight className="h-3.5 w-3.5 mr-1 text-emerald-500" /> : <ArrowDownLeft className="h-3.5 w-3.5 mr-1 text-red-500" />}
                      {tx.type}
                    </td>
                    <td className={`py-3.5 px-4 text-right font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-800'}`}>{tx.amount}</td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">{tx.account}</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: Nhật ký tác vụ */}
        {activeTab === 'logs' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-[10px] font-semibold text-slate-400 tracking-wider uppercase border-b border-slate-100">
                  <th className="py-3 px-4">Hành động</th>
                  <th className="py-3 px-4">Chi tiết</th>
                  <th className="py-3 px-4">Người thực hiện</th>
                  <th className="py-3 px-4 text-center">Thời gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {mockSystemLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{log.action}</td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">{log.details}</td>
                    <td className="py-3.5 px-4 font-medium">
                      <p className="text-slate-700">{log.user}</p>
                      <p className="text-[10px] text-slate-400 font-mono">IP: {log.ip}</p>
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-400">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};