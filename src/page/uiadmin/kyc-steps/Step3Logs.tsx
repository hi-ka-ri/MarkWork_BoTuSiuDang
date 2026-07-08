import React from 'react';

export const Step3Logs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-slate-800">Tiến trình xác thực</h4>
        <div className="relative border-l-2 border-slate-100 pl-4 space-y-6 text-xs">
          <div className="relative">
            <span className="absolute -left-[21px] top-0.5 h-3 w-3 rounded-full bg-emerald-600"></span>
            <p className="text-slate-400">2026-05-24 14:30:12</p>
            <h5 className="font-bold text-slate-800 mt-0.5">Hồ sơ được phê duyệt bởi Admin_Hieu</h5>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex justify-between items-center">
          <h4 className="text-sm font-bold text-slate-800">Lịch sử truy cập & Thao tác</h4>
          <span className="text-[10px] text-slate-400">🚀 Đang cập nhật trực tiếp</span>
        </div>
        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-3">Thời gian</th>
                <th className="p-3">Người thực hiện</th>
                <th className="p-3">Hành động</th>
                <th className="p-3">Thiết bị</th>
                <th className="p-3">Địa chỉ IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 text-slate-400">24/05/2026 14:30</td>
                <td className="p-3 font-semibold text-slate-700">Admin_Hieu</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">Phê duyệt</span></td>
                <td className="p-3 text-slate-500">macOS / Chrome</td>
                <td className="p-3 font-mono text-slate-600">118.69.190.245</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};