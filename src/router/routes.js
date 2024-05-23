import mainRoutes from './mainRoutes';
import aboutmeRoutes from './aboutmeRoutes';
import carrerSkillsRoutes from './carrerSkillsRoutes';
import projectRoutes from './projectRoutes';

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
  ...projectRoutes,
]

export default routes
