import vueRouter from 'vue-router'
import User from './components/User'
import UserBudget from './components/UserBudget'
import SignUp from './components/SignUp'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/budget/:username',
            name: "user_budget",
            component: UserBudget
        },
        {
            path: '/user/signup/',
            name: "sign_up",
            component: SignUp
        }
    ]
})

export default router