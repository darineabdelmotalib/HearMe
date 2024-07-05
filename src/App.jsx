import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import LandingPage from './pages/LandingPage/LandingPage';
import GetStartedPage from './pages/GetStartedPage/GetStartedPage';
import SpeechToTextPage from './pages/SpeechToTextPage/SpeechToTextPage';
import AslToText from './pages/AslToText/AslToText';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/dashboard/speechtotext" element={<SpeechToTextPage />}></Route>
        <Route path="/dashboard/asltotext" element={<AslToText />}></Route>
        <Route path="/getstarted" element={<GetStartedPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
