import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SuccessPage from './pages/SuccessPage'


function App() {

  //const [confirmedSubscribing, setConfirmedSubscribing] = useState(false)
  const [email, setEmail] = useState("")

  const success = (email) => {
    //setConfirmedSubscribing(true)
    setEmail(email)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage success={success} />} />
        <Route path="/success" element={<SuccessPage email={email} />} />
      </Routes>
    </>
  )
}

export default App
