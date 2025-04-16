import './App.css'
import NewsletterForm from './components/NewsletterForm'
import IlustrationMobile from './assets/images/illustration-sign-up-mobile.svg'

function App() {

  return (
    <>
      <main className='newsletter-container'>
        <img src={IlustrationMobile} alt="ilustração de gráficos" />

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

          <NewsletterForm />
      </main>
    </>
  )
}

export default App
