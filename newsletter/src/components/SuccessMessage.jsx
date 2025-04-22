import './SuccessMessage.css'
import IconSuccess from '../assets/images/icon-success.svg'
import ButtonEnd from './ButtonEnd'

const SuccessMessage = ({address}) => {
  return (
    <>
        <main className='confirmation-container'>

          <div className='icon-container'></div>
           
            <section className='text-content'>
                <h1>Obrigado por assinar!</h1>
                <p>
                    Um e-mail de confirmação foi enviado para <span className='email-confirmed'>{address}</span>. Abra-o e clique no botão dentro dele para confirmar sua inscrição.
                </p>
            </section>

            <ButtonEnd />
        </main>
    </>
  )
}

export default SuccessMessage