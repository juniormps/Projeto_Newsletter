import { useState } from 'react'
import './App.css'
import NewsletterBody from './components/NewsletterBody'
import SuccessMessage from './components/SuccessMessage'

function App() {

  const [confirmedSubscribing, setConfirmedSubscribing] = useState(false)
  const [email, setEmail] = useState("")

  const success = (email) => {
    setConfirmedSubscribing(true)
    setEmail(email)
  }

  return (
    <>
      {confirmedSubscribing ? <SuccessMessage address={email} /> : <NewsletterBody success={success} />}
    </>
  )
}

export default App
