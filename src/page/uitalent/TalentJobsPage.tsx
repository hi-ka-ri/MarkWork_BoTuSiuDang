import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, ChevronDown, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import companyLogo from '../../assets/hi.jpg';

export const TalentJobsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full flex flex-col md:flex-row gap-8">
      
      {/* Sidebar - Lọc kết quả */}
      <div className="w-full md:w-[280px] shrink-0">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Lọc kết quả</h2>

          {/* Mức lương */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Mức lương (Triệu VNĐ)</h3>
            <div className="px-2">
              <div className="relative w-full h-1 bg-slate-200 rounded-full mb-4">
                <div className="absolute top-0 left-[10%] right-[30%] h-full bg-[#047857] rounded-full"></div>
                <div className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#047857] rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-slate-300 shadow-sm cursor-pointer"></div>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span>5M</span>
                <span>100M+</span>
              </div>
            </div>
          </div>

          {/* Hình thức làm việc */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Hình thức làm việc</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border-2 border-[#047857] bg-[#047857] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Remote (Từ xa)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white group-hover:border-[#047857] transition-colors"></div>
                <span className="text-sm font-medium text-slate-700">Hybrid (Linh hoạt)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white group-hover:border-[#047857] transition-colors"></div>
                <span className="text-sm font-medium text-slate-700">Tại văn phòng</span>
              </label>
            </div>
          </div>

          {/* Ngành nghề */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Ngành nghề</h3>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] appearance-none">
                <option>Công nghệ thông tin</option>
                <option>Thiết kế đồ họa</option>
                <option>Marketing</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Công nghệ */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Công nghệ</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full cursor-pointer hover:bg-slate-200 transition-colors">Figma</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full cursor-pointer hover:bg-slate-200 transition-colors">React</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full cursor-pointer hover:bg-slate-200 transition-colors">Python</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-bold rounded-full cursor-pointer hover:bg-slate-100 transition-colors">+ Thêm</span>
            </div>
          </div>

          {/* Loại hợp đồng */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Loại hợp đồng</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center group-hover:border-[#047857] transition-colors"></div>
                <span className="text-sm font-medium text-slate-700">Toàn thời gian</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center group-hover:border-[#047857] transition-colors"></div>
                <span className="text-sm font-medium text-slate-700">Thực tập (Internship)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center group-hover:border-[#047857] transition-colors"></div>
                <span className="text-sm font-medium text-slate-700">Freelance</span>
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              defaultValue="UI/UX Designer"
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] shadow-sm"
            />
          </div>
          <button className="px-6 py-3.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm flex items-center gap-2">
            Tìm kiếm
          </button>
          <button className="hidden sm:flex px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm items-center gap-2">
            <Bookmark className="h-4 w-4" />
            Lưu tìm kiếm
          </button>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-600">
            <span className="font-bold text-slate-800">36</span> kết quả cho <span className="italic text-[#047857] font-bold">'UI/UX Designer'</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sắp xếp theo:</span>
            <div className="relative">
              <select className="pl-2 pr-8 py-1 bg-transparent text-sm font-bold text-slate-800 focus:outline-none appearance-none cursor-pointer">
                <option>Mới nhất</option>
                <option>Lương cao nhất</option>
                <option>Đánh giá cao</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#047857] transition-all group flex flex-col relative">
            <button className="absolute top-6 right-6 text-slate-300 hover:text-rose-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-4 overflow-hidden p-1 shadow-sm">
              <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded-md mb-3 self-start">
              AI ĐỀ XUẤT
            </span>
            
            <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-[#047857] transition-colors leading-tight">Thiết kế giao diện Mobile App B2B</h3>
            
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4">
              <span>EcoTech Solutions</span>
              <span>•</span>
              <MapPin className="h-3 w-3" />
              <span>Toàn quốc (Remote)</span>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <span className="text-sm">15.000.000 - 25.000.000 VNĐ</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">UI Design</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">UX Research</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Figma</span>
            </div>

            <div className="flex gap-2">
              <Link to="/talent/jobs/1/apply" className="flex-1 text-center py-2.5 bg-emerald-50 text-[#047857] font-bold rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                Ứng tuyển
              </Link>
              <Link to="/talent/jobs/1/apply" className="flex-1 text-center py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#047857] transition-all group flex flex-col relative">
            <button className="absolute top-6 right-6 text-slate-300 hover:text-rose-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-4 overflow-hidden p-1 shadow-sm">
              <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="h-6 mb-3"></div> {/* spacer to align with AI Recommended card */}
            
            <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-[#047857] transition-colors leading-tight">UX Research Intern</h3>
            
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4">
              <span>Creative Flow Agency</span>
              <span>•</span>
              <MapPin className="h-3 w-3" />
              <span>TP. Hồ Chí Minh</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#047857] font-bold mb-6">
              <span className="text-sm">5.000.000 - 8.000.000 VNĐ</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Usability Testing</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Interview</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">English</span>
            </div>

            <div className="flex gap-2">
              <Link to="/talent/jobs/2/apply" className="flex-1 text-center py-2.5 bg-emerald-50 text-[#047857] font-bold rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                Ứng tuyển
              </Link>
              <Link to="/talent/jobs/2/apply" className="flex-1 text-center py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#047857] transition-all group flex flex-col relative">
            <button className="absolute top-6 right-6 text-slate-300 hover:text-rose-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-4 overflow-hidden p-1 shadow-sm">
              <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold uppercase tracking-widest rounded-md mb-3 self-start">
              AI ĐỀ XUẤT
            </span>
            
            <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-[#047857] transition-colors leading-tight">Product Designer</h3>
            
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4">
              <span>FinTrust Capital</span>
              <span>•</span>
              <MapPin className="h-3 w-3" />
              <span>Hà Nội (Hybrid)</span>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <span className="text-sm">18.000.000 - 28.000.000 VNĐ</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Sketch</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Prototyping</span>
            </div>

            <div className="flex gap-2">
              <Link to="/talent/jobs/3/apply" className="flex-1 text-center py-2.5 bg-emerald-50 text-[#047857] font-bold rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                Ứng tuyển
              </Link>
              <Link to="/talent/jobs/3/apply" className="flex-1 text-center py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                Xem chi tiết
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#047857] transition-all group flex flex-col relative">
            <button className="absolute top-6 right-6 text-slate-300 hover:text-rose-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-4 overflow-hidden p-1 shadow-sm">
              <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="h-6 mb-3"></div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-[#047857] transition-colors leading-tight">Mobile App Designer</h3>
            
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4">
              <span>Swiftly Inc.</span>
              <span>•</span>
              <MapPin className="h-3 w-3" />
              <span>Toàn quốc (Remote)</span>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <span className="text-sm">22.000.000 - 30.000.000 VNĐ</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">iOS/Android</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md">Micro-interactions</span>
            </div>

            <div className="flex gap-2">
              <Link to="/talent/jobs/4/apply" className="flex-1 text-center py-2.5 bg-emerald-50 text-[#047857] font-bold rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                Ứng tuyển
              </Link>
              <Link to="/talent/jobs/4/apply" className="flex-1 text-center py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                Xem chi tiết
              </Link>
            </div>
          </div>

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-auto">
          <div className="flex items-center gap-1.5">
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#047857] border border-[#047857] rounded-lg text-white font-bold text-sm shadow-sm">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
              3
            </button>
            <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
              8
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
