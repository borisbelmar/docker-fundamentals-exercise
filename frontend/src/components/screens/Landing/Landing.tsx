import { Link } from 'react-router-dom'
import Button from 'src/components/common/Button'

export default function Landing() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center space-y-4">
      <h1 className="text-4xl font-bold ">
        My Task App
      </h1>
      <p>
        My Task App is a simple task manager app.
      </p>
      <Link to="/login">
        <Button>
          Iniciar sesión
        </Button>
      </Link>
    </div>
  )
}
