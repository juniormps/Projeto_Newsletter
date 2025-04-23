import { useLocation } from 'react-router-dom'
import SuccessMessage from "../components/SuccessMessage"

const SuccessPage = () => {

  const location = useLocation()
  const email = location.state?.email || "usuário"
  return (
    <>
        <SuccessMessage address={email} />
    </>
  )
}

export default SuccessPage