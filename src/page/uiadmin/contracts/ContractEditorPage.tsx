import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, History, Wand2, Bold, Italic, Underline,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Link, Image, Table, Brackets,
  CheckCircle2, Save, Trash2
} from 'lucide-react';

export const ContractEditorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-6rem)] -m-6 flex flex-col bg-slate-50 relative">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0 z-10 relative">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/admin/contracts')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-slate-800">Mẫu hợp đồng Task v2.0</h1>
            <span className="px-2.5 py-1 bg-[#e2e8f0] text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-wide">
              Nháp
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
            <History className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 border border-[#047857] text-[#047857] hover:bg-emerald-50 font-bold rounded-md text-sm transition-colors">
            Xem trước
          </button>
          <button className="px-5 py-2 bg-[#047857] text-white hover:bg-[#065f46] font-bold rounded-md text-sm transition-colors shadow-sm">
            Publish
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col relative">
          
          {/* WYSIWYG Toolbar */}
          <div className="bg-white border-b border-slate-200 px-6 py-2 flex items-center space-x-6 flex-shrink-0">
            <div className="flex items-center space-x-1">
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700 font-bold"><Bold className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700 font-serif italic"><Italic className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700 underline"><Underline className="h-4 w-4" /></button>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center space-x-1">
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><AlignLeft className="h-4 w-4" /></button>
              <button className="p-1.5 bg-slate-100 rounded text-slate-900"><AlignCenter className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><AlignRight className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><AlignJustify className="h-4 w-4" /></button>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center space-x-1">
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><List className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><ListOrdered className="h-4 w-4" /></button>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center space-x-1">
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><Link className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><Image className="h-4 w-4" /></button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-700"><Table className="h-4 w-4" /></button>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-medium text-xs transition-colors">
              <Brackets className="h-3.5 w-3.5" />
              <span>Biến số</span>
            </button>
          </div>

          {/* Canvas Scroll Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#f1f5f9] flex justify-center pb-32">
            
            {/* A4 Paper */}
            <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg border border-slate-200 p-[2.5cm] flex flex-col text-[15px] font-serif text-slate-900 leading-relaxed">
              
              <div className="text-center space-y-2 mb-10">
                <h2 className="font-bold text-xl uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                <h3 className="font-bold underline italic text-lg pb-8">Độc lập - Tự do - Hạnh phúc</h3>
                <h1 className="font-bold text-2xl uppercase mt-8 text-center text-[#1e293b]">HỢP ĐỒNG DỊCH VỤ CUNG CẤP<br/>NHÂN LỰC TẠM THỜI</h1>
              </div>

              <div className="mb-8 italic text-slate-600 text-sm">
                Căn cứ vào Bộ luật Dân sự số 91/2015/QH13 và các văn bản hướng dẫn thi hành...
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-[16px] uppercase">ĐIỀU 1: THÔNG TIN CÁC BÊN</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4 border-r border-slate-200 pr-8">
                    <h4 className="font-bold uppercase border-b border-slate-200 pb-2 mb-4">BÊN THUÊ DỊCH VỤ (BÊN A)</h4>
                    <p>Tên tổ chức:<br/><span className="bg-emerald-100 text-[#047857] font-sans font-bold text-sm px-1.5 py-0.5 rounded leading-normal">{' {TEN_CONG_TY} '}</span></p>
                    <p>Đại diện:<br/><span className="bg-emerald-100 text-[#047857] font-sans font-bold text-sm px-1.5 py-0.5 rounded leading-normal">{' {DAI_DIEN_BENA} '}</span></p>
                    <p>Địa chỉ: {' {DIA_CHI_A} '}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold uppercase border-b border-slate-200 pb-2 mb-4">BÊN CUNG CẤP (BÊN B)</h4>
                    <p>Tên cá nhân:<br/><span className="bg-emerald-100 text-[#047857] font-sans font-bold text-sm px-1.5 py-0.5 rounded leading-normal">{' {TEN_WORKER} '}</span></p>
                    <p>CCCD/Mã định danh:<br/>{' {ID_WORKER} '}</p>
                    <p>Địa chỉ: {' {DIA_CHI_B} '}</p>
                  </div>
                </div>

                <h3 className="font-bold text-[16px] uppercase pt-4">ĐIỀU 2: PHẠM VI CÔNG VIỆC</h3>
                <p>
                  Bên B cam kết thực hiện các công việc sau đây cho Bên A: <span className="bg-emerald-100 text-[#047857] font-sans font-bold text-sm px-1.5 py-0.5 rounded leading-normal">{' {MO_TA_CONG_VIEC} '}</span>. Thời gian dự kiến hoàn thành là ngày <span className="bg-emerald-100 text-[#047857] font-sans font-bold text-sm px-1.5 py-0.5 rounded leading-normal">{' {NGAY_KET_THUC} '}</span>.
                </p>

                <h3 className="font-bold text-[16px] uppercase pt-4">ĐIỀU 3: THANH TOÁN VÀ PHÍ DỊCH VỤ</h3>
                <p>
                  Bên A có trách nhiệm thanh toán cho Bên B số tiền là <span className="bg-slate-100 font-sans font-bold text-sm px-1.5 py-0.5 rounded">{' {TONG_GIA_TRI} '}</span> VNĐ thông qua hệ thống ký quỹ GigFlow.
                </p>
              </div>

              <div className="mt-auto pt-16 flex justify-between text-xs text-slate-400 font-sans border-t border-slate-100">
                <p>[Đây là nội dung nháp được tạo bởi hệ thống GigFlow Admin Console]</p>
                <p>Trang 1 / 2</p>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* Right Sidebar - Checklist */}
        <div className="w-[320px] bg-white border-l border-slate-200 flex flex-col flex-shrink-0 z-10 relative">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Điều khoản bắt buộc</h2>
            <p className="text-[13px] text-slate-500 font-medium">
              Vui lòng đảm bảo các mục sau đã được cấu hình trong mẫu.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Checked Item */}
            <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-4 flex items-start space-x-3 transition-all hover:shadow-sm">
              <div className="mt-0.5 text-[#2563eb]">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#2563eb] text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-sm mb-1">Thông tin bên A</h4>
                <p className="text-[11px] text-slate-600 font-medium">Đã bao gồm: Tên, Đại diện, Địa chỉ</p>
              </div>
              <CheckCircle2 className="h-5 w-5 text-[#047857]" />
            </div>

            {/* Checked Item */}
            <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-4 flex items-start space-x-3 transition-all hover:shadow-sm">
              <div className="mt-0.5 text-[#2563eb]">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#2563eb] text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-sm mb-1">Thông tin bên B</h4>
                <p className="text-[11px] text-slate-600 font-medium">Đã bao gồm: Tên cá nhân, CCCD</p>
              </div>
              <CheckCircle2 className="h-5 w-5 text-[#047857]" />
            </div>

            {/* Unchecked Item */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 flex items-start space-x-3 transition-all hover:shadow-sm">
              <div className="mt-0.5 text-slate-300">
                <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-700 text-sm mb-1">Phạm vi công việc</h4>
                <p className="text-[11px] text-slate-500 font-medium">Cần chỉ định biến {'{MO_TA_CONG_VIEC}'}</p>
              </div>
            </div>

            {/* Unchecked Item */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 flex items-start space-x-3 transition-all hover:shadow-sm">
              <div className="mt-0.5 text-slate-300">
                <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-700 text-sm mb-1">Thanh toán & Phí</h4>
                <p className="text-[11px] text-slate-500 font-medium">Cần quy định phí nền tảng 5%</p>
              </div>
            </div>

            {/* Unchecked Item */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 flex items-start space-x-3 transition-all hover:shadow-sm">
              <div className="mt-0.5 text-slate-300">
                <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-700 text-sm mb-1">Điều khoản chấm dứt</h4>
                <p className="text-[11px] text-slate-500 font-medium">Yêu cầu báo trước tối thiểu 24h</p>
              </div>
            </div>

            {/* Reference Materials */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">TÀI LIỆU THAM KHẢO</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 relative h-24 rounded-lg bg-slate-200 overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-3 text-white font-bold text-xs">Mẫu HĐ chuẩn ISO 2024</div>
                </div>
                <div className="h-16 rounded-lg bg-slate-200 overflow-hidden cursor-pointer">
                  <div className="w-full h-full bg-slate-300"></div>
                </div>
                <div className="h-16 rounded-lg bg-slate-200 overflow-hidden cursor-pointer">
                  <div className="w-full h-full bg-slate-300"></div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="p-6 border-t border-slate-100 bg-white">
            <button className="w-full py-3 bg-[#eff6ff] hover:bg-[#dbeafe] text-[#2563eb] font-bold rounded-lg text-sm transition-colors flex items-center justify-center space-x-2">
              <Wand2 className="h-4 w-4" />
              <span>Tự động kiểm tra lỗi</span>
            </button>
          </div>
        </div>

      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-64 right-0 h-16 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex items-center justify-center pointer-events-none">
        <div className="bg-[#1e293b] rounded-xl px-6 py-3 flex items-center space-x-6 shadow-xl pointer-events-auto">
          <div className="flex items-center space-x-2 text-slate-300 border-r border-slate-700 pr-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-sm font-medium">Trạng thái: Đang chỉnh sửa</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors text-sm font-bold">
              <Save className="h-4 w-4" />
              <span>Lưu nháp</span>
            </button>
            <button className="flex items-center space-x-1.5 text-slate-400 hover:text-rose-400 transition-colors text-sm font-bold">
              <Trash2 className="h-4 w-4" />
              <span>Hủy bỏ</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
