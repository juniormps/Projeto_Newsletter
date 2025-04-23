import { useNavigate } from 'react-router-dom'
import './ButtonEnd.css'


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