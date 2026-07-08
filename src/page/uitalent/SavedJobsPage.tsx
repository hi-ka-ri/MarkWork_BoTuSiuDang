import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, MapPin, Building2, Search, Filter, Trash2, ArrowRight } from 'lucide-react';

// Mock Data cho việc đã lưu
const initialSavedJobs = [
  {
    id: 1,
    title: 'Senior UI/UX Designer',
    company: 'TechGlobal Solutions',
    logo: 'TG',
    location: 'TP. Hồ Chí Minh (Hybrid)',
    salary: '$1,500 - $2,500',
    tags: ['Figma', 'Prototyping', 'User Research'],
    savedAt: '2 ngày trước',
    deadline: '28 Th10, 2024',
    isUrgent: true,
  },
  {
    id: 2,
    title: 'Frontend Developer (React)',
    company: 'Creative Studio X',
    logo: 'CX',
    location: 'Remote',
    salary: '$1,000 - $1,800',
    tags: ['ReactJS', 'TailwindCSS', 'TypeScript'],
    savedAt: '5 ngày trước',
    deadline: '15 Th11, 2024',
    isUrgent: false,
  },
  {
    id: 3,
    title: 'Product Manager (SaaS App)',
    company: 'Fintech Innovators',
    logo: 'FI',
    location: 'Hà Nội (On-site)',
    salary: '$2,000 - $3,500',
    tags: ['Agile', 'Scrum', 'Data Analysis'],
    savedAt: '1 tuần trước',
    deadline: '05 Th11, 2024',
    isUrgent: false,
  }
];

export const SavedJobsPage: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
  const [searchQuery, setSearchQuery] = useState('');

  // Hàm bỏ lưu
  const handleUnsave = (id: number) => {
    setSavedJobs(savedJobs.filter(job => job.id !== id));
  };

  const filteredJobs = savedJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full min-h-[calc(100vh-80px)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 font-serif mb-2">Việc đã lưu</h1>
          <p className="text-slate-500 font-medium">
            Quản lý {savedJobs.length} cơ hội việc làm mà bạn đang quan tâm.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-1 md:max-w-md items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm việc đã lưu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
            />
          </div>
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center shadow-sm">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Danh sách việc làm */}
      {filteredJobs.length > 0 ? (
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <div 
              key={job.id} 
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-[#047857]/50 hover:shadow-md transition-all group flex flex-col md:flex-row md:items-center gap-6"
            >
              
              {/* Logo & Info */}
              <div className="flex flex-1 gap-5">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-slate-400 group-hover:text-[#047857] transition-colors">{job.logo}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Link to="/talent/jobs/1" className="text-lg font-bold text-slate-800 hover:text-[#047857] transition-colors">
                      {job.title}
                    </Link>
                    {job.isUrgent && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-widest rounded text-center whitespace-nowrap">
                        Tuyển gấp
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> {job.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex flex-col md:items-end justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[200px]">
                
                <div className="flex items-center justify-between md:flex-col md:items-end w-full mb-4">
                  <div className="text-lg font-bold text-[#047857]">{job.salary}</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">Đã lưu {job.savedAt}</div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <button 
                    onClick={() => handleUnsave(job.id)}
                    title="Bỏ lưu"
                    className="p-2.5 bg-slate-50 border border-slate-200 text-slate-500 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <Link 
                    to="/talent/jobs/1/apply"
                    className="flex-1 md:flex-none px-6 py-2.5 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    Ứng tuyển
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <Bookmark className="h-8 w-8 text-slate-300" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2 font-serif">Chưa có công việc nào được lưu</h2>
          <p className="text-slate-500 font-medium mb-8 max-w-sm">
            Bạn chưa lưu bất kỳ cơ hội việc làm nào. Hãy khám phá và lưu lại những dự án phù hợp với kỹ năng của bạn nhé.
          </p>
          <Link 
            to="/talent/jobs" 
            className="px-6 py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm"
          >
            Khám phá việc làm ngay
          </Link>
        </div>
      )}

    </div>
  );
};
