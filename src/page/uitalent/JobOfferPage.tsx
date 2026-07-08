import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Check, AlertTriangle, X } from 'lucide-react';
import companyLogo from '../../assets/hi.jpg';

export const JobOfferPage: React.FC = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      
      {/* Banner */}
      <div className="bg-[#047857] text-white pt-16 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Verified Employer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Thư mời làm việc</h1>
          <p className="text-emerald-100 font-medium text-lg">
            Chúc mừng bạn đã trúng tuyển vị trí thiết kế từ ABC Corp!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-6 -mt-20 pb-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          <div className="p-8 md:p-12">
            
            {/* Header Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-12 text-center md:text-left border-b border-slate-100 pb-10">
              <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm p-2 shrink-0">
                <img src={companyLogo} alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2 leading-tight">Senior UI/UX Designer</h2>
                <p className="text-lg font-medium text-slate-500 mb-4">ABC Corp • Toàn quốc (Remote)</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <span className="px-3 py-1.5 bg-emerald-50 text-[#047857] text-xs font-bold uppercase tracking-widest rounded-lg">
                    Full-time
                  </span>
                  <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-lg">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
              
              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Chi tiết công việc</h3>
                <div className="space-y-6">
                  <div>
                    <span className="block text-sm font-medium text-slate-500 mb-1">Mức lương đề nghị</span>
                    <span className="text-xl font-bold text-[#047857]">$3,500 / tháng</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-500 mb-1">Thời gian bắt đầu dự kiến</span>
                    <span className="text-base font-bold text-slate-800">01 Tháng 11, 2024</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-500 mb-1">Quản lý trực tiếp</span>
                    <span className="text-base font-bold text-slate-800">Trần Thị B (Head of Design)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Quyền lợi bổ sung</h3>
                <ul className="space-y-4">
                  {[
                    'Thưởng cuối năm lên đến 2 tháng lương',
                    'Được cấp Macbook Pro M3 Max & Màn hình 4K',
                    'Bảo hiểm sức khỏe cao cấp cho cả gia đình',
                    'Trợ cấp làm việc từ xa (Internet, Setup góc làm việc)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#047857] shrink-0" />
                      <span className="text-sm font-medium text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Message from HR */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-12 relative">
              <div className="absolute top-6 left-6 text-4xl text-slate-200 font-serif leading-none">"</div>
              <p className="text-sm font-medium text-slate-600 italic leading-relaxed relative z-10 px-8">
                Chào bạn, chúng tôi rất ấn tượng với bài test và phần phỏng vấn của bạn. ABC Corp tin rằng kỹ năng của bạn hoàn toàn phù hợp với định hướng phát triển sản phẩm sắp tới. Rất mong được chào đón bạn gia nhập team!
              </p>
              <div className="absolute bottom-6 right-6 text-4xl text-slate-200 font-serif leading-none rotate-180">"</div>
            </div>

            {/* Deadline */}
            <div className="flex items-center gap-2 mb-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-xs font-medium text-amber-700">
                Vui lòng phản hồi thư mời làm việc này trước <span className="font-bold">23:59 - 28/10/2024</span>. Sau thời gian này, Offer sẽ tự động hết hạn.
              </p>
            </div>

            {/* Signature */}
            <div className="border-t border-slate-100 pt-8 mb-12 flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200">
                <img src={companyLogo} alt="Avatar" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Trần Thị B</p>
                <p className="text-xs font-medium text-slate-500">Giám đốc nhân sự, ABC Corp</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-100">
              <button className="flex-1 w-full px-4 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors text-center whitespace-nowrap">
                Xem xét thêm
              </button>
              <button 
                onClick={() => navigate('/talent/dashboard')}
                className="flex-1 w-full px-4 py-3.5 bg-white border border-red-500 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors text-center whitespace-nowrap"
              >
                Từ chối
              </button>
              <button 
                onClick={() => setIsConfirmOpen(true)}
                className="flex-1 w-full px-4 py-3.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Check className="h-4 w-4" />
                Đồng ý
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800 font-serif">Xác nhận đồng ý dự án</h3>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-100">
                <Check className="h-8 w-8 text-[#047857]" />
              </div>
              <p className="text-center text-sm font-medium text-slate-600 leading-relaxed">
                Bạn xác nhận đồng ý tiếp nhận dự án <strong className="text-slate-800">Senior UI/UX Designer</strong> từ ABC Corp. Sau khi xác nhận, bạn sẽ được chuyển đến trang Ký Thỏa thuận Bảo mật (NDA).
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className="flex-1 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Từ chối
              </button>
              <Link 
                to="/talent/contracts/1/nda"
                className="flex-1 px-4 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors text-center shadow-sm"
              >
                Đồng ý
              </Link>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};
