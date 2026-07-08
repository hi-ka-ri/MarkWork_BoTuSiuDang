import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Plus, Eye, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

const mockContracts = [
  {
    id: 'v1.2.5',
    sub: 'Current Production',
    date: '15/10/2023',
    authorInitials: 'LN',
    authorName: 'Lê Nam',
    status: 'Đang áp dụng',
    statusColor: 'bg-emerald-100 text-[#047857]',
    statusDot: 'bg-[#047857]',
    isActive: true,
  },
  {
    id: 'v1.3.0-beta',
    date: '28/10/2023',
    authorInitials: 'TM',
    authorName: 'Trần Minh',
    status: 'Chờ duyệt',
    statusColor: 'bg-amber-100 text-[#b45309]',
    statusDot: 'bg-[#b45309]',
    isActive: true,
  },
  {
    id: 'v1.3.0-draft',
    date: '02/11/2023',
    authorInitials: 'HP',
    authorName: 'Hoàng Phan',
    status: 'Nháp',
    statusColor: 'bg-slate-200 text-slate-700',
    statusDot: 'bg-slate-500',
    isActive: true,
  },
  {
    id: 'v1.2.4',
    date: '01/09/2023',
    authorInitials: 'LN',
    authorName: 'Lê Nam',
    status: 'Lưu trữ',
    statusColor: 'bg-slate-100 text-slate-400',
    statusDot: 'bg-slate-300',
    isActive: false,
  }
];

export const ContractsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('task');

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-[400px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm mẫu hợp đồng..." 
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#047857] shadow-sm transition-colors"
          />
        </div>
        
        <button 
          onClick={() => navigate('/admin/contracts/edit')}
          className="flex items-center space-x-2 px-4 py-2.5 bg-[#047857] text-white rounded-lg hover:bg-[#065f46] font-semibold text-sm transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Tạo phiên bản mới</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm">
        
        {/* Tabs & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('task')}
              className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 ${
                activeTab === 'task' 
                  ? 'border-[#047857] text-[#047857] bg-emerald-50/30' 
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Hợp đồng Task/Service
            </button>
            <button 
              onClick={() => setActiveTab('internship')}
              className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 ${
                activeTab === 'internship' 
                  ? 'border-[#047857] text-[#047857] bg-emerald-50/30' 
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Hợp đồng Internship
            </button>
          </div>
          
          <div className="px-6 py-3 sm:py-0 flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-500">Sắp xếp:</span>
            <button className="flex items-center space-x-1 text-sm font-bold text-[#047857] hover:text-[#065f46]">
              <span>Mới nhất</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">PHIÊN BẢN</th>
                <th className="px-6 py-4">NGÀY TẠO</th>
                <th className="px-6 py-4">NGƯỜI SOẠN</th>
                <th className="px-6 py-4">TRẠNG THÁI</th>
                <th className="px-6 py-4 text-center">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockContracts.map((contract, idx) => (
                <tr key={idx} className={`hover:bg-slate-50 transition-colors ${!contract.isActive ? 'opacity-50 grayscale' : ''}`}>
                  <td className="px-6 py-5">
                    <div className="font-bold text-[#047857] text-[15px]">{contract.id}</div>
                    {contract.sub && (
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">{contract.sub}</div>
                    )}
                  </td>
                  <td className="px-6 py-5 font-medium text-slate-600">
                    {contract.date}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        contract.isActive ? 'bg-emerald-100 text-[#047857]' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {contract.authorInitials}
                      </div>
                      <span className="font-bold text-slate-700">{contract.authorName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${contract.statusColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${contract.statusDot}`}></div>
                      <span>{contract.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button 
                      onClick={() => navigate('/admin/contracts/edit')}
                      className={`p-2 rounded-lg transition-colors ${
                        contract.isActive ? 'text-[#047857] hover:bg-emerald-50' : 'text-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 border-t border-slate-50 gap-4">
          <div className="font-medium text-slate-500">
            Hiển thị 1 - 4 của 24 phiên bản
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
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
