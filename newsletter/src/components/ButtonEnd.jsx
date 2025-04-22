import './ButtonEnd.css'
import { defineConfig } from 'vite'

const ButtonEnd = () => {

    const handleClick = () => {
        window.location.href = defineConfig.base
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