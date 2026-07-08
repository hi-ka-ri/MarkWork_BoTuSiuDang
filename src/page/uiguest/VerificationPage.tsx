import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Lock, Wallet, FileCheck, CheckSquare, Fingerprint, Search, Shield, Clock,
  Smartphone
} from 'lucide-react';

export const VerificationPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] flex-1">
      
      {/* Hero Section */}
      <div className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-indigo-100">
          Trust Infrastructure
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
          An toàn là ưu tiên số một
        </h1>
        <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Tại Guest, chúng tôi xây dựng một môi trường làm việc minh bạch, nơi mọi kết nối đều được bảo vệ bởi công nghệ xác thực tiên tiến và cơ chế tài chính an toàn tuyệt đối.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-[#047857]">
          <div className="flex items-center space-x-2">
            <CheckSquare className="h-5 w-5" />
            <span>Đã xác thực 100%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wallet className="h-5 w-5" />
            <span>Thanh toán bảo mật Escrow</span>
          </div>
        </div>
      </div>

      {/* KYC/KYB Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-8 lg:p-16 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Xác thực danh tính bắt buộc</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Chúng tôi loại bỏ hoàn toàn rủi ro giả mạo thông tin thông qua quy trình kiểm soát đầu vào khắt khe cho cả cá nhân và tổ chức.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border border-slate-200 rounded-2xl flex items-start space-x-4 bg-slate-50/50">
                <div className="p-3 bg-emerald-100 text-[#047857] rounded-xl flex-shrink-0">
                  <Fingerprint className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">eKYC cho cá nhân</h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Sử dụng công nghệ nhận diện khuôn mặt và đối soát CCCD chéo qua hệ thống VNPT, FPT hoặc định danh điện tử VNeID.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-slate-200 rounded-2xl flex items-start space-x-4 bg-slate-50/50">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl flex-shrink-0">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">KYB cho doanh nghiệp</h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Xác minh mã số thuế, giấy phép đăng ký kinh doanh và tư cách pháp nhân người đại diện trước khi kích hoạt tài khoản.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            {/* Phone Mockup Illustration */}
            <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 w-32 h-6 bg-slate-800 rounded-b-3xl"></div>
              
              <div className="w-full h-full bg-white flex flex-col pt-12 px-6">
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#047857] p-2 relative">
                    <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden flex items-center justify-center">
                       <Smartphone className="h-12 w-12 text-slate-300" />
                    </div>
                    <div className="absolute -right-2 -bottom-2 bg-[#047857] text-white p-1.5 rounded-full">
                      <CheckSquare className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-800 mb-1">Xác thực khuôn mặt</div>
                    <div className="text-xs font-medium text-slate-500">Đang tiến hành đối soát...</div>
                  </div>
                  
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-[#047857] w-2/3 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Escrow Steps */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Ký quỹ Escrow qua ngân hàng</h2>
        <p className="text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-16">
          Xóa bỏ nỗi lo về rủi ro thanh toán. Sự an tâm giao dịch với tư cách trung gian giữ ngân sách an toàn cho đến khi công việc thực sự hoàn thành.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#eef2ff] border border-indigo-100 rounded-2xl p-8 relative text-left">
            <span className="absolute top-6 left-6 text-5xl font-bold text-indigo-200/50">01</span>
            <div className="relative z-10 flex flex-col items-center text-center pt-8">
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-6 text-indigo-500">
                <Wallet className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-3">Nạp ngân sách</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Doanh nghiệp nạp 100% ngân sách dự án vào một Virtual Account định danh tại ngân hàng đối tác.
              </p>
            </div>
          </div>

          <div className="bg-[#f0fdf4] border border-emerald-100 rounded-2xl p-8 relative text-left">
            <span className="absolute top-6 left-6 text-5xl font-bold text-emerald-200/50">02</span>
            <div className="relative z-10 flex flex-col items-center text-center pt-8">
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-6 text-[#047857]">
                <Lock className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-3">Tạm khóa quỹ</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Hệ thống tự động khóa ngân sách. Tài năng yên tâm bắt đầu làm việc khi biết chắc chắn tiền đã được ký quỹ.
              </p>
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-8 relative text-left">
            <span className="absolute top-6 left-6 text-5xl font-bold text-slate-200/50">03</span>
            <div className="relative z-10 flex flex-col items-center text-center pt-8">
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-6 text-slate-600">
                <CheckSquare className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-3">Giải ngân</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Chỉ khi doanh nghiệp xác nhận nghiệm thu kết quả, ngân sách mới được giải ngân về ví của người làm.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Fraud Prevention Section */}
      <div className="bg-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Dark Green Card */}
            <div className="lg:w-[40%] bg-[#0f342b] rounded-3xl p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Cơ chế chống gian lận</h2>
              <p className="text-emerald-100 font-medium mb-10 leading-relaxed">
                Hệ thống bảo vệ đa lớp của chúng tôi theo dõi và can thiệp kịp thời để đảm bảo quyền lợi cho cả hai bên.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  <span className="font-bold">NDA điện tử mặc định</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Search className="h-5 w-5 text-emerald-400" />
                  <span className="font-bold">Log giao dịch minh bạch</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <span className="font-bold">Trung tâm giải quyết tranh chấp</span>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:w-[60%] flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row gap-6 h-full">
                {/* Smart Contract */}
                <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-sm">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">CÔNG NGHỆ LÕI</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Hợp đồng thông minh</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Mọi thỏa thuận đều được số hóa và có giá trị pháp lý, tự động kích hoạt các điều khoản bồi thường nếu có vi phạm.
                  </p>
                </div>

                {/* AI Monitoring */}
                <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-sm">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">GIÁM SÁT 24/7</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">AI Monitoring</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Hệ thống AI phát hiện các hành vi bất thường như chia sẻ thông tin thanh toán ngoài nền tảng hoặc lừa đảo chiếm đoạt tài khoản.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="bg-[#eef2ff] rounded-3xl p-8 flex items-center space-x-6 border border-indigo-100">
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Hỗ trợ 24/7</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Đội ngũ chuyên viên pháp lý luôn sẵn sàng can thiệp trong vòng 2 giờ khi có khiếu nại.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Partners & Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        
        <div className="mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">ĐỐI TÁC BẢO MẬT HÀNG ĐẦU</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <h3 className="text-2xl font-bold text-slate-700">VNPT</h3>
            <h3 className="text-2xl font-bold text-slate-700">FPT.AI</h3>
            <h3 className="text-2xl font-bold text-slate-700">VNeID</h3>
            <h3 className="text-2xl font-bold text-slate-700">Techcombank</h3>
          </div>
        </div>

        <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Bắt đầu trải nghiệm Guest ngay hôm nay</h2>
          <p className="text-slate-600 font-medium leading-relaxed max-w-lg mx-auto mb-10">
            Gia nhập cộng đồng làm việc chuyên nghiệp, nơi sự an toàn và minh bạch là nền tảng cho mọi thành công.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-3.5 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Tôi là Doanh nghiệp</span>
            </Link>
            <Link to="/register" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2">
              <FileCheck className="h-4 w-4" />
              <span>Tôi là Người làm</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
