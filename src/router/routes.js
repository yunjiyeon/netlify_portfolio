import mainRoutes from './mainRoutes';
import aboutmeRoutes from './aboutmeRoutes';
import carrerSkillsRoutes from './carrerSkillsRoutes';
import projectRoutes from './projectRoutes';
import contactRoutes from './contactRoutes';

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
  ...contactRoutes,
]

export default routes
