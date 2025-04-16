import { useState } from 'react'
import './NewsletterForm.css'

const NewsletterForm = () => {

  const handleSubmit = () => {

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Endereço de e-mail</label>
            <input type="email" name='email' placeholder='email@company.com'/>
          </div>

          <div>
            <input type="submit" value="Assine a newsletter mensal" />
          </div>
          
        </form>
    </div>
  )
}

export default NewsletterForm