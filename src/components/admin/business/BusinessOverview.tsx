import React from 'react';
import { Building2, Mail, ShieldCheck } from 'lucide-react';

interface BusinessOverviewProps {
  data: {
    partnerId: string;
    taxCode: string;
    email: string;
    legalRepresentative: string;
    joinDate: string;
    status: string;
    type: string;
  };
}

export const BusinessOverview: React.FC<BusinessOverviewProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-6">
      {/* Logo & Tên chính */}
      <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden mb-3">
          <Building2 className="h-8 w-8 text-cyan-700" />
        </div>
        <h2 className="text-sm font-bold text-slate-800">Công ty Cổ phần Công nghệ VTI</h2>
        <p className="text-[11px] text-slate-400 mt-0.5">{data.type}</p>
        
        <span className="mt-3 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
          {data.status}
        </span>
      </div>

      {/* Chi tiết thông tin hành chính */}
      <div className="space-y-4 text-xs">
        <div>
          <p className="text-slate-400 font-medium mb-1">Mã đối tác (ID)</p>
          <p className="font-mono font-semibold text-slate-700">{data.partnerId}</p>
        </div>
        <div>
          <p className="text-slate-400 font-medium mb-1">Mã số thuế</p>
          <p className="font-mono text-slate-700 font-semibold">{data.taxCode}</p>
        </div>
        <div>
          <p className="text-slate-400 font-medium mb-1">Email doanh nghiệp</p>
          <p className="text-slate-700 font-medium flex items-center">
            <Mail className="h-3.5 w-3.5 text-slate-400 mr-1.5 shrink-0" />
            {data.email}
          </p>
        </div>
        <div>
          <p className="text-slate-400 font-medium mb-1">Đại diện pháp luật</p>
          <p className="text-slate-700 font-semibold">{data.legalRepresentative}</p>
        </div>
        <div>
          <p className="text-slate-400 font-medium mb-1">Ngày tham gia hệ thống</p>
          <p className="text-slate-600 font-medium">{data.joinDate}</p>
        </div>
        
        {/* Trạng thái KYB */}
        <div className="pt-2">
          <p className="text-slate-400 font-medium mb-1.5">Trạng thái xác thực</p>
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 flex items-start space-x-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-700 text-[11px]">KYB VERIFIED</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Xác thực doanh nghiệp cấp cao thành công.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};