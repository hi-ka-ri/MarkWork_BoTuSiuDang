import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { AuthCard } from '../../components/ui/AuthCard';

const VerifyPage: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    const lastChar = value.substring(value.length - 1);
    newOtp[index] = lastChar;
    setOtp(newOtp);
    if (lastChar && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthCard
      title="Xác thực 2 lớp"
      description="Vui lòng nhập mã OTP 6 chữ số đã được gửi đến thiết bị của bạn"
      topElement={
        <div className="bg-[#E6F4EA] p-3 rounded-2xl text-[#059669]">
          <ShieldCheck className="h-8 w-8" />
        </div>
      }
    >
      <form onSubmit={(e) => { e.preventDefault(); navigate('/admin/dashboard'); }} className="w-full flex flex-col items-center">
        <div className="flex justify-between gap-2 w-full mb-6">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={data}
              ref={(el) => { inputRefs.current[index] = el; }}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 border border-gray-200 rounded-xl text-center text-xl font-semibold bg-[#F8FAFC] text-gray-900 focus:border-[#059669] focus:ring-2 focus:ring-[#D1FAE5] outline-none transition-all"
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-2">
          Mã sẽ hết hạn sau: <span className="text-red-500 font-semibold">{Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </p>

        <button type="button" disabled={timeLeft > 0} onClick={() => setTimeLeft(120)} className={`text-sm font-medium mb-8 ${timeLeft > 0 ? 'text-gray-400 pointer-events-none' : 'text-[#059669] hover:underline'}`}>
          Gửi lại mã
        </button>

        <Button type="submit">Xác nhận</Button>

        <button type="button" onClick={() => navigate('/login')} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mt-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Quay lại trang đăng nhập</span>
        </button>
      </form>
    </AuthCard>
  );
};

export default VerifyPage;