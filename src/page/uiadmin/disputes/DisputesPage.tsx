import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Calendar, Eye, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

const mockDisputes = [
  {
    id: '#CLM-82910',
    business: 'TechCorp\nSolutions',
    businessInitials: 'TC',
    businessColor: 'bg-blue-50 text-blue-600',
    worker: 'Nguyễn\nVân An',
    job: 'UI/UX Design -\nMilestone 2',
    date: '24/10/2023',
    priority: 'CAO',
    priorityColor: 'text-rose-600 bg-rose-50',
    status: 'Chờ\nxử lý',
    statusColor: 'text-amber-600',
    statusDot: 'bg-amber-500'
  },
  {
    id: '#CLM-82915',
    business: 'GreenFood\nCo.',
    businessInitials: 'GF',
    businessColor: 'bg-emerald-50 text-emerald-600',
    worker: 'Trần Thị\nBích',
    job: 'Phát triển Mobile\nApp',
    date: '23/10/2023',
    priority: 'T.BÌNH',
    priorityColor: 'text-amber-600 bg-amber-50',
    status: 'Đang\nxem xét',
    statusColor: 'text-blue-600',
    statusDot: 'bg-blue-500'
  },
  {
    id: '#CLM-82922',
    business: 'NextStep\nAgency',
    businessInitials: 'NS',
    businessColor: 'bg-purple-50 text-purple-600',
    worker: 'Lê\nHoàng\nNam',
    job: 'Content Writing -\nBlog Series',
    date: '22/10/2023',
    priority: 'CAO',
    priorityColor: 'text-rose-600 bg-rose-50',
    status: 'Chờ\nxử lý',
    statusColor: 'text-amber-600',
    statusDot: 'bg-amber-500'
  },
  {
    id: '#CLM-82890',
    business: 'Swift\nMedia',
    businessInitials: 'SM',
    businessColor: 'bg-slate-100 text-slate-600',
    worker: 'Phạm\nMinh Tú',
    job: 'Video Editing\nProject',
    date: '15/10/2023',
    priority: 'THẤP',
    priorityColor: 'text-slate-500 bg-slate-100',
    status: 'Đã\nđóng',
    statusColor: 'text-slate-500',
    statusDot: 'bg-slate-400'
  }
];

export const DisputesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#047857] transition-colors"
          />
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'pending'
                ? 'bg-[#047857] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-50 border border-transparent'
            }`}
          >
            <span>Đang chờ xử lý</span>
            {activeTab === 'pending' && <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">12</span>}
          </button>
          <button 
            onClick={() => setActiveTab('reviewing')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'reviewing'
                ? 'bg-[#047857] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-50 border border-transparent'
            }`}
          >
            <span>Đang xem xét</span>
          </button>
          <button 
            onClick={() => setActiveTab('resolved')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'resolved'
                ? 'bg-[#047857] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-50 border border-transparent'
            }`}
          >
            <span>Đã giải quyết</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
        
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Mức ưu tiên</label>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#047857] font-medium cursor-pointer">
                <option>Tất cả</option>
                <option>CAO</option>
                <option>T.BÌNH</option>
                <option>THẤP</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Loại khiếu nại</label>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#047857] font-medium cursor-pointer">
                <option>Tất cả</option>
                <option>Thanh toán</option>
                <option>Chất lượng công việc</option>
                <option>Vi phạm hợp đồng</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Khoảng thời gian</label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                defaultValue="01/10/2023 - 31/10/2023"
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#047857] font-medium"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium text-slate-600">
              <span className="text-lg leading-none">&#8635;</span>
              <span>Làm mới</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-slate-100 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
              <tr>
                <th className="px-6 py-5">MÃ<br/>CLAIM</th>
                <th className="px-4 py-5">DOANH NGHIỆP</th>
                <th className="px-4 py-5">WORKER</th>
                <th className="px-4 py-5">CÔNG<br/>VIỆC/MILESTONE</th>
                <th className="px-4 py-5">NGÀY MỞ</th>
                <th className="px-4 py-5">MỨC ƯU<br/>TIÊN</th>
                <th className="px-4 py-5">TRẠNG<br/>THÁI</th>
                <th className="px-6 py-5 text-center">THAO<br/>TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockDisputes.map((dispute, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-[#047857] whitespace-pre-line leading-relaxed">
                    {dispute.id.replace('-', '-\n')}
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${dispute.businessColor}`}>
                        {dispute.businessInitials}
                      </div>
                      <span className="font-semibold text-slate-700 whitespace-pre-line leading-relaxed">{dispute.business}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(dispute.worker.replace('\n',' '))}&background=random`} alt="avatar" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-semibold text-slate-700 whitespace-pre-line leading-relaxed">{dispute.worker}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-slate-600 font-medium whitespace-pre-line leading-relaxed">
                    {dispute.job}
                  </td>
                  <td className="px-4 py-5 text-slate-500 font-medium">
                    {dispute.date}
                  </td>
                  <td className="px-4 py-5">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${dispute.priorityColor}`}>
                      {dispute.priority}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <div className={`flex items-center space-x-1.5 font-bold text-xs whitespace-pre-line leading-tight ${dispute.statusColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dispute.statusDot}`}></div>
                      <span>{dispute.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button 
                      onClick={() => navigate(`/admin/disputes/${dispute.id.replace('#', '')}`)}
                      className="p-2 text-slate-400 hover:text-[#047857] hover:bg-emerald-50 rounded-lg transition-colors"
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
            Hiển thị 1-4 trên tổng số 12 kết quả
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
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
