import Router from '@koa/router'
import taskControllers from '../controllers/task.controllers'

const router = new Router()

router.get('/', taskControllers.getAllTasks)
router.get('/:id', taskControllers.getTask)
router.post('/', taskControllers.createTask)
router.put('/:id', taskControllers.updateTask)
router.delete('/:id', taskControllers.deleteTask)

export default router
