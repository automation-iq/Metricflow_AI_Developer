import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Reports from './pages/Reports.jsx'
import Configuration from './pages/Configuration.jsx'
import Profile from './pages/Profile.jsx'
import Alerts from './pages/Alerts.jsx'
import History from './pages/History.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="configuration" element={<Configuration />} />
        <Route path="profile" element={<Profile />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default App
