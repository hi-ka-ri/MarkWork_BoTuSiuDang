import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, User, Eye, EyeOff, CheckCircle2, 
  ArrowRight, Mail, HelpCircle, Lock
} from 'lucide-react';

type Role = 'business' | 'talent' | null;

export const RegisterPage: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [role, setRole] = useState<Role>(null);
  
  // Step 1 Form state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Step 2 Form state (OTP)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const navigate = useNavigate();

  // Handle Confetti for Step 3
  useEffect(() => {
    if (step === 3) {
      // Simulate confetti via CSS or simply let the CSS animation play
    }
  }, [step]);

  // Stepper Component
  const Stepper = ({ currentStep }: { currentStep: number }) => {
    return (
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center w-full max-w-sm relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative z-10 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
              currentStep >= 1 ? 'bg-[#047857] border-[#047857] text-white' : 'bg-white border-slate-200 text-slate-400'
            }`}>
              {currentStep > 1 ? <CheckCircle2 className="h-4 w-4" /> : 1}
            </div>
            <span className={`text-[10px] font-bold uppercase mt-2 tracking-widest ${currentStep >= 1 ? 'text-[#047857]' : 'text-slate-400'}`}>
              Thông tin tài khoản
            </span>
          </div>
          
          {/* Line 1-2 */}
          <div className={`absolute top-4 left-[15%] right-[50%] h-px -translate-y-1/2 transition-colors ${
            currentStep >= 2 ? 'bg-[#047857]' : 'bg-slate-200'
          }`}></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative z-10 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
              currentStep >= 2 ? 'border-[#047857] text-[#047857] bg-white' : 'bg-white border-slate-200 text-slate-400'
            }`}>
              {currentStep > 2 ? <CheckCircle2 className="h-4 w-4" /> : 2}
            </div>
            <span className={`text-[10px] font-bold uppercase mt-2 tracking-widest ${currentStep >= 2 ? 'text-[#047857]' : 'text-slate-400'}`}>
              Xác nhận tài khoản
            </span>
          </div>

          {/* Line 2-3 */}
          <div className={`absolute top-4 left-[50%] right-[15%] h-px -translate-y-1/2 transition-colors ${
            currentStep >= 3 ? 'bg-[#047857]' : 'bg-slate-200'
          }`}></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative z-10 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
              currentStep >= 3 ? 'bg-[#047857] border-[#047857] text-white' : 'bg-white border-slate-200 text-slate-400'
            }`}>
              3
            </div>
            <span className={`text-[10px] font-bold uppercase mt-2 tracking-widest ${currentStep >= 3 ? 'text-slate-800' : 'text-slate-400'}`}>
              Hoàn tất
            </span>
          </div>
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------
  // STEP 0: Chọn vai trò
  // ---------------------------------------------------------
  if (step === 0) {
    return (
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Bạn muốn tham gia với vai trò nào?</h1>
        <p className="text-slate-500 font-medium mb-12">Hãy chọn tư cách thành viên để chúng tôi cá nhân hóa trải nghiệm của bạn.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Doanh nghiệp Card */}
          <div 
            onClick={() => setRole('business')}
            className={`bg-white rounded-2xl border-2 p-8 text-left cursor-pointer transition-all group ${
              role === 'business' ? 'border-[#047857] shadow-[0_8px_30px_rgba(4,120,87,0.12)]' : 'border-slate-100 hover:border-[#047857] shadow-sm hover:shadow-[0_8px_30px_rgba(4,120,87,0.12)]'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
              role === 'business' ? 'bg-[#047857] text-white' : 'bg-emerald-50 text-[#047857] group-hover:bg-[#047857] group-hover:text-white'
            }`}>
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Doanh nghiệp</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8 h-16">
              Đăng tin, tìm ứng viên đã xác thực, thanh toán an toàn qua escrow và quản lý dự án hiệu quả.
            </p>
            <button 
              className={`w-full py-3 rounded-lg font-bold transition-colors ${
                role === 'business' ? 'bg-[#047857] text-white hover:bg-[#065f46]' : 'bg-slate-100 text-slate-400 group-hover:bg-[#047857] group-hover:text-white'
              }`}
            >
              Tiếp tục
            </button>
          </div>

          {/* Người làm Card */}
          <div 
            onClick={() => setRole('talent')}
            className={`bg-white rounded-2xl border-2 p-8 text-left cursor-pointer transition-all group ${
              role === 'talent' ? 'border-[#047857] shadow-[0_8px_30px_rgba(4,120,87,0.12)]' : 'border-slate-100 hover:border-[#047857] shadow-sm hover:shadow-[0_8px_30px_rgba(4,120,87,0.12)]'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
              role === 'talent' ? 'bg-[#047857] text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-[#047857] group-hover:text-white'
            }`}>
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Người làm</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8 h-16">
              Tìm task/thực tập, làm việc và nhận thanh toán đảm bảo từ những doanh nghiệp uy tín.
            </p>
            <button 
              className={`w-full py-3 rounded-lg font-bold transition-colors ${
                role === 'talent' ? 'bg-[#047857] text-white hover:bg-[#065f46]' : 'bg-slate-100 text-slate-400 group-hover:bg-[#047857] group-hover:text-white'
              }`}
            >
              Tiếp tục
            </button>
          </div>
        </div>

        <p className="text-sm font-medium text-slate-500">
          Đã có tài khoản?{' '}
          <Link to="/login" className="font-bold text-[#047857] hover:underline">Đăng nhập</Link>
        </p>

        {/* Global absolute button to proceed if a role is selected (as per UX standard, though the card buttons work too) */}
        {role && (
          <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 md:hidden z-50">
            <button 
              onClick={() => setStep(1)}
              className="w-full py-3.5 bg-[#047857] text-white font-bold rounded-xl"
            >
              Bắt đầu đăng ký {role === 'business' ? 'Doanh nghiệp' : 'Người làm'}
            </button>
          </div>
        )}
        
        {/* Helper effect for desktop card buttons */}
        <div className="hidden">
           {role && setTimeout(() => setStep(1), 300)}
        </div>

      </div>
    );
  }

  // ---------------------------------------------------------
  // STEP 1: Thông tin tài khoản
  // ---------------------------------------------------------
  if (step === 1) {
    return (
      <div className="w-full max-w-2xl">
        <Stepper currentStep={1} />
        
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              Đăng ký tài khoản {role === 'business' ? 'doanh nghiệp' : 'người làm'}
            </h1>
            <p className="text-sm font-medium text-slate-500">
              Bắt đầu hành trình tìm kiếm nhân tài chất lượng cao cùng chúng tôi.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                Tên {role === 'business' ? 'doanh nghiệp' : 'của bạn'}
              </label>
              <input 
                type="text" 
                required
                placeholder={role === 'business' ? "Ví dụ: Công ty TNHH Giải pháp Công nghệ" : "Ví dụ: Nguyễn Văn A"} 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Email {role === 'business' ? 'công ty' : 'cá nhân'}
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Số điện thoại
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="09xx xxx xxx" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Mật khẩu</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    placeholder="••••••••" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700 tracking-widest"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Xác nhận mật khẩu</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    required
                    placeholder="••••••••" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700 tracking-widest"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-[#047857] focus:ring-[#047857]" />
              <span className="text-sm font-medium text-slate-600">
                Tôi đồng ý với <Link to="/guest/legal" className="text-[#047857] hover:underline font-bold">Điều khoản dịch vụ</Link> và <Link to="/guest/legal" className="text-[#047857] hover:underline font-bold">Chính sách bảo mật</Link> của WorkMark.
              </span>
            </label>

            <button 
              type="submit" 
              className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors mt-4"
            >
              Tiếp tục
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm font-medium text-slate-500">
              Đã có tài khoản? <Link to="/login" className="font-bold text-[#047857] hover:underline">Đăng nhập ngay</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // STEP 2: Xác nhận OTP
  // ---------------------------------------------------------
  if (step === 2) {
    const handleOtpChange = (index: number, value: string) => {
      if (value.length <= 1) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        // Focus next input automatically
        if (value && index < 5) {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          nextInput?.focus();
        }
      }
    };

    return (
      <div className="w-full max-w-2xl">
        <Stepper currentStep={2} />
        
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 mb-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Xác thực tài khoản</h1>
            <p className="text-sm font-medium text-slate-500">
              Vui lòng nhập mã OTP đã được gửi đến email công ty của bạn
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-8">
            <div className="flex justify-center gap-2 sm:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-12 sm:w-14 sm:h-16 text-center text-xl font-bold text-slate-800 border border-slate-200 rounded-xl focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none"
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-slate-500">
                Bạn không nhận được mã? <button type="button" className="font-bold text-[#047857] hover:underline">Gửi lại mã ngay</button>
              </p>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors"
            >
              Xác nhận
            </button>
            
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
              <Lock className="h-3 w-3" />
              <span>Mã OTP có hiệu lực trong 5 phút</span>
            </div>
          </form>
        </div>

        {/* Helpers */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4">
            <div className="text-slate-400 mt-0.5"><Mail className="h-5 w-5" /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">Kiểm tra Thư rác</h4>
              <p className="text-xs font-medium text-slate-500">Nếu không thấy email trong Hộp thư đến, vui lòng kiểm tra thư mục Spam hoặc Junk.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4">
            <div className="text-slate-400 mt-0.5"><HelpCircle className="h-5 w-5" /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">Cần hỗ trợ?</h4>
              <p className="text-xs font-medium text-slate-500">Liên hệ đội ngũ hỗ trợ kỹ thuật nếu bạn gặp sự cố khi xác thực tài khoản.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // STEP 3: Hoàn tất (Đăng ký thành công)
  // ---------------------------------------------------------
  if (step === 3) {
    return (
      <div className="w-full max-w-2xl relative">
        {/* Simple Confetti CSS simulation (Using small absolute divs if needed, but keeping it clean here) */}
        <Stepper currentStep={3} />
        
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 text-center relative overflow-hidden">
          
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute top-0 right-0 -mr-2 -mt-2 w-4 h-4 bg-[#047857] rounded-full"></div>
            <CheckCircle2 className="h-10 w-10 text-[#047857]" />
          </div>

          <h1 className="text-3xl font-serif font-bold text-slate-800 mb-4">Đăng ký thành công!</h1>
          <p className="text-slate-500 font-medium leading-relaxed max-w-md mx-auto mb-10">
            Hãy hoàn tất {role === 'business' ? 'KYB (mã số thuế + giấy chứng nhận đăng ký kinh doanh)' : 'eKYC (Căn cước công dân)'} để bắt đầu đăng task và tìm kiếm nhân tài.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bước tiếp theo</div>
              <div className="text-sm font-bold text-slate-800">Xác thực {role === 'business' ? 'doanh nghiệp' : 'danh tính'}</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Thời gian xử lý</div>
              <div className="text-sm font-bold text-slate-800">Dưới 24 giờ làm việc</div>
            </div>
          </div>

          <div className="space-y-3 mb-10">
            <button 
              onClick={() => {
                if (role === 'business') navigate('/company/kyb');
                else navigate('/talent/kyc');
              }}
              className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors flex items-center justify-center gap-2"
            >
              <span>Vào trang quản trị {role === 'business' ? 'doanh nghiệp' : 'người làm'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => {
                if (role === 'business') navigate('/company/kyb');
                else navigate('/talent/kyc');
              }}
              className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-3.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Bắt đầu {role === 'business' ? 'KYB' : 'eKYC'} ngay bây giờ
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8 border-t border-slate-100">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">100%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hồ sơ hoàn tất</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">Tier 1</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mức độ bảo mật</div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
};
