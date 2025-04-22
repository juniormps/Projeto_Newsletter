import { useState } from 'react'
import './NewsletterForm.css'
import SuccessMessage from './SuccessMessage'

const NewsletterForm = ({success}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  //atualiza o estado com o valor digitado
  const handleEmail = (e) => {
    setEmail(e.target.value) 
    setError("") //Limpa o erro ao começar a digitar novamente
  }

  //Função de validação do e-mail, utilizando Regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  //Envia o formulário se estiver tudo Ok
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !validateEmail(email)) {
      setError("Adicione um e-mail válido")
      return
    }

    //limpar campo do formulário e o erro (caso haja) após o envio.
    setError("")
    setEmail("")
    success(email)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='label-error-wrapper'>
            <label htmlFor="email">Endereço de e-mail</label>
            {/*Adiciona mensagem de erro em caso de e-mail invalido ou vazio*/}
            {error && <span id='email-error' className="error-message" role='alert'>{error}</span>}
          </div>

          <input 
            type="text" 
            name='email' 
            placeholder='email@company.com' 
            value={email} 
            onChange={handleEmail} 
            aria-invalid={!!error} 
            aria-describedby={error ? "email-error" : undefined}
            className={error ? "error-config" : "input-email"} 
          />
          
        </div>

        <div>
          <input type="submit" value="Assine a newsletter mensal" />
        </div>
        
      </form>
    </>
  )
}

export default NewsletterForm