const BaseLayout = () => import("../layouts/MainLayout.vue");

const carrerSkillsRoutes = [
  {
    path: '/contact',
    name: "contact",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "ContactMe",
        name: "ContactMe",
        props: true,
        component: () => import("../pages/ContactPgae.vue")
      }
    ]
  },
]
export default carrerSkillsRoutes
