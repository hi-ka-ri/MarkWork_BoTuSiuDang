import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();

  const getTitle = () => {
    switch (role) {
      case 'admin': return 'Đăng nhập Quản trị viên';
      case 'talent': return 'Đăng nhập Người làm';
      case 'worker': return 'Đăng nhập Người làm';
      case 'business': return 'Đăng nhập Doanh nghiệp';
      default: return 'Đăng nhập';
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const mail = email.toLowerCase();
    if (mail.includes('admin')) navigate('/admin/dashboard');
    else if (mail.includes('company')) navigate('/company/kyb');
    else if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'talent' || role === 'worker') navigate('/talent/kyc');
    else if (role === 'business') navigate('/company/kyb');
    else navigate('/talent/kyc'); // default
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10">
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{getTitle()}</h1>
        <p className="text-sm font-medium text-slate-500">
          Chào mừng bạn quay trở lại với WorkMark.
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
            Email
          </label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com" 
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700 placeholder-slate-400"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Mật khẩu
            </label>
            <Link to="/forgot-password" className="text-xs font-bold text-[#047857] hover:underline">
              Quên mật khẩu?
            </Link>
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              required
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#047857] focus:ring-1 focus:ring-[#047857] outline-none transition-all text-sm font-medium text-slate-700 placeholder-slate-400 tracking-widest"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg hover:bg-[#065f46] transition-colors flex items-center justify-center gap-2 mt-2"
        >
          <span>Đăng nhập</span>
          <ArrowRight className="h-4 w-4" />
        </button>

      </form>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-sm font-medium text-slate-500">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="font-bold text-[#047857] hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>

    </div>
  );
};