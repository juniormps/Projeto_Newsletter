import { useState } from 'react'
import './App.css'
import NewsletterBody from './components/NewsletterBody'
import SuccessMessage from './components/SuccessMessage'

function App() {

  const [confirmedSubscribing, setConfirmedSubscribing] = useState(false)

  const success = () => {
    setConfirmedSubscribing(true)
  }

  return (
    <>
      {confirmedSubscribing ? <SuccessMessage /> : <NewsletterBody success={success} />}
    </>
  )
}

export default App
