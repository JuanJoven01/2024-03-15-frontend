import { useContext } from 'react'
import './App.css'

import NavBar from './components/NavBar'

import { GlobalContext } from './context/GlobalContext'

function App() {
  const globalContext =useContext(GlobalContext)
  
  return (
    <>
      <NavBar />
      {/* 
      Here we got two elements,
      the fst uses the global context to know when is running a data load from db and render a loading icon
      the snd helps with the routes with react elements, to not uses react-router or react-router-dom
      this function are in GlobalContext Element
      */}
      {globalContext.renderLoading()}
      {globalContext.renderComponent()}
    </>
  )
}

export default App
