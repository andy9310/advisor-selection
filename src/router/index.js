import { createRouter, createWebHashHistory } from 'vue-router'

// import { isAuthenticated } from '@/utils/auth'

const router = createRouter({
  history: createWebHashHistory('/testing/academic_paper_award-mVgBO4y5dvkZ5slhGLjNbMgANP1ZxPDn/dist'),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/password',
      name: 'forget password',
      component: () => import('../views/ForgetPasswordView.vue')
    },
    {
      path: '/admin-portal',
      name: 'admin portal',
      component: () => import('../views/AdminPortalView.vue')
    },
    {
      path: '/alert-resetpassword',
      name: 'alert for reset password',
      component: () => import('../views/Alert/AlertPassword.vue')
    },
    {
      path: '/alert-deletegroup/:group',
      name: 'AlertDeleteGroup',
      component: () => import('../views/Alert/AlertDeleteGroup.vue'),
    },
    {
      path: '/alert-patchgroup/:group',
      name: 'AlertPatchGroup',
      component: () => import('../views/Alert/AlertPatchGroup.vue'),
    },
    {
      path: '/admin-systemparameter',
      name: 'admin system parameter',
      component: () => import('../views/SystemParameter.vue')
    },
    {
      path: '/',
      redirect: '/login'
    },

  ]
})

// router.beforeEach(async (to, from, next) => {
//   if (to.path != '/login' && to.path != '/register') {
//     if (await isAuthenticated()) next()
//     else next({ path: '/login' })
//   } else {
//     next()
//   }
// })

export default router

