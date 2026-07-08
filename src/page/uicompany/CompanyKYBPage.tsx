import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, UploadCloud } from 'lucide-react';

export const CompanyKYBPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 font-serif">Xác thực doanh nghiệp</h1>
        <div className="text-sm font-bold text-slate-600">Hồ sơ Công ty v</div>
      </div>

      {/* Alert Info */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 flex gap-4">
        <div className="mt-0.5 text-[#047857]">
          <Info className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-[#047857] mb-1">Hoàn thiện hồ sơ KYB (Know Your Business)</h3>
          <p className="text-sm font-medium text-emerald-800/80 leading-relaxed">
            Để bắt đầu đăng tuyển và thực hiện giao dịch trên WorkMarket, doanh nghiệp của bạn cần hoàn thành quy trình
            xác thực pháp nhân. Quá trình kiểm duyệt thường mất từ 24-48 giờ làm việc.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        
        {/* Step 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#047857] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h2 className="text-lg font-bold text-slate-800">Thông tin doanh nghiệp</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Mã số thuế (MST) <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Nhập mã số thuế 10 hoặc 13 số"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Tên doanh nghiệp (theo GPKD) <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                defaultValue="CÔNG TY TNHH WORKMARKET VIỆT NAM"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-600 mb-2">Địa chỉ trụ sở chính <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              placeholder="Số nhà, tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Ngành nghề kinh doanh chính</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors appearance-none">
                <option>Chọn ngành nghề</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Quy mô nhân sự</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors appearance-none">
                <option>Chọn quy mô</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#047857] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h2 className="text-lg font-bold text-slate-800">Giấy chứng nhận ĐKKD</h2>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#047857]">
              <UploadCloud className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-800 mb-1">Nhấp hoặc kéo thả tệp vào đây</h4>
            <p className="text-xs font-medium text-slate-500">Hỗ trợ JPG, PNG, PDF (Tối đa 10MB). Yêu cầu bản gốc hoặc công chứng còn hiệu lực.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#047857] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h2 className="text-lg font-bold text-slate-800">Người đại diện pháp luật</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Họ và tên <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Chức danh <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Giám đốc / Tổng giám đốc"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Số CCCD/Hộ chiếu <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Nhập 12 số CCCD"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Số điện thoại liên hệ</label>
              <input 
                type="text" 
                placeholder="090x xxx xxx"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#047857] transition-colors"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 flex items-start gap-3">
        <input type="checkbox" className="mt-1 w-4 h-4 text-[#047857] rounded border-slate-300 focus:ring-[#047857]" />
        <p className="text-sm font-medium text-slate-600">
          Tôi cam đoan mọi thông tin cung cấp trên đây là hoàn toàn đúng sự thật và chịu trách nhiệm trước pháp luật về tính chính xác của hồ sơ.
          Tôi đã đọc và đồng ý với <a href="#" className="font-bold text-[#047857] hover:underline">Điều khoản dịch vụ</a> của WorkMarket.
        </p>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
          Lưu nháp
        </button>
        <button 
          onClick={() => navigate('/company/dashboard')}
          className="px-8 py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065f46] transition-colors shadow-sm"
        >
          Gửi hồ sơ
        </button>
      </div>

    </div>
  );
};
