import React from 'react';

export const Step2OCR: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
          <span className="text-xs font-bold text-slate-400">🪪 Mặt trước CCCD</span>
          <img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=600" alt="CCCD Front" className="w-full h-48 object-cover rounded-xl border border-slate-200 shadow-inner" />
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
          <span className="text-xs font-bold text-slate-400">🪪 Mặt sau CCCD</span>
          <img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=600" alt="CCCD Back" className="w-full h-48 object-cover rounded-xl border border-slate-200 shadow-inner" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <h4 className="text-sm font-bold text-slate-800">Đối soát dữ liệu OCR</h4>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">✓ AI Đã đối soát thành công</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-3">Trường thông tin</th>
                <th className="p-3">Kết quả OCR</th>
                <th className="p-3">Dữ liệu nhập</th>
                <th className="p-3">Trạng thái</th>
                <th className="p-3">Độ tin cậy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-medium">
              <tr className="hover:bg-slate-50/40">
                <td className="p-3 text-slate-500 font-semibold">Số CCCD</td>
                <td className="p-3 text-slate-800 font-mono">031892008124</td>
                <td className="p-3 text-slate-800 font-mono">031892008124</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">Khớp</span></td>
                <td className="p-3 font-semibold text-slate-800">99.8%</td>
              </tr>
              <tr className="hover:bg-slate-50/40 bg-rose-50/20">
                <td className="p-3 text-slate-500 font-semibold">Ngày sinh</td>
                <td className="p-3 text-slate-800 font-mono">12/05/1992</td>
                <td className="p-3 text-slate-800 font-mono">15/05/1992</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[10px]">⚠️ Không khớp</span></td>
                <td className="p-3 font-semibold text-red-600">94.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};