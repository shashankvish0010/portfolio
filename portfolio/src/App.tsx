import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </>
  )
}

export default App