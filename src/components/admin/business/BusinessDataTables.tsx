import React, { useState } from 'react';
import { Search, ExternalLink, Download, MoreVertical, RefreshCw } from 'lucide-react';

const mockContracts = [
  { id: 'HD-2026-0089', name: 'Hợp đồng Cung cấp Nhân sự IT Quy mô lớn', type: 'Outsourcing', value: '1.2B đ', status: 'Đang chạy', date: '12/05/2026' },
  { id: 'HD-2026-0045', name: 'Hợp đồng Phát triển Module LMS - Giai đoạn 1', type: 'Fixed-price', value: '450M đ', status: 'Hoàn thành', date: '18/02/2026' },
  { id: 'HD-2025-0734', name: 'Bảo trì Hệ thống & Hạ tầng Cloud AWS', type: 'Maintenance', value: '85M đ/tháng', status: 'Tạm dừng', date: '14/08/2025' },
];

export const BusinessDataTables: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contracts' | 'transactions' | 'logs'>('contracts');
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Táp điều hướng chuẩn Minimalist */}
      <div className="border-b border-slate-100 px-6 flex items-center justify-between bg-white">
        <div className="flex space-x-8 text-xs font-semibold">
          {(['contracts', 'transactions', 'logs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 border-b-2 transition-all relative outline-none ${
                activeTab === tab 
                  ? 'border-slate-800 text-slate-900 font-bold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'contracts' && 'Danh sách hợp đồng'}
              {tab === 'transactions' && 'Lịch sử giao dịch'}
              {tab === 'logs' && 'Nhật ký tác vụ'}
            </button>
          ))}
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition"><RefreshCw className="h-3.5 w-3.5" /></button>
      </div>

      {/* Thớt tính năng lọc/tìm kiếm */}
      <div className="p-4 bg-slate-50/30 border-b border-slate-100 flex items-center justify-between gap-4">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm nhanh..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-xs rounded-xl pl-9 pr-4 py-2 border border-slate-200/80 focus:outline-none focus:ring-1 focus:ring-slate-400 transition"
          />
        </div>
        <select className="bg-white border border-slate-200/80 text-xs rounded-xl px-3 py-2 text-slate-600 focus:outline-none cursor-pointer">
          <option>Tất cả bộ lọc</option>
          <option>Mới nhất</option>
          <option>Đang xử lý</option>
        </select>
      </div>

      {/* Nội dung dữ liệu */}
      <div className="w-full">
        {activeTab === 'contracts' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 tracking-wider uppercase border-b border-slate-100">
                  <th className="py-3 px-5">Mã HĐ</th>
                  <th className="py-3 px-4">Chi tiết hợp đồng</th>
                  <th className="py-3 px-4 text-center">Giá trị</th>
                  <th className="py-3 px-4 text-center">Trạng thái</th>
                  <th className="py-3 px-5 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {mockContracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-slate-50/30 transition">
                    <td className="py-4 px-5 font-mono font-bold text-slate-800">{contract.id}</td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-slate-800 line-clamp-1">{contract.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{contract.type} • {contract.date}</p>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-slate-700">{contract.value}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        contract.status === 'Đang chạy' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        contract.status === 'Hoàn thành' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>{contract.status}</span>
                    </td>
                    <td className="py-4 px-5 text-right text-slate-400 space-x-2.5">
                      <button className="hover:text-slate-800 transition"><ExternalLink className="h-3.5 w-3.5 inline" /></button>
                      <button className="hover:text-slate-800 transition"><Download className="h-3.5 w-3.5 inline" /></button>
                      <button className="hover:text-slate-800 transition"><MoreVertical className="h-3.5 w-3.5 inline" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Các Tab khác để trống hoặc render tối giản tránh loãng */}
        {activeTab === 'transactions' && (
          <div className="p-8 text-center text-xs text-slate-400 font-medium">Không có dữ liệu giao dịch phát sinh.</div>
        )}
        {activeTab === 'logs' && (
          <div className="p-8 text-center text-xs text-slate-400 font-medium">Không có dữ liệu tác vụ hệ thống.</div>
        )}
      </div>
    </div>
  );
};