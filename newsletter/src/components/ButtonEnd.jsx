import './ButtonEnd.css'

const ButtonEnd = () => {

    const handleClick = () => {
        window.location.href = '/'
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