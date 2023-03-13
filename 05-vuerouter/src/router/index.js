// 配置路由相关信息
import VueRouter  from "vue-router"
import Vue from "vue";

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')



// 1.通过 Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2. 插件路由VueRouter对象
// 配置具体的映射关系，一个映射关系就是一个对象
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  {
    path: '/home', // 请求路径
    component: Home,
    // 元数据属性
    meta: {
      title: '首页'
    },
    children: [
      // 配置默认路径
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news', // 前面不需要加 /
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '新闻'
        }
      }
    ]
  },
  {
    path: '/about', // 请求路径
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',  //
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes: routes,
  // 配置模式
  mode: "history",
  linkActiveClass: 'active1'

})

// 前置钩子，从 from 跳转到 to。
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title;
//   next()
//   console.log('beforeEach...')
// })

// 后置钩子，不需要调用next函数
router.afterEach((to, from) => {
  document.title = to.matched[0].meta.title;
  // console.log('afterEach...')
})


// 3. 将router对象传入到Vue实例中
export default router
