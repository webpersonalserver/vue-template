import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * 路由模块引用
 */
const Home = () => import('@/components/layout/home');

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      level: 1, // 路由层级
      isKeepAlive: false // 是否缓存
    }
  }]
});

/**
 * 路由导航守卫---进入路由前
 */
router.beforeEach((to, from, next) => {
  next();
})

export default router;