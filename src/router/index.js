import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Courses from "../views/Courses.vue"
import Contact from "../views/Contact.vue"
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Menu from "../views/MobileMenu.vue"
import Course from "../views/Course.vue"
import Profile from "../views/Profile.vue"

// import firebase and build a watcher => auth().onAuthStateChange()

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
