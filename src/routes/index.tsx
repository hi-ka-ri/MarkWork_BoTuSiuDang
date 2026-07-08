import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import GuestLayout from '../layouts/GuestLayout';
import AuthLayout from '../layouts/AuthLayout';
import TalentLayout from '../layouts/TalentLayout';

// 1. Chỉ import các trang thực sự nằm trong BlankPages

// 2. Import chính xác từ 2 file giao diện riêng biệt mà bạn vừa tạo
import { UsersManagementPage } from '../page/uiadmin/accounts/UsersManagementPage';
import { BusinessesManagementPage } from '../page/uiadmin/accounts/BusinessesManagementPage';

// THÊM IMPORT TRANG CHI TIẾT DOANH NGHIỆP TẠI ĐÂY
import { BusinessDetailPage } from '../page/uiadmin/accounts/BusinessDetailPage'; 

import { DisputesPage } from '../page/uiadmin/disputes/DisputesPage';
import { DisputeDetailPage } from '../page/uiadmin/disputes/DisputeDetailPage';
import { BypassPage } from '../page/uiadmin/bypass/BypassPage';

import { ContractsPage } from '../page/uiadmin/contracts/ContractsPage';
import { ContractEditorPage } from '../page/uiadmin/contracts/ContractEditorPage';

import { StaticPages } from '../page/uiadmin/content/StaticPages';
import { FaqEditorPage } from '../page/uiadmin/content/FaqEditorPage';
import { BannerEditorPage } from '../page/uiadmin/content/BannerEditorPage';

import { FinancePage } from '../page/uiadmin/finance/FinancePage';
import { FundsPage } from '../page/uiadmin/finance/FundsPage';
import { FeesPage } from '../page/uiadmin/finance/FeesPage';
import { LogsPage } from '../page/uiadmin/logs/LogsPage';

import { BypassSettingsPage } from '../page/uiadmin/settings/BypassSettingsPage';
import { TaxSettingsPage } from '../page/uiadmin/settings/TaxSettingsPage';

// 3. Các trang độc lập khác
import { RegisterPage } from '../page/auth/RegisterPage';
import { LoginPage } from '../page/auth/LoginPage';
import { ForgotPasswordPage } from '../page/auth/ForgotPasswordPage';
import VerifyPage from '../page/auth/VerifyPage';
import DashboardPage from '../page/DashboardPage';
import VerificationPage from '../page/uiadmin/VerificationPage';
import TalentDashboardPage from '../page/uitalent/TalentDashboardPage';
import { TalentFinancePage } from '../page/uitalent/TalentFinancePage';
import { TaxHistoryPage } from '../page/uitalent/TaxHistoryPage';
import { TalentProfilePage } from '../page/uitalent/TalentProfilePage';
import { TalentKYCPage } from '../page/uitalent/TalentKYCPage';
import { JobApplyPage } from '../page/uitalent/JobApplyPage';
import { JobOfferPage } from '../page/uitalent/JobOfferPage';
import { ContractNDAPage } from '../page/uitalent/ContractNDAPage';
import { TalentJobsPage } from '../page/uitalent/TalentJobsPage';
import { SavedJobsPage } from '../page/uitalent/SavedJobsPage';
import { WorkspacePage } from '../page/uitalent/WorkspacePage';
import { NotificationPage } from '../page/uitalent/NotificationPage';
import { SupportLegalPage } from '../page/uitalent/SupportLegalPage';
import KYCReviewPage from '../page/uiadmin/KYCReviewPage';

// 4. Các trang Guest
import { LegalPage } from '../page/uiguest/LegalPage';
import { PricingPage } from '../page/uiguest/PricingPage';
import { VerificationPage as GuestVerificationPage } from '../page/uiguest/VerificationPage';
import { JobsPage } from '../page/uiguest/JobsPage';
import { LandingPage } from '../page/uiguest/LandingPage';
import { HowItWorksPage } from '../page/uiguest/HowItWorksPage';
import { FreelancerProfilePage } from '../page/uiguest/FreelancerProfilePage';

// 5. Các trang Company
import { CompanyLayout } from '../layouts/CompanyLayout';
import { CompanyDashboardPage } from '../page/uicompany/CompanyDashboardPage';
import { PostJobPage } from '../page/uicompany/PostJobPage';
import { ManageJobsPage } from '../page/uicompany/ManageJobsPage';
import { CompanyKYBPage } from '../page/uicompany/CompanyKYBPage';
import { CompanySettingsPage } from '../page/uicompany/CompanySettingsPage';
import { CompanyCandidatesPage } from '../page/uicompany/CompanyCandidatesPage';
import { CompanyWorkspacePage } from '../page/uicompany/CompanyWorkspacePage';
import { CompanyTeamPage } from '../page/uicompany/CompanyTeamPage';
import { CompanyDisputesPage } from '../page/uicompany/CompanyDisputesPage';
import { CompanyFinancePage } from '../page/uicompany/CompanyFinancePage';

