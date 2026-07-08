import React, { useState } from 'react';
import { ChevronRight, Filter, AlignJustify, Search, Star, Edit2, UserPlus, Info } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const CompanyCandidatesPage: React.FC = () => {
  const [showHireModal, setShowHireModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const handleOpenHireModal = (name: string) => {
    setSelectedCandidate(name);
    setShowHireModal(true);
  };
  return (
    <div className="w-full pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
        <span className="hover:text-slate-800 cursor-pointer">Dashboard</span>
        <ChevronRight className="h-3 w-3" />
        <span className="hover:text-slate-800 cursor-pointer">Quản lý Task</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-[#047857]">Danh sách ứng viên</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 font-serif mb-3">UI/UX Designer - Website</h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full flex items-center gap-1.5 shadow-sm">
              <UsersIcon className="h-3.5 w-3.5 text-[#047857]" /> 3 ứng viên đang chờ
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full flex items-center gap-1.5 shadow-sm">
              <CalendarIcon className="h-3.5 w-3.5 text-amber-600" /> Hạn chót: 24/10/2023
            </span>
          </div>
        </div>
        <button className="px-5 py-2 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm">
          <Edit2 className="h-4 w-4" /> Chỉnh sửa Task
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-bold text-slate-800">Hồ sơ ứng tuyển</h2>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-[#047857] hover:border-[#047857] transition-all shadow-sm">
            <Filter className="h-4 w-4" />
          </button>
          <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-[#047857] hover:border-[#047857] transition-all shadow-sm">
            <AlignJustify className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Candidate List */}
      <div className="space-y-4 mb-8">
        
        {/* Candidate 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between md:items-center shadow-sm hover:border-[#047857]/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={avatarImg} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover border border-slate-100" />
              <div className="absolute -bottom-2 -right-2 bg-[#047857] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                85%
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-base font-bold text-slate-800">Nguyễn Minh Anh</h3>
                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded">Chờ duyệt</span>
              </div>
              <p className="text-xs font-medium text-slate-500 mb-2">Senior UI Designer • 5 năm kinh nghiệm</p>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current text-slate-200" />
                <span className="ml-1 text-xs font-bold text-slate-500">(4.8/5)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#047857] text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
              Xem hồ sơ
            </button>
            <button 
              onClick={() => handleOpenHireModal('Nguyễn Minh Anh')}
              className="px-6 py-2 bg-[#047857] text-white font-bold text-sm rounded-xl hover:bg-[#065f46] transition-colors shadow-sm"
            >
              Duyệt
            </button>
            <button className="px-4 py-2 bg-white border border-rose-500 text-rose-500 font-bold text-sm rounded-xl hover:bg-rose-50 transition-colors">
              Từ chối
            </button>
          </div>
        </div>

        {/* Candidate 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between md:items-center shadow-sm hover:border-[#047857]/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={avatarImg} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover border border-slate-100" />
              <div className="absolute -bottom-2 -right-2 bg-[#047857] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                92%
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-base font-bold text-slate-800">Trần Hoàng Long</h3>
                <span className="px-2 py-0.5 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded">Đã duyệt</span>
              </div>
              <p className="text-xs font-medium text-slate-500 mb-2">Creative Lead • 8 năm kinh nghiệm</p>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="ml-1 text-xs font-bold text-slate-500">(5.0/5)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#047857] text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
              Xem hồ sơ
            </button>
            <button className="px-6 py-2 bg-slate-200 text-slate-500 font-bold text-sm rounded-xl cursor-not-allowed">
              Đã duyệt
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-500 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors">
              Từ chối
            </button>
          </div>
        </div>

        {/* Candidate 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between md:items-center shadow-sm hover:border-[#047857]/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={avatarImg} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover border border-slate-100" />
              <div className="absolute -bottom-2 -right-2 bg-[#047857] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                78%
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-base font-bold text-slate-800">Lê Thị Thu Hà</h3>
                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded">Chờ duyệt</span>
              </div>
              <p className="text-xs font-medium text-slate-500 mb-2">Product Designer • 3 năm kinh nghiệm</p>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current text-slate-200" />
                <span className="ml-1 text-xs font-bold text-slate-500">(4.0/5)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#047857] text-[#047857] font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
              Xem hồ sơ
            </button>
            <button className="px-6 py-2 bg-[#047857] text-white font-bold text-sm rounded-xl hover:bg-[#065f46] transition-colors shadow-sm">
              Duyệt
            </button>
            <button className="px-4 py-2 bg-white border border-rose-500 text-rose-500 font-bold text-sm rounded-xl hover:bg-rose-50 transition-colors">
              Từ chối
            </button>
          </div>
        </div>

      </div>

      {/* Compare Sticky Bar */}
      <div className="sticky bottom-8 bg-white border border-slate-200 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col md:flex-row justify-between items-center z-10 gap-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5 text-[#047857] rounded border-slate-300 focus:ring-[#047857]" />
          <span className="font-bold text-slate-800">So sánh ứng viên</span>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">Chọn tối đa 3 người</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">Bạn đã chọn <strong className="text-[#047857]">0</strong> ứng viên để so sánh.</span>
          <button className="px-6 py-2.5 bg-indigo-50 text-indigo-400 font-bold rounded-xl cursor-not-allowed">
            Bắt đầu so sánh
          </button>
        </div>
      </div>

      {/* Hire Modal */}
      {showHireModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-8 pb-6 text-center border-b border-slate-100 shrink-0">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                <UserPlus className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 font-serif mb-2">Chuyển đổi sang tuyển dụng chính thức</h2>
              <p className="text-sm font-medium text-slate-500">Đề nghị hợp đồng dài hạn cho <strong className="text-slate-800">{selectedCandidate}</strong></p>
            </div>
            
            <div className="p-8 space-y-6 overflow-y-auto min-h-0">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Vị trí công việc</label>
                <input 
                  type="text" 
                  placeholder="Ví dụ: Senior Product Designer"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857]"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Mức lương (Monthly)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="35.000.000"
                      className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-[#047857]"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">VND</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Ngày bắt đầu</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Ghi chú kèm theo</label>
                <textarea 
                  rows={3}
                  placeholder="Nhập lời nhắn hoặc các điều khoản bổ sung..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] resize-none"
                ></textarea>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    Phí chuyển đổi nhân sự (Conversion Fee)
                    <Info className="h-3.5 w-3.5 text-slate-400" />
                  </h4>
                </div>
                <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
                  Khoản phí một lần áp dụng khi chuyển đổi freelancer sang nhân viên chính thức theo điều khoản WorkMarket.
                </p>
                <div className="flex justify-between items-end pt-4 border-t border-slate-200">
                  <span className="text-sm font-bold text-slate-600">Tổng cộng:</span>
                  <span className="text-lg font-bold text-[#047857]">15.000.000 VND</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex gap-4 shrink-0">
              <button 
                onClick={() => setShowHireModal(false)}
                className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                Hủy bỏ
              </button>
              <button className="flex-1 py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm">
                Gửi đề nghị
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Helper icons
const UsersIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const CalendarIcon = (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
