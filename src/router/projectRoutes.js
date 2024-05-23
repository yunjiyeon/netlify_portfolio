const BaseLayout = () => import("../layouts/MainLayout.vue");

const projectRoutes = [
  {
    path: '/project',
    name: "project",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "ProjectInfo",
        name: "ProjectInformation",
        props: true,
        component: () => import("../pages/ProjectPage.vue")
      }
    ]
  },
]
export default projectRoutes
