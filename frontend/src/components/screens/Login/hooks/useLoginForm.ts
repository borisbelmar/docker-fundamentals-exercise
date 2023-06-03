import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginPayload } from 'src/@types/User'
import getAuthService from 'src/services/authService'
import { AxiosError } from 'axios'
import { ServiceError } from 'src/@types/ServiceError'
import { toast } from 'react-hot-toast'
import { useAuth } from 'src/components/context/AuthContext'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
})

export default function useLoginForm({ initialEmail = '' }) {
  const { registerToken } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    defaultValues: {
      email: initialEmail,
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(async data => {
    try {
      const { token } = await getAuthService().login(data)
      registerToken(token)
      toast.success('Login successful')
    } catch (error) {
      const axiosError = error as AxiosError
      const serviceErrorResponse = axiosError.response?.data as ServiceError
      toast.error(serviceErrorResponse.message)
    }
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
