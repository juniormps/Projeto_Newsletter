import './ButtonEnd.css'

const ButtonEnd = () => {

    const handleClick = () => {
        window.location.href = 'https://juniormps.github.io/Projeto_Newsletter/'
    }

  return (
    <>
        
        <button className='end-button' onClick={handleClick}>
            Voltar para o início
        </button>
        
    </>
  )
}

export default ButtonEnd