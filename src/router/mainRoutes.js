const BaseLayout = () => import("../layouts/MainLayout.vue");

const mainRoutes = [
  {
    path: '/',
    name: "main",
    component: BaseLayout,
    children: [
      {
        path:"",
        name:"MainPage",
        component: () => import('pages/MainPage.vue'),
      }
    ]
  },
]
export default mainRoutes
