import React from 'react';
import { 
  Monitor, Globe, ShieldAlert, Fingerprint, 
  UserX, Smartphone 
} from 'lucide-react';

interface Step4RiskProps {
  note: string;
  setNote: (val: string) => void;
}

export const Step4Risk: React.FC<Step4RiskProps> = ({ note, setNote }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
      
      {/* CỘT TRÁI: ĐÁNH GIÁ TỔNG QUAN TỪ AI */}
      <div className="space-y-6">
        {/* Vòng tròn Risk Score Index */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Risk Score Index</span>
          <div className="relative h-28 w-28 flex items-center justify-center my-4 rounded-full border-8 border-emerald-500">
            <span className="text-3xl font-bold text-slate-800">92<span className="text-xs text-slate-400">/100</span></span>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold text-xs">RỦI RO THẤP</span>
        </div>

        {/* Khung Khuyến dùng từ AI */}
        <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100/50 space-y-2">
          <h5 className="text-xs font-bold text-[#047857] uppercase tracking-wider flex items-center space-x-1">
            <span>💡 KHUYẾN DÙNG BỞI AI</span>
          </h5>
          <h4 className="text-sm font-bold text-slate-800 flex items-center space-x-1">✓ Phê duyệt hồ sơ</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hồ sơ có độ tin cậy cao (98.2%). Tất cả các trường sinh trắc học và giấy tờ tùy thân đều trùng khớp với cơ sở dữ liệu quốc gia.
          </p>
        </div>
      </div>

      {/* CỘT PHẢI: CHI TIẾT CÁC CHỈ SỐ ĐỐI SOÁT */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h4 className="text-sm font-bold text-slate-800">Chỉ số rủi ro chi tiết</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            
            {/* 1. Face Match Score */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <Monitor className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">Face Match Score</p>
                  <p className="text-[10px] text-slate-400">So khớp ảnh chân dung và CCCD</p>
                </div>
              </div>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">98% TỐT</span>
            </div>

            {/* 2. Liveness Detection */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <Fingerprint className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">Liveness Detection</p>
                  <p className="text-[10px] text-slate-400">Kiểm tra thực thể sống (Chống giả mạo)</p>
                </div>
              </div>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">PASS</span>
            </div>

            {/* 3. IP Geolocation */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <Globe className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">IP Geolocation</p>
                  <p className="text-[10px] text-slate-400">Vị trí đăng ký và thường trú</p>
                </div>
              </div>
              <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-[10px]">Mismatched</span>
            </div>

            {/* 4. Fraud Check */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <UserX className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">Fraud Check</p>
                  <p className="text-[10px] text-slate-400">Kiểm tra danh sách đen & Giả mạo</p>
                </div>
              </div>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">CLEAR</span>
            </div>

            {/* 5. Device Fingerprint */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <Smartphone className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">Device Fingerprint</p>
                  <p className="text-[10px] text-slate-400">Độ tin cậy của thiết bị sử dụng</p>
                </div>
              </div>
              <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px]">Tin cậy</span>
            </div>

            {/* 6. Tamper Detection */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-2.5">
                <ShieldAlert className="h-4 w-4 text-slate-400" /> 
                <div>
                  <p className="font-semibold text-slate-800">Tamper Detection</p>
                  <p className="text-[10px] text-slate-400">Kiểm tra chỉnh sửa ảnh giấy tờ</p>
                </div>
              </div>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Không phát hiện</span>
            </div>

          </div>
        </div>

        {/* Khung nhập Ghi chú nội bộ */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <label htmlFor="note" className="text-sm font-bold text-slate-800 block">
            📝 Ghi chú nội bộ (Bắt buộc nếu Từ chối)
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Nhập nhận xét chi tiết hoặc lý do yêu cầu bổ sung hồ sơ tại đây..."
            className="w-full border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-500 text-slate-800 transition-all focus:ring-2 focus:ring-emerald-500/10"
          />
        </div>
      </div>

    </div>
  );
};