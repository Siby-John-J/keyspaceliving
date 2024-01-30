import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import { ContactDetails,  TextDetails } from './components/Details'
import { Model } from './components/Header'
import Banner2 from './components/Banner2'
import Footer from './components/Footer'
import { modelContext } from './context/ModelContext'

function App() {
  const [isModel, SetIsModel] = useState(false)
  
  return (
    <modelContext.Provider value={{
      isModel, SetIsModel
    }}>
      <div className="maindiv">
        <Header />  
        <Banner />
        <div className="details mx-2 small:mx-2-zinc-400 flex flex-col items-center justify-evenly mt-6 md:flex-row">
          <TextDetails />
          <ContactDetails />
        </div>
        <Banner2 />
        <Footer />
        {
          isModel === true && <Model />
        }
      </div>
    </modelContext.Provider>
  )
}

export default App
