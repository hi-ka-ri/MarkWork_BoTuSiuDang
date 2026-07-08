import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import avatarImg from '../../assets/hi.jpg';
import cccdPreview from '../../assets/hi.jpg';
import livenessPreview from '../../assets/hi.jpg';

export const TalentKYCPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      
      {/* Top Header Bar */}
      <header className="h-20 bg-white border-b border-slate-200 px-12 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#047857] rounded-lg flex items-center justify-center text-white font-bold text-lg">W</div>
          <span className="text-xl font-bold text-[#047857] tracking-tight">WorkMarket</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">eKYC PROCESS : WORKER-01</h4>
          </div>
          <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden shrink-0">
            <img src={avatarImg} alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex flex-col items-center pt-12 pb-20">
        
        <div className="w-full max-w-4xl px-6">
          
          {/* Title */}
          <div className="text-center mb-16 relative">
            <div className="w-12 h-12 bg-[#047857] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <CheckCircle2 className="h-6 w-6" />
            </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2 font-serif">Xác thực danh tính để bắt đầu hành trình nghề nghiệp</h1>
          <p className="text-sm font-medium text-slate-500">
            Quy trình được thực hiện bởi đối tác <span className="font-bold text-[#047857]">VNPT/VNeID</span> nhằm bảo mật thông tin<br/>và quyền lợi của bạn trên WorkMarket.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Step 1 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-[#047857] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h2 className="text-lg font-bold text-slate-800">Chọn đối tác xác thực</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-[#047857] rounded-xl p-5 shadow-sm cursor-pointer relative overflow-hidden">
                <div className="w-8 h-8 bg-blue-50 rounded mb-4 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">VNPT</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">Xác thực qua VNPT</h3>
                <p className="text-[11px] font-medium text-slate-500">Phổ biến, nhanh chóng cho căn cước gắn chip.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#047857] transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-red-50 rounded mb-4 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">VNeID</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">Xác thực qua VNeID</h3>
                <p className="text-[11px] font-medium text-slate-500">Đồng bộ trực tiếp từ ứng dụng Định danh điện tử.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#047857] transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-orange-50 rounded mb-4 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">VNPOST</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">Bưu điện Việt Nam</h3>
                <p className="text-[11px] font-medium text-slate-500">Xác thực trực tiếp tại quầy giao dịch gần nhất.</p>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-[#047857] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h2 className="text-lg font-bold text-slate-800">Chụp ảnh Căn cước công dân</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Camera Area */}
              <div className="bg-black rounded-2xl overflow-hidden flex flex-col items-center justify-center py-16 px-6 relative shadow-md">
                <Camera className="h-12 w-12 text-white/50 mb-6" />
                <button className="px-6 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors flex items-center gap-2 mb-4">
                  <Camera className="h-4 w-4" />
                  Bắt đầu chụp
                </button>
                <p className="text-xs font-medium text-white/50">Đặt CMND/CCCD vào khung hình</p>
                
                {/* Frame overlay */}
                <div className="absolute inset-0 border-2 border-dashed border-white/20 m-6 rounded-xl"></div>
              </div>

              {/* Preview Area */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hình ảnh xem trước</h3>
                  <span className="px-2.5 py-1 bg-emerald-50 text-[#047857] text-[10px] font-bold rounded-full">Sẵn sàng</span>
                </div>
                
                <div className="flex-1 bg-slate-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-4">
                  <img src={cccdPreview} alt="CCCD" className="max-w-[200px] rounded-md shadow-sm opacity-90 mix-blend-multiply" />
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <button className="flex-1 py-2.5 bg-white border border-slate-200 text-[#047857] font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                    Chụp lại mặt trước
                  </button>
                  <button className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-400 font-bold rounded-lg cursor-not-allowed text-sm">
                    Chụp mặt sau
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-[#047857] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h2 className="text-lg font-bold text-slate-800">Xác thực khuôn mặt (Liveness)</h2>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-xl mx-auto flex flex-col items-center">
              <div className="w-full aspect-video bg-slate-100 rounded-xl mb-6 overflow-hidden relative border-2 border-emerald-100">
                <img src={livenessPreview} alt="Liveness" className="w-full h-full object-cover" />
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400/50 blur-sm animate-pulse translate-y-20"></div>
                <div className="absolute top-20 left-0 w-full h-px bg-emerald-400"></div>
              </div>
              
              <div className="w-full mb-3">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#047857] uppercase tracking-widest mb-2">
                  <span>Tiến trình xác thực</span>
                  <span>65%</span>
                </div>
                <div className="w-full h-1.5 bg-emerald-50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#047857] w-[65%] rounded-full"></div>
                </div>
              </div>
              <p className="text-xs font-medium text-slate-500">Vui lòng xoay mặt chậm sang trái, sau đó sang phải</p>
            </div>
          </section>

          {/* Step 4 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-[#047857] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h2 className="text-lg font-bold text-slate-800">Kiểm tra thông tin trích xuất</h2>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm max-w-2xl mx-auto">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Kết quả OCR</h3>
                <CheckCircle2 className="h-4 w-4 text-[#047857]" />
              </div>
              
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-500 w-1/3">Họ và tên</td>
                      <td className="py-4 px-6 font-bold text-slate-800">NGUYỄN VĂN AN</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-500">Ngày sinh</td>
                      <td className="py-4 px-6 font-bold text-slate-800">15/05/1995</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-500">Số CCCD</td>
                      <td className="py-4 px-6 font-bold text-slate-800">038095001234</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-500">Giới tính</td>
                      <td className="py-4 px-6 font-bold text-slate-800">Nam</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-500">Quê quán</td>
                      <td className="py-4 px-6 font-bold text-slate-800">Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50/50 flex items-start gap-2 border-t border-slate-100">
                <AlertCircle className="h-4 w-4 text-[#047857] shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium text-slate-600">
                  Bạn có thể chỉnh sửa nếu thông tin trích xuất chưa chính xác so với thẻ.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Actions */}
        <div className="mt-16 pt-6 border-t border-slate-200 flex items-center justify-between">
          <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </button>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-slate-100 text-slate-500 font-bold rounded-lg hover:bg-slate-200 transition-colors">
              Lưu tạm
            </button>
            <button 
              onClick={() => navigate('/talent/dashboard')}
              className="px-8 py-2.5 bg-[#047857] text-white font-bold rounded-lg hover:bg-[#065f46] transition-colors flex items-center gap-2 shadow-sm"
            >
              Tiếp tục
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};
