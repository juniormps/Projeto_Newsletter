import './ButtonEnd.css'

const ButtonEnd = () => {

    const handleClick = () => {
        window.location.href = `${process.env.PUBLIC_URL}/`
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