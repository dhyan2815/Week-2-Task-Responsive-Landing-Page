import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Features from './components/Features'
import Footer from './components/Footer'
import Introduction from './components/Introduction'

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Introduction/>
        <Products/>
        <Features/>
        <Footer/>
      </div>  
    </>
  )
}

export default App
