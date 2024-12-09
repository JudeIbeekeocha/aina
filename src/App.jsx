import Navbar from './components/Navbar/Navbar.jsx'
import MainContent from './components/Maincontent/Maincontent.jsx'
import TickerTape from './components/Tickertape/Tickertape.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className="root-container">
      <Navbar />
      <MainContent />
      <TickerTape />
    </div>
    </>
  )
}

export default App