export const router = createBrowserRouter([
  // --- 1. LUỒNG ĐĂNG NHẬP & XÁC THỰC (Giao diện độc lập hoàn toàn) ---
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/verify',
        element: <VerifyPage />,
      },
    ]
  },

  // --- 2. LUỒNG HỆ THỐNG QUẢN TRỊ CHÍNH (Bọc bởi AdminLayout) ---
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        // Khi truy cập thẳng vào "/admin", tự động đẩy sang "/admin/dashboard"
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'verification',
        element: <VerificationPage />,
      },
      {
        // Route con xử lý chi tiết 4 bước của phân hệ Xác thực
        path: 'verification/review',
        element: <KYCReviewPage />,
      },
      
      // Phân hệ quản lý tài khoản đã được tách làm 2 route riêng biệt
      {
        path: 'accounts/users',
        element: <UsersManagementPage />,
      },
      {
        path: 'accounts/businesses',
        element: <BusinessesManagementPage />,
      },
      
      // === THÊM ROUTE CHI TIẾT DOANH NGHIỆP VÀO ĐÂY ===
      {
        path: 'accounts/businesses/:id',
        element: <BusinessDetailPage />,
      },

      {
        path: 'disputes',
        element: <DisputesPage />,
      },
      {
        path: 'disputes/:id',
        element: <DisputeDetailPage />,
      },
      {
        path: 'bypass',
        element: <BypassPage />,
      },
      {
        path: 'finance',
        element: <FinancePage />,
      },
      {
        path: 'finance/funds',
        element: <FundsPage />,
      },
      {
        path: 'finance/fees',
        element: <FeesPage />,
      },
      {
        path: 'contracts',
        element: <ContractsPage />,
      },
      {
        path: 'contracts/edit',
        element: <ContractEditorPage />,
      },
      {
        path: 'content/pages',
        element: <StaticPages />,
      },
      {
        path: 'content/faq',
        element: <FaqEditorPage />,
      },
      {
        path: 'content/banners',
        element: <BannerEditorPage />,
      },
      {
        path: 'logs',
        element: <LogsPage />,
      },
      {
        path: 'settings/bypass',
        element: <BypassSettingsPage />,
      },
      {
        path: 'settings/tax',
        element: <TaxSettingsPage />,
      },
    ],
  },

  // --- 3. ĐIỀU HƯỚNG GUEST (Bọc bởi GuestLayout) ---
  {
    path: '/guest',
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        element: <LandingPage />,
      },
      {
        path: 'how-it-works',
        element: <HowItWorksPage />,
      },
      {
        path: 'jobs',
        element: <JobsPage />,
      },
      {
        path: 'talent/:id',
        element: <FreelancerProfilePage />,
      },
      {
        path: 'legal',
        element: <LegalPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'verification',
        element: <GuestVerificationPage />,
      },
    ],
  },

  // --- 4. LUỒNG NGƯỜI LÀM (TALENT / FREELANCER) ---
  {
    path: '/talent',
    element: <TalentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <TalentDashboardPage />,
      },
      {
        path: 'jobs',
        element: <TalentJobsPage />,
      },
      {
        path: 'saved-jobs',
        element: <SavedJobsPage />,
      },
      {
        path: 'workspace',
        element: <WorkspacePage />,
      },
      {
        path: 'support-legal',
        element: <SupportLegalPage />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
      },
      {
        path: 'finance',
        element: <TalentFinancePage />,
      },
      {
        path: 'taxes',
        element: <TaxHistoryPage />,
      },
      {
        path: 'profile',
        element: <TalentProfilePage />,
      },
      // KYC removed from here
      {
        path: 'jobs/:id/apply',
        element: <JobApplyPage />,
      },
      {
        path: 'offers/:id',
        element: <JobOfferPage />,
      },
      {
        path: 'contracts/:id/nda',
        element: <ContractNDAPage />,
      },
    ],
  },
  {
    path: '/talent/kyc',
    element: <TalentKYCPage />,
  },

  // --- 5. LUỒNG COMPANY (Giao diện chuyên cho Client) ---
  {
    path: '/company',
    element: <CompanyLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <CompanyDashboardPage />,
      },
      {
        path: 'post-job',
        element: <PostJobPage />,
      },
      {
        path: 'manage-jobs',
        element: <ManageJobsPage />,
      },
      {
        path: 'kyb',
        element: <CompanyKYBPage />,
      },
      {
        path: 'settings',
        element: <CompanySettingsPage />,
      },
      {
        path: 'talents',
        element: <CompanyCandidatesPage />,
      },
      {
        path: 'workspace',
        element: <CompanyWorkspacePage />,
      },
      {
        path: 'team',
        element: <CompanyTeamPage />,
      },
      {
        path: 'disputes',
        element: <CompanyDisputesPage />,
      },
      {
        path: 'finance',
        element: <CompanyFinancePage />,
      },
      // Các trang Company khác sẽ được thêm vào đây
    ],
  },

  // --- 6. ĐIỀU HƯỚNG AN TOÀN MẶC ĐỊNH ---
  {
    path: '/',
    element: <Navigate to="/guest/home" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/guest/home" replace />,
  },
]);