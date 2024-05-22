import mainRoutes from './mainRoutes';
import aboutmeRoutes from './aboutmeRoutes';



const routes = [

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  ...mainRoutes,
  ...aboutmeRoutes,
]

export default routes
