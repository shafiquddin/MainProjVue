import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/Coaches/CoachesList.vue";
import CoachDetails from "./pages/Coaches/CoachDetails.vue";
import CoachRegister from "./pages/Coaches/CoachRegister.vue";
import ContactCoach from "./pages/Request/ContactCoach.vue";
import RequestRecieved from "./pages/Request/RequestRecieved.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/request", component: RequestRecieved },
    { path: "/register", component: CoachRegister },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
