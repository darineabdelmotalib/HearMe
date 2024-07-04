import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes path="/dashboard" element={<DashboardPage />}> </Routes>
    </BrowserRouter>
  )
}

export default App
