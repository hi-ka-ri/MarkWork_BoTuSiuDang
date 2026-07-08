import React, { useState } from 'react';
import { 
  Search, Settings, Filter, Download, ChevronLeft, ChevronRight,
  X, MessageSquare, AlertTriangle, Gavel
} from 'lucide-react';

const mockAlerts = [
  {
    id: '#BP-9921',
    business: 'VNG\nCorporation',
    worker: 'Nguyễn Văn\nA',
    task: 'Dịch thuật tài\nliệu...',
    time: '14:20 -\n24/10/2023',
    level: 'CAO',
    levelColor: 'bg-rose-100 text-rose-700',
    status: 'CHỜ XỬ\nLÝ',
    statusColor: 'bg-slate-100 text-slate-600',
  },
  {
    id: '#BP-9918',
    business: 'FPT Software',
    worker: 'Trần Thị B',
    task: 'Kiểm thử ứng\ndụng',
    time: '13:45 -\n24/10/2023',
    level: 'TRUNG\nBÌNH',
    levelColor: 'bg-orange-100 text-orange-700',
    status: 'CHỜ XỬ\nLÝ',
    statusColor: 'bg-slate-100 text-slate-600',
  },
  {
    id: '#BP-9915',
    business: 'VinFast',
    worker: 'Lê Hoàng\nNam',
    task: 'Thiết kế đồ họa\n3D',
    time: '11:12 -\n24/10/2023',
    level: 'THẤP',
    levelColor: 'bg-blue-50 text-blue-600',
    status: 'ĐÃ XỬ\nLÝ',
    statusColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: '#BP-9910',
    business: 'Shopee VN',
    worker: 'Phạm Minh\nĐức',
    task: 'Content\nMarketing',
    time: '09:30 -\n24/10/2023',
    level: 'CAO',
    levelColor: 'bg-rose-100 text-rose-700',
    status: 'CHỜ XỬ\nLÝ',
    statusColor: 'bg-slate-100 text-slate-600',
  },
  {
    id: '#BP-9905',
    business: 'Grab Holdings',
    worker: 'Hoàng Anh\nTuấn',
    task: 'Data Entry\nSupport',
    time: '08:15 -\n24/10/2023',
    level: 'THẤP',
    levelColor: 'bg-blue-50 text-blue-600',
    status: 'ĐÃ XỬ\nLÝ',
    statusColor: 'bg-emerald-100 text-emerald-700',
  }
];

