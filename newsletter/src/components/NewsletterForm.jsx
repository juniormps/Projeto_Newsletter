import { useState } from 'react'
import './NewsletterForm.css'

const NewsletterForm = () => {
  const [email, setEmail] = useState("")

  const handleEmail = (e) => setEmail(e.target.value)

  console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Enviando formulário...")
    console.log(`E-mail cadastrado: ${email}`)

    //limpar campo do formulário após o envio
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Endereço de e-mail</label>
            <input type="email" name='email' placeholder='email@company.com' onChange={handleEmail} />
          </div>

          <div>
            <input type="submit" value="Assine a newsletter mensal" />
          </div>
          
        </form>
    </>
  )
}

export default NewsletterForm