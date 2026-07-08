import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, CheckCircle2, ShieldCheck, MapPin, ChevronDown, 
  Bookmark, Star, Sparkles, Building2, User
} from 'lucide-react';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Product Designer (UI/UX)',
    company: 'TechNova Corp',
    companyLogo: 'https://ui-avatars.com/api/?name=TC&background=047857&color=fff',
    location: 'Quận 1, TP. HCM',
    verified: true,
    tags: ['Task/Service', 'Hybrid'],
    salary: '45.XXX.XXX',
    skills: ['Figma', 'React', 'Prototyping'],
    rating: 4.9,
    reviews: 128,
    featured: true,
  },
  {
    id: 2,
    title: 'Content Marketing Intern (Thực tập sinh)',
    company: 'Zenith Creative',
    companyLogo: 'https://ui-avatars.com/api/?name=ZC&background=6366f1&color=fff',
    location: 'Remote',
    verified: true,
    tags: ['Internship', 'Remote'],
    salary: '8.XXX.XXX',
    skills: ['Copywriting', 'SEO', '+2'],
    rating: 4.7,
    reviews: 56,
    featured: false,
  },
  {
    id: 3,
    title: 'Backend Developer (NodeJS / Python)',
    company: 'DataStream',
    companyLogo: 'https://ui-avatars.com/api/?name=DS&background=0284c7&color=fff',
    location: 'Hà Nội / On-site',
    verified: true,
    tags: ['Task/Service', 'On-site'],
    salary: '32.XXX.XXX',
    skills: ['PostgreSQL', 'Docker', 'AWS'],
    rating: 5.0,
    reviews: 89,
    featured: false,
  },
];

export const JobsPage: React.FC = () => {
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);

  return (
    <div className="bg-[#f8fafc] flex-1 pb-24">
      
      {/* Hero Header */}
      <div className="pt-20 pb-16 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 max-w-3xl mx-auto leading-tight">
          Khám phá cơ hội việc làm & thực tập đã xác thực
        </h1>
        <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Khám phá hàng trăm cơ hội Freelance, Task/Service và Thực tập có hướng dẫn từ các doanh nghiệp đã xác thực. Nhận thanh toán an toàn qua Escrow và ứng tuyển bằng hồ sơ số đã xác minh.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold text-[#047857] uppercase tracking-wider mb-12">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>COMPANY VERIFIED</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>EKYC / KYB</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="h-4 w-4" />
            <span>ESCROW PROTECTED</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="h-4 w-4" />
            <span>AI MATCHING</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-left max-w-4xl mx-auto space-y-4">
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Tìm theo vị trí, kỹ năng hoặc tên doanh nghiệp..."
              className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: 'Kỹ năng', options: ['React', 'Node.js', 'UI/UX Design', 'Python', 'Java', 'Marketing'] },
                { name: 'Địa điểm', options: ['Hà Nội', 'TP. HCM', 'Đà Nẵng', 'Remote'] },
                { name: 'Hình thức', options: ['Remote', 'Hybrid', 'On-site'] },
                { name: 'Ngân sách', options: ['Dưới 5 triệu', '5 - 15 triệu', '15 - 30 triệu', 'Trên 30 triệu'] },
                { name: 'Loại hợp đồng', options: ['Task/Service', 'Part-time', 'Full-time', 'Internship'] },
                { name: 'Thời gian', options: ['Dưới 1 tháng', '1 - 3 tháng', '3 - 6 tháng', 'Trên 6 tháng'] },
              ].map(filter => (
                <div key={filter.name} className="relative group">
                  <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center space-x-1.5 transition-colors focus:ring-2 focus:ring-[#047857]/20 focus:border-[#047857] outline-none">
                    <span>{filter.name}</span>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-focus-within:rotate-180 transition-transform" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all z-20 overflow-hidden">
                    <div className="py-2">
                      {filter.options.map(opt => (
                        <label key={opt} className="flex items-center px-4 py-2.5 hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-700">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#047857] focus:ring-[#047857] mr-3" />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 p-2 flex justify-end bg-slate-50">
                      <button className="px-3 py-1.5 text-xs font-bold text-[#047857] hover:bg-emerald-50 rounded-lg transition-colors">
                        Áp dụng
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle Verified */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
              <span className="text-sm font-bold text-slate-700">Verified Only</span>
              <button 
                onClick={() => setIsVerifiedOnly(!isVerifiedOnly)}
                className={`w-11 h-6 rounded-full transition-colors relative ${isVerifiedOnly ? 'bg-[#047857]' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isVerifiedOnly ? 'left-6' : 'left-1'}`}></div>
              </button>
            </div>
          </div>
          
        </div>

        {/* Suggestions */}
        <div className="flex items-center justify-center gap-3 mt-6 text-xs font-bold text-slate-500">
          <span>GỢI Ý:</span>
          {['UI/UX Design', 'Java Spring Boot', 'React Native', 'Marketing Specialist', 'Node.js', 'Data Analyst'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-slate-100 rounded-md hover:bg-slate-200 cursor-pointer transition-colors text-slate-600">
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {mockJobs.map(job => (
            <div key={job.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
              
              {job.featured && (
                <div className="absolute top-0 right-0 bg-[#047857] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                  Featured
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <img src={job.companyLogo} alt={job.company} className="w-10 h-10 rounded-lg shadow-sm" />
                    <div>
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="font-bold text-slate-800 text-sm">{job.company}</span>
                        {job.verified && <CheckCircle2 className="h-3.5 w-3.5 text-[#047857]" />}
                      </div>
                      <div className="flex items-center text-xs font-medium text-slate-500 space-x-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-[#047857] transition-colors mt-1">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-bold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto bg-[#f0f9ff] border border-blue-100 rounded-xl p-4 mb-6">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NGÂN SÁCH DỰ KIẾN</div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold text-slate-800 tracking-tight">{job.salary}</span>
                    <span className="text-sm font-bold text-slate-500">VNĐ</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-800 text-sm">{job.rating}</span>
                  <span className="text-xs font-medium text-slate-500">({job.reviews} reviews)</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-emerald-50 text-[#047857] hover:bg-emerald-100 font-bold rounded-lg text-xs transition-colors">
                    Ứng tuyển
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold rounded-lg text-xs transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Pagination */}
        <div className="mt-12 flex flex-col items-center">
          <div className="text-sm font-medium text-slate-500 mb-4">
            Hiển thị 1–12 trên 256 cơ hội
          </div>
          <div className="flex items-center space-x-1">
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button className="px-3.5 py-1.5 bg-[#047857] text-white rounded-md font-bold shadow-sm text-sm">1</button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-bold transition-colors text-sm">2</button>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-bold transition-colors text-sm">3</button>
            <span className="px-2 text-slate-400 font-bold">...</span>
            <button className="px-3.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 font-bold transition-colors text-sm">22</button>
            <button className="px-2.5 py-1.5 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Call to Action */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-[#1e293b] rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu sự nghiệp?</h2>
            <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto">
              Kết nối với mạng lưới doanh nghiệp uy tín và bắt đầu dự án thực tế ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="w-full sm:w-auto px-8 py-3.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <User className="h-4 w-4" />
                <span>Tôi là Người làm</span>
              </Link>
              <Link to="/register" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-slate-600 text-white hover:border-slate-400 font-bold rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>Tôi là Doanh nghiệp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

function ChevronLeftIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  );
}
