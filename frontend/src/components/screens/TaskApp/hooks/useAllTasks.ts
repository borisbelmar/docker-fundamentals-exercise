import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Task } from 'src/@types/Task'
import { useAuth } from 'src/components/context/AuthContext'
import getTaskService from 'src/services/taskService'

export default function useAllTasks() {
  const { token } = useAuth()
  const [tasks, setTasks] = useState<Task[]>()
  const [loading, setLoading] = useState(false)

  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const receivedTasks = await getTaskService(token).getAll()
      setTasks(receivedTasks)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      toast.error('Error fetching tasks')
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return {
    tasks,
    refetch: handleFetch,
    loading
  }
}
