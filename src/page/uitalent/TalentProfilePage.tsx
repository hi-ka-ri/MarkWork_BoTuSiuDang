import React, { useState } from 'react';
import { 
  User, Calendar, MapPin, Search, Link as LinkIcon, 
  UploadCloud, FileText, Trash2, Check, PenLine
} from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';

export const TalentProfilePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Profile Summary */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
            
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#047857] text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-[#065f46] transition-colors shadow-sm">
                <PenLine className="h-4 w-4" />
              </button>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-1">Hồ sơ cá nhân</h2>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
              PRODUCT DESIGNER / INTERN
            </p>

            <div className="w-full bg-slate-50 rounded-xl p-5 border border-slate-100 text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-700">Hoàn thiện hồ sơ</span>
                <span className="text-sm font-bold text-[#047857]">45%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-[#047857] w-[45%] rounded-full"></div>
              </div>
              <p className="text-[11px] font-medium text-slate-500 italic">
                Cập nhật thêm kỹ năng để tăng 20% tỉ lệ được nhà tuyển dụng chú ý.
              </p>
            </div>

          </div>
        </div>

        {/* Right Column - Forms */}
        <div className="flex-1 space-y-6">
          
          {/* Thông tin cơ bản */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-[#047857]" />
              Thông tin cơ bản
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Họ và tên</label>
                <input 
                  type="text" 
                  defaultValue="Nguyễn Văn An" 
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Ngày sinh</label>
                <div className="relative">
                  <input 
                    type="date" 
                    defaultValue="1998-05-15" 
                    className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Giới tính</label>
                <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all appearance-none cursor-pointer">
                  <option>Nam</option>
                  <option>Nữ</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Thành phố</label>
                <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all appearance-none cursor-pointer">
                  <option>Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>
            </div>
          </div>

          {/* Kỹ năng cốt lõi */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Kỹ năng cốt lõi
            </h3>
            
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input 
                type="text" 
                placeholder="Tìm kiếm kỹ năng..." 
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
              />
            </div>

            <div className="mb-6">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Đã chọn</h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#047857] text-white text-[11px] font-bold rounded-full">
                  UI/UX Design
                  <button className="hover:text-emerald-200"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#047857] text-white text-[11px] font-bold rounded-full">
                  Figma
                  <button className="hover:text-emerald-200"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#047857] text-white text-[11px] font-bold rounded-full">
                  Research
                  <button className="hover:text-emerald-200"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Gợi ý</h4>
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold rounded-full hover:border-[#047857] hover:text-[#047857] transition-colors">
                  + Typography
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold rounded-full hover:border-[#047857] hover:text-[#047857] transition-colors">
                  + Prototyping
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold rounded-full hover:border-[#047857] hover:text-[#047857] transition-colors">
                  + HTML/CSS
                </button>
              </div>
            </div>
          </div>

          {/* Liên kết kỹ thuật */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-[#047857]" />
              Liên kết kỹ thuật
            </h3>
            
            <div className="space-y-4">
              <div className="flex rounded-lg overflow-hidden border border-slate-200 focus-within:border-[#047857] focus-within:ring-1 focus-within:ring-[#047857] transition-all">
                <div className="w-12 bg-slate-50 border-r border-slate-200 flex items-center justify-center text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" placeholder="github.com/your-username" className="w-full px-4 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder-slate-400" />
              </div>

              <div className="flex rounded-lg overflow-hidden border border-slate-200 focus-within:border-[#047857] focus-within:ring-1 focus-within:ring-[#047857] transition-all">
                <div className="w-12 bg-slate-50 border-r border-slate-200 flex items-center justify-center text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.9-8.92a.84.84 0 011.6 0l2.9 8.92h8.66l2.9-8.92a.84.84 0 011.6 0l2.9 8.92 1.22 3.78a.84.84 0 01-.3.94zM12 15.89l-5.6-4.06h11.2L12 15.89z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" placeholder="gitlab.com/your-username" className="w-full px-4 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder-slate-400" />
              </div>

              <div className="flex rounded-lg overflow-hidden border border-slate-200 focus-within:border-[#047857] focus-within:ring-1 focus-within:ring-[#047857] transition-all">
                <div className="w-12 bg-slate-50 border-r border-slate-200 flex items-center justify-center text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" placeholder="linkedin.com/in/your-profile" className="w-full px-4 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder-slate-400" />
              </div>
            </div>
          </div>

          {/* Portfolio & Hồ sơ */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
              Portfolio & Hồ sơ
            </h3>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 hover:border-[#047857] transition-all cursor-pointer mb-6 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloud className="h-5 w-5 text-slate-400 group-hover:text-[#047857] transition-colors" />
              </div>
              <p className="text-sm font-bold text-slate-700 mb-1">
                Kéo và thả tệp hoặc <span className="text-[#047857]">chọn tệp</span>
              </p>
              <p className="text-[11px] font-medium text-slate-400">PDF, DOCX hoặc hình ảnh (Tối đa 10MB)</p>
            </div>

            <div className="mb-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Tệp đã tải lên</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 line-clamp-1">Portfolio_UX_Design_2024.pdf</p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">4.2 MB • Đã tải lên 2 ngày trước</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 line-clamp-1">CV_NguyenVanAn.docx</p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">850 KB • Đã tải lên 2 ngày trước</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tùy chọn & Hành động */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Tùy chọn & Hành động
            </h3>

            <div className="mb-8">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Loại hình công việc mong muốn</h4>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-[#047857] bg-[#047857] text-white flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">Theo Task / Dịch vụ cụ thể</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-[#047857] bg-[#047857] text-white flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">Internship (Thực tập sinh)</span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <button className="px-6 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors shadow-sm">
                Lưu hồ sơ
              </button>
              <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Hủy
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
