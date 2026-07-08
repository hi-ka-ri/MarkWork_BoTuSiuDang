import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, ArrowLeft, CheckCircle2, RotateCcw, 
  Eye, EyeOff, ShieldCheck
} from 'lucide-react';

// Stepper dots
const StepperDots = ({ step }: { step: number }) => (
  <div className="flex justify-center gap-2 mt-8">
    {[1, 2, 3].map((i) => (
      <div 
        key={i} 
        className={`h-1.5 rounded-full transition-all ${
          i === step 
            ? 'w-6 bg-[#047857]' 
            : i < step 
              ? 'w-2 bg-[#047857]/40' 
              : 'w-2 bg-slate-200'
        }`}
      />
    ))}
  </div>
);

// Layout wrapper for all steps
const StepWrapper = ({ children, title, subtitle, icon: Icon, showBack = true, step }: any) => (
  <div className="w-full max-w-md">
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 relative">
      
      <div className="text-center mb-8">
        {Icon && (
          <div className="w-16 h-16 bg-emerald-50 text-[#047857] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="h-8 w-8" />
          </div>
        )}
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>
        <p className="text-sm font-medium text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {children}

      {showBack && step < 4 && (
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-[#047857] hover:text-[#065f46] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Quay lại trang đăng nhập
          </Link>
        </div>
      )}
    </div>

    {step < 4 && <StepperDots step={step} />}

    {step === 2 && (
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 py-3 px-6 rounded-xl w-fit mx-auto border border-slate-200">
        <ShieldCheck className="h-4 w-4 text-[#047857]" />
        <span>Kết nối bảo mật mã hóa 256-bit</span>
      </div>
    )}
  </div>
);

export const ForgotPasswordPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ---------------------------------------------------------
  // STEP 1: Quên mật khẩu? (Nhập Email)
  // ---------------------------------------------------------
  if (step === 1) {
    return (
      <StepWrapper 
        title="Quên mật khẩu?" 
        subtitle="Nhập email đã đăng ký, chúng tôi sẽ gửi mã xác nhận."
        icon={RotateCcw}
        step={step}
      >
        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
          <div className="mb-6">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              ĐỊA CHỈ EMAIL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="example@domain.com" 
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700 placeholder-slate-400"
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors"
          >
            Gửi mã xác nhận →
          </button>
        </form>
      </StepWrapper>
    );
  }

  // ---------------------------------------------------------
  // STEP 2: Xác thực mã (OTP)
  // ---------------------------------------------------------
  if (step === 2) {
    const handleOtpChange = (index: number, value: string) => {
      if (value.length <= 1) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
          const nextInput = document.getElementById(`otp-forgot-${index + 1}`);
          nextInput?.focus();
        }
      }
    };

    return (
      <StepWrapper 
        title="Xác thực mã" 
        subtitle={
          <span>Nhập mã 6 số đã gửi tới <strong>{email ? email.replace(/^(.{2})(.*)(@.*)$/, '$1***$3') : 'u***@example.com'}</strong></span>
        }
        step={step}
      >
        <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
          <div className="flex justify-between gap-2 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-forgot-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-14 text-center text-xl font-bold text-slate-800 border border-slate-200 rounded-xl focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all bg-slate-50 focus:bg-white"
              />
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              GỬI LẠI MÃ SAU: <span className="text-[#047857]">00:58</span>
            </p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors"
          >
            Xác nhận
          </button>
        </form>
      </StepWrapper>
    );
  }

  // ---------------------------------------------------------
  // STEP 3: Đặt mật khẩu mới
  // ---------------------------------------------------------
  if (step === 3) {
    return (
      <StepWrapper 
        title="Đặt mật khẩu mới" 
        subtitle="Vui lòng nhập mật khẩu mới để hoàn tất quy trình khôi phục tài khoản của bạn."
        icon={RotateCcw}
        step={step}
      >
        <form onSubmit={(e) => { e.preventDefault(); setStep(4); }}>
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                MẬT KHẨU MỚI
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="Nhập mật khẩu mới" 
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              <div className="flex gap-1.5 mt-3">
                <div className="h-1 flex-1 rounded-full bg-[#047857]"></div>
                <div className="h-1 flex-1 rounded-full bg-[#047857]"></div>
                <div className="h-1 flex-1 rounded-full bg-slate-200"></div>
                <div className="h-1 flex-1 rounded-full bg-slate-200"></div>
              </div>
              <p className="text-[10px] font-medium text-slate-500 mt-2">Tối thiểu 8 ký tự, bao gồm chữ cái và số.</p>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                XÁC NHẬN MẬT KHẨU MỚI
              </label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Xác nhận lại mật khẩu" 
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors"
          >
            Đặt lại mật khẩu
          </button>
        </form>
      </StepWrapper>
    );
  }

  // ---------------------------------------------------------
  // STEP 4: Thành công
  // ---------------------------------------------------------
  if (step === 4) {
    return (
      <StepWrapper 
        title="Đặt lại mật khẩu thành công" 
        subtitle="Mật khẩu của bạn đã được thay đổi. Vui lòng đăng nhập lại để tiếp tục."
        icon={CheckCircle2}
        showBack={false}
        step={step}
      >
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors mb-4"
        >
          Đăng nhập ngay
        </button>
      </StepWrapper>
    );
  }

  return null;
};
