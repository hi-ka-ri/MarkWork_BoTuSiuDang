import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ShieldCheck, Lock } from 'lucide-react';

export const JobApplyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Job Details */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
              Thiết kế giao diện Mobile App cho nền tảng Thương mại điện tử B2B
            </h1>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <span className="font-bold text-slate-700">VinTech Solutions</span>
              <ShieldCheck className="h-4 w-4 text-[#047857]" />
              <span>•</span>
              <span>Đăng 2 giờ trước</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-6 border-y border-slate-200 mb-8">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Ngân sách dự kiến</p>
              <p className="text-xl font-bold text-[#047857]">15,000,000 đ - 25,000,000 đ</p>
            </div>
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-[#047857] font-bold rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-sm">
              <Bookmark className="h-4 w-4" />
              Lưu việc
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Mô tả công việc</h3>
            <div className="prose prose-sm text-slate-600 font-medium leading-relaxed">
              <p>
                Chúng tôi đang tìm kiếm một Senior Product Designer tài năng để cùng xây dựng giao diện ứng dụng di động cho hệ sinh thái thương mại điện tử B2B của VinTech. Dự án yêu cầu sự am hiểu sâu sắc về trải nghiệm người dùng trong lĩnh vực Logistics và Quản lý kho bãi.
              </p>
              <p className="mt-4">Các hạng mục công việc chính:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Phân tích luồng người dùng (User Flow) cho 3 nhóm đối tượng: Nhà cung cấp, Đại lý, và Đội ngũ vận chuyển.</li>
                <li>Thiết kế hơn 45 màn hình độ phân giải cao trên Figma.</li>
                <li>Xây dựng Design System đồng bộ với phiên bản Web hiện tại.</li>
                <li>Phối hợp cùng đội ngũ Engineering để bàn giao file và kiểm soát chất lượng UI sau khi code.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Kỹ năng yêu cầu</h3>
            <div className="flex flex-wrap gap-2">
              {['UI Design', 'UX Research', 'Figma Specialist', 'B2B E-commerce', 'Design Systems'].map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Lộ trình thanh toán (Milestones)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-24">Giai đoạn</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nội dung</th>
                    <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right w-24">Tỷ lệ</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-bold text-slate-800">M1</td>
                    <td className="py-4 px-4 font-medium text-slate-600">User Research & Wireframes</td>
                    <td className="py-4 px-4 font-bold text-slate-800 text-right">20%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-bold text-slate-800">M2</td>
                    <td className="py-4 px-4 font-medium text-slate-600">UI Concepts (Key Screens)</td>
                    <td className="py-4 px-4 font-bold text-slate-800 text-right">30%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-slate-800">M3</td>
                    <td className="py-4 px-4 font-medium text-slate-600">Full UI Kit & Final Hand-off</td>
                    <td className="py-4 px-4 font-bold text-slate-800 text-right">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column - Apply Form */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-8 sticky top-24 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-xl font-bold text-[#047857] mb-6">Gửi ứng tuyển</h2>
            
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Giá thầu đề xuất (VNĐ)</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="20,000,000"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-lg font-bold text-slate-800 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all text-right pr-12"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">đ</div>
              </div>
              <p className="text-xs font-medium text-slate-500 mt-2 italic">
                Bạn sẽ thực nhận khoảng <span className="font-bold text-slate-700">18,000,000 đ</span> sau khi trừ phí nền tảng.
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Thư giới thiệu</label>
              <textarea 
                rows={6}
                placeholder="Hãy mô tả tại sao bạn phù hợp với dự án này và các dự án tương tự bạn từng thực hiện..."
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all resize-none placeholder-slate-400"
              ></textarea>
              <div className="text-right mt-1">
                <span className="text-[10px] font-bold text-slate-400">0 / 2000 ký tự</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <Link to="/talent/offers/1" className="w-full py-3.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors shadow-sm block text-center">
                Gửi ứng tuyển
              </Link>
              <button className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Hủy
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
              <Lock className="h-4 w-4 text-[#047857] shrink-0 mt-0.5" />
              <p className="text-[10px] font-medium text-slate-500 leading-relaxed">
                Thông tin của bạn được bảo mật và chỉ chia sẻ với khách hàng khi họ phản hồi.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
