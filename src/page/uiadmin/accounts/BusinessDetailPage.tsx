import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { BusinessGeneralInfo } from '../../../components/admin/business/BusinessGeneralInfo';
import { BusinessDataTables } from '../../../components/admin/business/BusinessDataTables';

export const BusinessDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5 p-6 bg-slate-50/40 min-h-screen">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2">
        <button 
          onClick={() => navigate('/admin/accounts/businesses')}
          className="flex items-center space-x-1.5 text-slate-400 hover:text-slate-700 transition text-xs font-semibold bg-transparent border-none cursor-pointer outline-none"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Quay lại danh sách</span>
        </button>
      </div>

      {/* BỐ CỤC 2 CỘT RÕ RÀNG HOÀN TOÀN THEO FIGMA (Image 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Cột trái: Chiếm 1/3 không gian */}
        <div className="lg:col-span-1">
          <BusinessGeneralInfo />
        </div>

        {/* Cột phải: Chiếm 2/3 không gian chuyên để hiển thị Tab dữ liệu */}
        <div className="lg:col-span-2">
          <BusinessDataTables />
        </div>

      </div>
    </div>
  );
};