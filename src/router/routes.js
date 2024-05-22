import mainRoutes from './mainRoutes';
import aboutmeRoutes from './aboutmeRoutes';
import carrerSkillsRoutes from './carrerSkillsRoutes';


const routes = [

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  ...mainRoutes,
  ...aboutmeRoutes,
  ...carrerSkillsRoutes,
]

export default routes
