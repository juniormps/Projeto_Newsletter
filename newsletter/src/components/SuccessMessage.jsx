import './SuccessMessage.css'
import IconSuccess from '../assets/images/icon-success.svg'

const SuccessMessage = () => {
  return (
    <>
        <main className='confirmation-container'>
            <img src={IconSuccess} alt="ilustração símbolo Check" />

            <section className='text-content'>
                <h1>Obrigado por assinar!</h1>

                <p>
                    Um e-mail de confirmação foi enviado para ash@loremcompany.com. Abra-o e clique no botão dentro dele para confirmar sua inscrição.
                </p>
          
            </section>
            
        </main>
    </>
  )
}

export default SuccessMessage