export const BypassPage: React.FC = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="relative">
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm cảnh báo..." 
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#047857] transition-colors"
            />
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#047857] text-white rounded-lg hover:bg-[#065f46] transition-colors text-sm font-semibold shadow-sm">
            <Settings className="h-4 w-4" />
            <span>Cấu hình Engine</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <h4 className="text-[13px] font-bold text-slate-500 mb-2">Tất cả cảnh báo</h4>
            <div className="text-2xl font-extrabold text-slate-800">1,284</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <h4 className="text-[13px] font-bold text-slate-500 mb-2">Mức độ Thấp</h4>
            <div className="flex items-end space-x-3">
              <span className="text-2xl font-extrabold text-slate-800">842</span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-md mb-1">-12%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center border-l-[3px] border-l-[#b45309]">
            <h4 className="text-[13px] font-bold text-slate-500 mb-2">Mức độ Trung bình</h4>
            <div className="text-2xl font-extrabold text-slate-800">312</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center border-l-[3px] border-l-[#be185d]">
            <h4 className="text-[13px] font-bold text-slate-500 mb-2">Mức độ Cao</h4>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-rose-600">130</span>
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            </div>
          </div>
        </div>

        {/* Main Table Area */}
        <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-5 py-1.5 text-sm font-semibold rounded-md transition-all ${
                  activeTab === 'all' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Tất cả
              </button>
              <button 
                onClick={() => setActiveTab('low')}
                className={`px-5 py-1.5 text-sm font-semibold rounded-md transition-all ${
                  activeTab === 'low' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Thấp
              </button>
              <button 
                onClick={() => setActiveTab('medium')}
                className={`px-5 py-1.5 text-sm font-semibold rounded-md transition-all ${
                  activeTab === 'medium' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Trung bình
              </button>
              <button 
                onClick={() => setActiveTab('high')}
                className={`px-5 py-1.5 text-sm font-semibold rounded-md transition-all flex items-center space-x-1.5 ${
                  activeTab === 'high' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span>Cao</span>
                <span className="px-1.5 py-0.5 bg-rose-600 text-white text-[10px] rounded-full">130</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                <Filter className="h-4 w-4" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white border-b border-slate-100 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-5">MÃ CẢNH<br/>BÁO</th>
                  <th className="px-4 py-5">DOANH<br/>NGHIỆP</th>
                  <th className="px-4 py-5">WORKER</th>
                  <th className="px-4 py-5">TASK LIÊN<br/>QUAN</th>
                  <th className="px-4 py-5">THỜI GIAN</th>
                  <th className="px-4 py-5 text-center">MỨC ĐỘ</th>
                  <th className="px-6 py-5">TRẠNG<br/>THÁI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {mockAlerts.map((alert) => (
                  <tr 
                    key={alert.id} 
                    onClick={() => setSelectedAlert(alert.id)}
                    className={`transition-colors cursor-pointer ${
                      selectedAlert === alert.id ? 'bg-[#f0fdf4]' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-[#047857]">
                      {alert.id}
                    </td>
                    <td className="px-4 py-4 text-slate-700 font-semibold whitespace-pre-line leading-relaxed">
                      {alert.business}
                    </td>
                    <td className="px-4 py-4 text-slate-700 font-semibold whitespace-pre-line leading-relaxed">
                      {alert.worker}
                    </td>
                    <td className="px-4 py-4 text-slate-600 font-medium whitespace-pre-line leading-relaxed">
                      {alert.task}
                    </td>
                    <td className="px-4 py-4 text-slate-500 font-medium whitespace-pre-line leading-relaxed">
                      {alert.time}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest whitespace-pre-line leading-tight ${alert.levelColor}`}>
                        {alert.level === 'CAO' && <AlertTriangle className="h-3 w-3" />}
                        {alert.level === 'TRUNG\nBÌNH' && <AlertTriangle className="h-3 w-3" />}
                        {alert.level === 'THẤP' && <div className="h-3 w-3 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div></div>}
                        <span>{alert.level}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold tracking-widest whitespace-pre-line leading-tight ${alert.statusColor}`}>
                        {alert.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 border-t border-slate-50 gap-4">
            <div className="font-medium text-slate-500">
              Hiển thị 1 - 5 trên 1,284 cảnh báo
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

      {/* Detail Drawer overlay */}
      {selectedAlert && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSelectedAlert(null)}
        ></div>
      )}

      {/* Alert Detail Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          selectedAlert ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
              <span>Chi tiết cảnh báo</span>
              <span className="text-slate-500 font-medium">{selectedAlert}</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Bypass thanh toán ngoài nền tảng</p>
          </div>
          <button 
            onClick={() => setSelectedAlert(null)}
            className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">NGƯỜI GỬI</label>
              <p className="text-sm font-bold text-slate-800">Nguyễn Văn A (Worker)</p>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">MỨC ĐỘ</label>
              <p className="text-sm font-bold text-rose-600 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                <span>Rất cao (98%)</span>
              </p>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">LOẠI VI PHẠM</label>
              <p className="text-sm font-bold text-slate-800">Chia sẻ số điện thoại / Zalo</p>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">THỜI GIAN</label>
              <p className="text-sm font-bold text-slate-800">24/10/2023 - 14:20:45</p>
            </div>
          </div>

          {/* Context Chat */}
          <div>
            <div className="flex items-center space-x-2 text-slate-800 mb-4">
              <MessageSquare className="h-5 w-5 text-[#047857]" />
              <h3 className="font-bold text-[15px]">Context Chat</h3>
            </div>

            <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-5">
              
              {/* Msg 1 */}
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Worker - 14:18</p>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm font-medium text-slate-700 shadow-sm inline-block max-w-[85%] border border-slate-100">
                  Em đã hoàn thành file nháp, anh xem qua nhé.
                </div>
              </div>

              {/* Msg 2 */}
              <div className="flex flex-col items-end">
                <p className="text-xs text-slate-500 font-medium mb-1">Client - 14:19</p>
                <div className="bg-[#e2e8f0] px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-medium text-slate-800 shadow-sm inline-block max-w-[85%]">
                  Ok em, gửi file cho anh qua đây luôn đi.
                </div>
              </div>

              {/* Msg 3 (Violation) */}
              <div className="relative">
                <p className="text-xs text-slate-500 font-medium mb-1">Worker - 14:20</p>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm font-medium text-slate-700 shadow-sm inline-block max-w-[90%] border-2 border-rose-200 relative">
                  File nặng quá không upload được, anh add <span className="bg-rose-100 text-rose-700 px-1 py-0.5 rounded font-bold">Zalo 0901234567</span> em gửi qua nhé.
                  
                  {/* Warning Icon Badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-rose-600 rounded-full flex items-center justify-center border-2 border-white text-white">
                    <span className="text-[10px] font-bold">!</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Drawer Actions */}
        <div className="p-6 border-t border-slate-100 bg-[#f8fafc] space-y-3">
          <button className="w-full flex items-center justify-center space-x-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white py-3.5 rounded-lg font-bold text-[15px] transition-colors shadow-sm">
            <Gavel className="h-5 w-5" />
            <span>Ghi nhận vi phạm</span>
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-lg font-bold text-sm transition-colors flex justify-center items-center">
              Gửi cảnh cáo
            </button>
            <button className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-lg font-bold text-sm transition-colors flex justify-center items-center">
              Bỏ qua
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
