import React, { useState } from 'react';
import { CheckCircle2, ClipboardList, GraduationCap, X, Plus, Trash2 } from 'lucide-react';

export const PostJobPage: React.FC = () => {
  const [jobType, setJobType] = useState('Task');
  const [workType, setWorkType] = useState('Remote');

  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 font-serif mb-2">Đăng tin tuyển dụng mới</h1>
        <p className="text-sm font-medium text-slate-500">
          Hoàn thành các bước dưới đây để kết nối với những chuyên gia tốt nhất.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex gap-8 border-b border-slate-200 mb-8">
        <div className="pb-4 border-b-2 border-[#047857] text-sm font-bold text-[#047857]">
          Bước 1: Loại hình
        </div>
        <div className="pb-4 text-sm font-bold text-slate-400">
          Bước 2: Thông tin chung
        </div>
        <div className="pb-4 text-sm font-bold text-slate-400">
          Bước 3: Ngân sách & Milestone
        </div>
      </div>

      <div className="space-y-8">
        {/* Section 1: Job Type */}
        <div className="bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-slate-800 mb-4">1. Bạn đang tìm kiếm hình thức nào?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Task Card */}
            <div 
              onClick={() => setJobType('Task')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all relative ${
                jobType === 'Task' ? 'border-[#047857] bg-emerald-50/30' : 'border-slate-100 hover:border-[#047857]/30'
              }`}
            >
              {jobType === 'Task' && (
                <div className="absolute top-4 right-4 text-[#047857]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              )}
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#047857] mb-4">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Task / Service</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Phù hợp cho các dự án ngắn hạn, công việc cụ thể hoặc các gói dịch vụ có sẵn từ Freelancer.
              </p>
            </div>

            {/* Internship Card */}
            <div 
              onClick={() => setJobType('Internship')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all relative ${
                jobType === 'Internship' ? 'border-[#047857] bg-emerald-50/30' : 'border-slate-100 hover:border-[#047857]/30'
              }`}
            >
              {jobType === 'Internship' && (
                <div className="absolute top-4 right-4 text-[#047857]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              )}
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Internship</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Tuyển dụng thực tập sinh cho các vị trí dài hạn, đào tạo và phát triển nguồn nhân lực trẻ.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Details */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-6">2. Thông tin chi tiết công việc</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Tiêu đề tin đăng <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Ví dụ: Thiết kế bộ nhận diện thương hiệu cho Startup công nghệ"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Mô tả công việc <span className="text-rose-500">*</span></label>
              <textarea 
                rows={4}
                placeholder="Chi tiết các đầu việc, yêu cầu cụ thể và mong muốn từ ứng viên..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Kỹ năng yêu cầu</label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-emerald-50 text-[#047857] text-xs font-bold rounded-lg flex items-center gap-2">
                  UI/UX Design <X className="h-3 w-3 cursor-pointer" />
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 text-[#047857] text-xs font-bold rounded-lg flex items-center gap-2">
                  Figma <X className="h-3 w-3 cursor-pointer" />
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 text-[#047857] text-xs font-bold rounded-lg flex items-center gap-2">
                  Branding <X className="h-3 w-3 cursor-pointer" />
                </span>
                <button className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-500 hover:text-[#047857] hover:border-[#047857] text-xs font-bold rounded-lg flex items-center gap-1 transition-colors">
                  <Plus className="h-3 w-3" /> Thêm kỹ năng
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Hình thức làm việc</label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 p-1 bg-slate-50">
                  <button 
                    onClick={() => setWorkType('Remote')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${workType === 'Remote' ? 'bg-white text-[#047857] shadow-sm' : 'text-slate-500'}`}
                  >
                    Remote
                  </button>
                  <button 
                    onClick={() => setWorkType('Onsite')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${workType === 'Onsite' ? 'bg-white text-[#047857] shadow-sm' : 'text-slate-500'}`}
                  >
                    Onsite
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Hạn chót nộp hồ sơ</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all text-slate-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Budget & Milestone */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">3. Ngân sách & Milestone</h2>
            <button className="text-sm font-bold text-[#047857] flex items-center gap-1 hover:underline">
              <Plus className="h-4 w-4" /> Thêm Milestone
            </button>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-4 px-4 text-xs font-bold text-slate-500">Tên Milestone</th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-500 w-1/2">Mô tả chi tiết</th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-500 text-right">Ngân sách (VNĐ)</th>
                  <th className="py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-sm text-slate-800">Nghiên cứu & Sketching</td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-500">Hoàn thành bản nghiên cứu đối thủ và 3 bản phác thảo logo.</td>
                  <td className="py-4 px-4 font-mono font-bold text-sm text-slate-800 text-right">5.000.000</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-slate-400 hover:text-rose-500"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-sm text-slate-800">Hoàn thiện UI Kit</td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-500">Tất cả components, màu sắc, typography trong Figma.</td>
                  <td className="py-4 px-4 font-mono font-bold text-sm text-slate-800 text-right">10.000.000</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-slate-400 hover:text-rose-500"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="bg-slate-50 rounded-xl p-6 w-[350px]">
              <div className="flex justify-between text-sm font-medium text-slate-600 mb-3">
                <span>Tổng cộng:</span>
                <span className="font-mono">15.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-slate-600 mb-4 pb-4 border-b border-slate-200">
                <span>Phí dịch vụ (10%):</span>
                <span className="font-mono">1.500.000 VNĐ</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-800">Tổng thanh toán:</span>
                <span className="text-xl font-bold text-[#047857] font-mono">16.500.000 VNĐ</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
          Lưu nháp
        </button>
        <button className="px-8 py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm">
          Đăng task ngay
        </button>
      </div>

    </div>
  );
};
