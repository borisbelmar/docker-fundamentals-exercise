import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface Props {
  Component: React.FC
}

export default function PublicOnlyRoute({ Component }: Props) {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/app', { replace: true })
    }
  }, [token, navigate])

  if (token) {
    return null
  }

  return <Component />
}
