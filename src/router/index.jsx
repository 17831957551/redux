import { Login } from '../views/Login'
import { Index } from '../views/Index'

const router = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/index',
        element: <Index />
    },
    {
        path: '*',
        element: '404页面'
    }
]
export default router