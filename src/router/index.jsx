import { Login } from '../views/Login'
import { Index } from '../views/Index'

const router = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/index',
        element: <Index />
    }
]


export default router