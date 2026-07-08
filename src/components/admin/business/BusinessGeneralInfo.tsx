import React from 'react';
import { Building2, Mail, ShieldCheck, Phone, MapPin, Globe, Calendar, User } from 'lucide-react';

export const BusinessGeneralInfo: React.FC = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
      {/* Header Profile */}
      <div className="flex items-center space-x-4 pb-5 border-b border-slate-100">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-cyan-600 shrink-0 shadow-inner">
          <Building2 className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">Công ty Cổ phần Công nghệ VTI</h2>
          <p className="text-[11px] font-mono text-slate-400 mt-0.5">ID: #PARTNER-01089</p>
        </div>
      </div>

      {/* Chi tiết hành chính */}
      <div className="space-y-4 text-xs">
        <div className="flex justify-between items-center py-0.5">
          <span className="text-slate-400 font-medium">Mã số thuế</span>
          <span className="font-mono font-semibold text-slate-700">0108934125</span>
        </div>
        
        <div className="flex justify-between items-center py-0.5">
          <span className="text-slate-400 font-medium">Đại diện pháp luật</span>
          <span className="font-semibold text-slate-700 flex items-center">
            <User className="h-3.5 w-3.5 text-slate-300 mr-1.5" />
            Trần Đức Thắng
          </span>
        </div>

        <div className="flex justify-between items-center py-0.5">
          <span className="text-slate-400 font-medium">Trạng thái hoạt động</span>
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold px-2.5 py-0.5 rounded-full text-[10px] tracking-wide">
            Hoạt động
          </span>
        </div>

        <div className="flex justify-between items-center py-0.5">
          <span className="text-slate-400 font-medium">Ngày tham gia</span>
          <span className="text-slate-600 font-medium flex items-center">
            <Calendar className="h-3.5 w-3.5 text-slate-300 mr-1.5" />
            24/10/2024
          </span>
        </div>
      </div>

      {/* Thông tin liên hệ trực quan */}
      <div className="pt-5 border-t border-slate-100 space-y-3.5 text-xs text-slate-600">
        <div className="flex items-center space-x-3">
          <Mail className="h-4 w-4 text-slate-400 shrink-0" />
          <span className="font-medium">contact@vti.com.vn</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-4 w-4 text-slate-400 shrink-0" />
          <span className="font-medium">024.7300.5656</span>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed">Tầng 7, Tòa nhà Sông Đà, Mễ Trì, Nam Từ Liêm, Hà Nội</span>
        </div>
        <div className="flex items-center space-x-3">
          <Globe className="h-4 w-4 text-slate-400 shrink-0" />
          <a href="https://vti.com.vn" target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline font-medium">
            https://vti.com.vn
          </a>
        </div>
      </div>

      {/* Khối KYB rời mịn */}
      <div className="pt-2">
        <div className="bg-slate-50/60 border border-slate-100 rounded-xl p-3.5 flex items-start space-x-3">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-emerald-800 text-[11px] tracking-wider uppercase">KYB VERIFIED</p>
            <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">Doanh nghiệp đã hoàn tất đối soát pháp lý cấp cao.</p>
          </div>
        </div>
      </div>
    </div>
  );
};