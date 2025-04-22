import './App.css'
import NewsletterBody from './components/NewsletterBody'
import SuccessMessage from './components/SuccessMessage'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SomePage from './SomePage'
import ButtonEnd from './ButtonEnd'


function App() {

  const [confirmedSubscribing, setConfirmedSubscribing] = useState(false)
  const [email, setEmail] = useState("")

  const success = (email) => {
    setConfirmedSubscribing(true)
    setEmail(email)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/some-page" element={<SomePage />} />
          <Route path="/end" element={<ButtonEnd />} />
        </Routes>
      </BrowserRouter>
      {confirmedSubscribing ? <SuccessMessage address={email} /> : <NewsletterBody success={success} />}
    </>
  )
}

export default App
