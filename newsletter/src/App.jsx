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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui nostrum veniam harum praesentium perspiciatis ipsum eaque at? Voluptas eaque cum magnam ratione esse. Iste labore alias officiis assumenda quisquam!
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
