
import './index.css'
import AdminLayout from './layouts/AdminLayout'
import DashboardPage from './page/DashboardPage'
// import LoginPage from './page/auth/LoginPage'
// import VerifyPage from './page/auth/VerifyPage'

function App() {
  return (
    // <LoginPage />
    // <VerifyPage />
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  )
}

export default App