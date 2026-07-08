import React from 'react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Top Header */}
        <div className="bg-[#047857] p-8 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Trophy className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 font-serif">Chúc mừng bạn!</h2>
            <p className="text-sm font-medium text-emerald-100/90 leading-relaxed max-w-[280px] mx-auto">
              Dự án "Thiết kế UI/UX App Tài chính" đã hoàn thành xuất sắc.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Đánh giá khách hàng</h3>
            <p className="text-sm font-medium text-slate-500">
              Hãy chia sẻ trải nghiệm của bạn khi làm việc cùng TechFlow Studio.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="focus:outline-none transition-transform hover:scale-110">
                <Star 
                  className={`h-8 w-8 ${star <= 4 ? 'fill-[#eab308] text-[#eab308]' : 'fill-slate-100 text-slate-200'}`} 
                />
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Nhận xét chi tiết
            </label>
            <textarea 
              rows={4}
              placeholder="Hãy viết vài lời về quá trình hợp tác, sự chuyên nghiệp và kết quả dự án..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all resize-none placeholder-slate-400"
            ></textarea>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <button className="flex-1 py-3 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors shadow-sm">
              Gửi đánh giá
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Bỏ qua
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            Đánh giá này sẽ được hiển thị công khai trên hồ sơ
          </p>
        </div>

      </div>
    </div>
  );
};
