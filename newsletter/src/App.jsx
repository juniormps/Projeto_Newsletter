import './App.css'
import NewsletterForm from './components/NewsletterForm'
import IlustrationMobile from './assets/images/illustration-sign-up-mobile.svg'

function App() {

  return (
    <>
      <main className='newsletter-container'>
        <img src={IlustrationMobile} alt="ilustração de gráficos" />

        <section className='text-content'>
          <h1>título</h1>

          <p>
            Mantenha-se atualizado! Junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre: ​​Descoberta de produtos e desenvolvimento do que importa. Mensuração para garantir o sucesso das atualizações. E muito mais!
          </p>
          
          <ul>
            <li>
              item 1              
            </li>
            <li>
              item 2
            </li>
            <li>
              item 3
            </li>
          </ul>
        </section>

          <NewsletterForm />
      </main>
    </>
  )
}

export default App
