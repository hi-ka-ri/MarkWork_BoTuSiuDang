import { Outlet, Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans">
      
      {/* Header */}
      <header className="bg-white py-6 flex justify-center border-b border-slate-100">
        <Link to="/guest/home" className="text-3xl font-bold text-[#047857] tracking-tight hover:opacity-80 transition-opacity">
          WorkMark
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 bg-[#f1f5f9] border-t border-slate-200 text-sm font-medium text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Enterprise Talent. Professional Warmth in Recruitment.</p>
          <div className="flex space-x-6">
            <Link to="/guest/legal" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link to="/guest/legal" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors">Support</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
