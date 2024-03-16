import { useContext } from 'react'
import './App.css'

import NavBar from './components/NavBar'

import { GlobalContext } from './context/GlobalContext'

function App() {
  const globalContext =useContext(GlobalContext)

  return (
    <>
      <NavBar />
      {globalContext.renderComponent()}
      <h1 className='bg-slate-500'>Hola mundo!</h1>
    </>
  )
}

export default App
