import './ButtonEnd.css'
import { useNavigate } from 'react-router-dom'


const ButtonEnd = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
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