import React, { useState } from 'react';
import { 
  DollarSign, Activity, CheckCircle2, AlertTriangle, 
  ArrowUpRight, UserPlus, CheckSquare, ShieldAlert,
  Scale, History
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// ================= DỮ LIỆU ĐỘNG THEO TỪNG MỐC THỜI GIAN =================

const dataByTimeframe = {
  '7days': {
    topCards: {
      gmv: '4.28B đ', gmvChange: '+12.5%',
      tasks: '1,248',
      verify: '942', verifyTotal: '968', verifyRate: '98.2%',
      alerts: '07'
    },
    revenue: [
      { name: 'T.2', active: 20, inactive: 30 },
      { name: 'T.3', active: 40, inactive: 25 },
      { name: 'T.4', active: 28, inactive: 22 },
      { name: 'T.5', active: 68, inactive: 18 },
      { name: 'T.6', active: 30, inactive: 35 },
      { name: 'T.7', active: 60, inactive: 15 },
      { name: 'CN', active: 32, inactive: 28 },
    ]
  },
  'month': {
    topCards: {
      gmv: '18.45B đ', gmvChange: '+8.3%',
      tasks: '5,890',
      verify: '4,120', verifyTotal: '4,250', verifyRate: '96.9%',
      alerts: '24'
    },
    revenue: [
      { name: 'Tuần 1', active: 120, inactive: 80 },
      { name: 'Tuần 2', active: 210, inactive: 95 },
      { name: 'Tuần 3', active: 185, inactive: 110 },
      { name: 'Tuần 4', active: 290, inactive: 75 },
    ]
  },
  'year': {
    topCards: {
      gmv: '214.8B đ', gmvChange: '+24.1%',
      tasks: '64,320',
      verify: '52,180', verifyTotal: '53,400', verifyRate: '97.7%',
      alerts: '142'
    },
    revenue: [
      { name: 'Qúy 1', active: 540, inactive: 310 },
      { name: 'Qúy 2', active: 780, inactive: 290 },
      { name: 'Qúy 3', active: 910, inactive: 420 },
      { name: 'Qúy 4', active: 1200, inactive: 250 },
    ]
  }
};

// Dữ liệu cố định tĩnh không đổi theo thời gian
const depositData = [
  { name: 'Đã hoàn tất', value: 74, amount: '1.2B đ', color: '#047857' },
  { name: 'Đang xử lý', value: 16, amount: '450M đ', color: '#cbd5e1' },
  { name: 'Khiếu nại', value: 10, amount: '120M đ', color: '#b91c1c' },
];

const recentActivities = [
  {
    id: 1,
    icon: UserPlus,
    iconColor: 'text-emerald-600 bg-emerald-50',
    content: <>Người dùng <span className="font-semibold text-slate-800">@minh.nguyen</span> vừa đăng ký tài khoản freelancer.</>,
    time: '10 phút trước',
    meta: 'Xác thực KYC cấp 1'
  },
  {
    id: 2,
    icon: CheckSquare,
    iconColor: 'text-amber-600 bg-amber-50',
    content: <>Hợp đồng <span className="font-semibold text-slate-800">#CON-7721</span> đã được phê duyệt ký quỹ.</>,
    time: '25 phút trước',
    meta: 'Giá trị: 15,000,000 đ'
  },
  {
    id: 3,
    icon: Scale,
    iconColor: 'text-rose-600 bg-rose-50',
    content: <>Mở tranh chấp mới cho nhiệm vụ <span className="font-semibold text-slate-800">#TSK-092</span>.</>,
    time: '1 giờ trước',
    meta: 'Người mua: Anh.Tuan'
  }
];

const DashboardPage: React.FC = () => {
  // Quản lý trạng thái bộ lọc: '7days' | 'month' | 'year'
  const [timeframe, setTimeframe] = useState<'7days' | 'month' | 'year'>('7days');

  // Lấy dữ liệu tương ứng với bộ lọc được chọn
  const currentData = dataByTimeframe[timeframe];

  return (
    <div className="space-y-8">
      
      {/* 4 THỂ THỐNG KÊ PHÍA TRÊN (TOP CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Tổng GMV */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Tổng GMV</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{currentData.topCards.gmv}</h3>
            </div>
            <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              <ArrowUpRight className="h-3 w-3 mr-0.5" /> {currentData.topCards.gmvChange}
            </span>
          </div>
          <div className="mt-4 p-2 bg-emerald-50/50 rounded-xl text-emerald-700 w-fit">
            <DollarSign className="h-5 w-5" />
          </div>
        </div>

        {/* Card 2: Nhiệm vụ */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Nhiệm vụ hoạt động</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{currentData.topCards.tasks}</h3>
            </div>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
              Hoạt động
            </span>
          </div>
          <div className="mt-4 p-2 bg-amber-50 rounded-xl text-amber-700 w-fit">
            <Activity className="h-5 w-5" />
          </div>
        </div>

        {/* Card 3: Tỷ lệ xác thực */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Tỷ lệ xác thực thành công</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">
                {currentData.topCards.verify} 
                <span className="text-sm font-normal text-slate-400"> / {currentData.topCards.verifyTotal}</span>
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              {currentData.topCards.verifyRate}
            </span>
          </div>
          <div className="mt-4 p-2 bg-teal-50 rounded-xl text-teal-700 w-fit">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        {/* Card 4: Cảnh báo */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Cảnh báo hoạt động</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{currentData.topCards.alerts}</h3>
            </div>
            <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-lg">
              Ưu tiên cao
            </span>
          </div>
          <div className="mt-4 p-2 bg-rose-50 rounded-xl text-rose-700 w-fit">
            <AlertTriangle className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* KHU VỰC BIỂU ĐỒ TRUNG TÂM (MIDDLE SECTION) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Biểu đồ Xu hướng doanh thu kết hợp bộ lọc */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Xu hướng doanh thu</h3>
            
            {/* THANH ĐIỀU HƯỚNG BỘ LỌC THỜI GIAN ĐỘNG */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold space-x-1">
              <button 
                onClick={() => setTimeframe('7days')}
                className={`px-3 py-1.5 rounded-lg transition-all ${timeframe === '7days' ? 'bg-[#047857] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                7 ngày
              </button>
              <button 
                onClick={() => setTimeframe('month')}
                className={`px-3 py-1.5 rounded-xl transition-all ${timeframe === 'month' ? 'bg-[#047857] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Theo Tháng
              </button>
              <button 
                onClick={() => setTimeframe('year')}
                className={`px-3 py-1.5 rounded-xl transition-all ${timeframe === 'year' ? 'bg-[#047857] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Theo Năm
              </button>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData.revenue} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="active" stackId="a" fill="#047857" radius={[0, 0, 4, 4]} maxBarSize={32} />
                <Bar dataKey="inactive" stackId="a" fill="#e2e8f0" radius={[4, 4, 0, 0]} maxBarSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ Trạng thái ký quỹ */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Trạng thái ký quỹ</h3>
          <div className="relative flex items-center justify-center h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={depositData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {depositData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="text-2xl font-bold text-slate-800">74%</span>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Đã ký quỹ</p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {depositData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="font-medium text-slate-500">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-700">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KHU VỰC DƯỚI CÙNG (BOTTOM SECTION) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Hoạt động gần đây</h3>
            <div className="space-y-6">
              {recentActivities.map((act) => {
                const Icon = act.icon;
                return (
                  <div key={act.id} className="flex items-start space-x-4 border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <div className={`p-2 rounded-xl ${act.iconColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="text-slate-600">{act.content}</p>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1">
                        <span>{act.time}</span>
                        <span>•</span>
                        <span>{act.meta}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-red-700 font-bold text-sm">
              <ShieldAlert className="h-5 w-5 text-red-600" />
              <span>Cảnh báo ưu tiên</span>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50/50 p-4 rounded-xl border border-red-100/50">
                <h4 className="text-xs font-bold text-red-800">Phát hiện Bypass hệ thống!</h4>
                <p className="text-[11px] text-red-600 mt-1 leading-relaxed">
                  Tài khoản <span className="font-semibold">@bot_checker</span> có hành vi quét API bất thường từ 03 địa chỉ IP khác nhau.
                </p>
                <a href="#" className="text-[11px] text-red-700 font-semibold underline block mt-2">Xem chi tiết nhật ký</a>
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100/50">
                <h4 className="text-xs font-bold text-amber-800">Xác thực KYC tồn đọng</h4>
                <p className="text-[11px] text-amber-600 mt-0.5">
                  Còn 12 yêu cầu xác thực doanh nghiệp chưa được xử lý quá 48h.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-4 bg-[#047857] text-white rounded-xl hover:bg-[#065f46] transition-all space-y-2 text-center shadow-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-[11px] font-semibold">Hàng đợi xác thực</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-slate-200/60 text-slate-700 rounded-xl hover:bg-slate-200 transition-all space-y-2 text-center">
              <UserPlus className="h-5 w-5 text-slate-500" />
              <span className="text-[11px] font-semibold">Quản lý tài khoản</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-slate-200/60 text-slate-700 rounded-xl hover:bg-slate-200 transition-all space-y-2 text-center">
              <Scale className="h-5 w-5 text-slate-500" />
              <span className="text-[11px] font-semibold">Trung tâm tranh chấp</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-slate-200/60 text-slate-700 rounded-xl hover:bg-slate-200 transition-all space-y-2 text-center">
              <History className="h-5 w-5 text-slate-500" />
              <span className="text-[11px] font-semibold">Nhật ký hệ thống</span>
            </button>
          </div>
        </div>
      </div>

      <footer className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
        <p>© 2026 Admin Console - Hệ thống quản lý tập trung. Bảo mật bởi Enterprise Security Framework.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-slate-600">Điều khoản dịch vụ</a>
          <a href="#" className="hover:text-slate-600">Chính sách bảo mật</a>
          <a href="#" className="hover:text-slate-600">Hỗ trợ kỹ thuật</a>
        </div>
      </footer>

    </div>
  );
};

export default DashboardPage;