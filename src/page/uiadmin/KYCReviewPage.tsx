import React, { useState } from 'react';
import { useNavigate as useReactNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import 4 sub-components đã tách phân cấp
import { Step1Info } from './kyc-steps/Step1Info';
import { Step2OCR } from './kyc-steps/Step2OCR';
import { Step3Logs } from './kyc-steps/Step3Logs';
import { Step4Risk } from './kyc-steps/Step4Risk';

const KYCReviewPage: React.FC = () => {
  const navigate = useReactNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [adminNote, setAdminNote] = useState<string>('');

  const nextStep = () => currentStep < 4 && setCurrentStep((p) => p + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep((p) => p - 1);

  return (
    <div className="space-y-6 text-slate-700 pb-12">
      
      {/* HEADER BANNER STEPPER */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => currentStep === 1 ? navigate('/admin/verification') : prevStep()}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-500"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-800">Kiểm tra hồ sơ định danh</h2>
            <p className="text-xs text-slate-400">Hồ sơ: <span className="font-semibold text-emerald-600">#USR-8829-VN</span></p>
          </div>
        </div>

        {/* Khối Stepper hiển thị tiến trình */}
        <div className="flex items-center space-x-6 text-xs font-semibold">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-lg flex items-center justify-center font-bold transition-all ${
                currentStep === step ? 'bg-[#047857] text-white' : currentStep > step ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
              }`}>
                {step}
              </span>
              <span className={`hidden md:inline ${currentStep === step ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>
                {step === 1 && "Thông tin"}
                {step === 2 && "CCCD & OCR"}
                {step === 3 && "Lịch sử"}
                {step === 4 && "Đánh giá"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RENDER NỘI DUNG THEO TỪNG BƯỚC ĐÃ ĐƯỢC PHÂN CẤP */}
      <div className="min-h-[300px]">
        {currentStep === 1 && <Step1Info />}
        {currentStep === 2 && <Step2OCR />}
        {currentStep === 3 && <Step3Logs />}
        {currentStep === 4 && <Step4Risk note={adminNote} setNote={setAdminNote} />}
      </div>

      {/* THANH ĐIỀU HƯỚNG NÚT BẤM DƯỚI CÙNG */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
        <button 
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50'}`}
        >
          Trang trước
        </button>

        {currentStep === 4 ? (
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-amber-200 bg-amber-50 text-amber-700 font-semibold rounded-xl text-xs hover:bg-amber-100/60">Yêu cầu bổ sung</button>
            <button className="px-4 py-2 bg-rose-700 text-white font-semibold rounded-xl text-xs hover:bg-rose-800">✕ Từ chối</button>
            <button 
              onClick={() => { alert('Đã duyệt hồ sơ thành công!'); navigate('/admin/verification'); }}
              className="px-4 py-2 bg-slate-900 bg-[#047857] text-white font-semibold rounded-xl text-xs hover:bg-[#065f46]"
            >
              ✓ Phê duyệt hồ sơ
            </button>
          </div>
        ) : (
          <button 
            onClick={nextStep}
            className="px-5 py-2 bg-[#047857] text-white font-semibold rounded-xl text-xs hover:bg-[#065f46] flex items-center space-x-1"
          >
            <span>Tiếp theo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};

export default KYCReviewPage;