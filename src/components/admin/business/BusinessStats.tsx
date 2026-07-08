import React from 'react';
import { ArrowUpRight, FileCheck, CheckCircle2 } from 'lucide-react';

export const BusinessStats: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Thẻ Thống Kê 1: Doanh thu GMV */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tổng doanh thu (GMV)</span>
          <div className="w-7 h-7 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-bold text-slate-800">12,400,000,000 đ</h3>
          <p className="text-[11px] text-emerald-500 font-medium mt-1">
            ↑ +14.2% <span className="text-slate-400 font-normal">so với tháng trước</span>
          </p>
        </div>
      </div>

      {/* Thẻ Thống Kê 2: Quy mô Hợp đồng */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Số lượng hợp đồng</span>
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <FileCheck className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-bold text-slate-800">113 Hợp đồng</h3>
          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-50 text-[10px] text-slate-400">
            <div>Đang xử lý: <span className="font-semibold text-slate-700">24</span></div>
            <div>Đã lưu trữ: <span className="font-semibold text-slate-700">89</span></div>
          </div>
        </div>
      </div>

      {/* Thẻ Thống Kê 3: Tỷ lệ tranh chấp an toàn */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tỷ lệ tranh chấp</span>
          <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-bold text-slate-800">0.00 %</h3>
          <p className="text-[11px] text-emerald-600 font-medium mt-1 bg-emerald-50/60 px-2 py-0.5 rounded-md inline-block">
            Chỉ số an toàn tuyệt đối
          </p>
        </div>
      </div>

      {/* Hành động quản trị nâng cao */}
      <div className="pt-2">
        <button className="w-full bg-slate-900 text-white text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-800 transition shadow-sm shadow-slate-900/10">
          Cấu hình quyền đối tác
        </button>
      </div>
    </div>
  );
};