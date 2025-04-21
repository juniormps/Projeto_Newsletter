import './NewsletterBody.css'
import NewsletterForm from './NewsletterForm'

const NewsletterBody = ({success}) => {
  return (
    <>
      <main className='newsletter-container'>

        <div className='image-container'></div>

        <div className='content-container'>
          <section className='text-content'>
            <h1>Mantenha-se atualizado!</h1>
            <p>
              Junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre:
            </p>
          
            <ul>
              <li>
                Descoberta de produtos e desenvolvimento do que importa
              </li>
              <li>
                Mensuração para garantir o sucesso das atualizações
              </li>
              <li>
                E muito mais!
              </li>
            </ul>
          </section>

          <NewsletterForm success={success}/>
        </div>
      </main>
    </>
  )
}

export default NewsletterBody