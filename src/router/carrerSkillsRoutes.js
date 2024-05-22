const BaseLayout = () => import("../layouts/MainLayout.vue");

const carrerSkillsRoutes = [
  {
    path: '/skills',
    name: "skills",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "CarrerSkills",
        name: "CarrerSkills",
        props: true,
        component: () => import("../pages/CarrerSkills.vue")
      }
    ]
  },
]
export default carrerSkillsRoutes
