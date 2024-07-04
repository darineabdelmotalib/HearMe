import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes path="/dashboard" element={<Dashboard />}> </Routes>
    </BrowserRouter>
  )
}

export default App
