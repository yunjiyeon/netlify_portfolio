const BaseLayout = () => import("../layouts/MainLayout.vue");

const aboutmeRoutes = [
  {
    path: '/about',
    name: "about",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "AboutMe",
        name: "AboutMe",
        props: true,
        component: () => import("../pages/AboutMe.vue")
      }
    ]
  },
]
export default aboutmeRoutes
