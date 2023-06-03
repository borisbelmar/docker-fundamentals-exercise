import { Toaster } from 'react-hot-toast'
import Router from './Router'
import BaseLayout from './components/layout/BaseLayout'
import { AuthProvider } from './components/context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BaseLayout>
        <Router />
      </BaseLayout>
      <Toaster />
    </AuthProvider>
  )
}

export default App
