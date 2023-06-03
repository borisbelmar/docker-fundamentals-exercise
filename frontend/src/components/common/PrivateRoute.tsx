import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

interface Props {
  Component: React.FC
}

export default function PrivateRoute({ Component }: Props) {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  }, [token, navigate])

  if (!token) {
    return null
  }

  return <Component />
}
