import pagesRoutes from '~pages';
import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: 'dashboard',
    children: pagesRoutes
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/index.vue'),
    hidden: true
  }
];

// 组合路由信息
// import.meta.glob 为 vite 提供的特殊导入方式
// 它可以将模块中全部内容导入并返回一个Record对象
// 默认为懒加载模式 加入配置项 eager 取消懒加载
// const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
//     eager: true
// });
// const routes: Array<RouteRecordRaw> = [];
// Object.keys(modules).forEach((key) => {
//     const module = modules[key].default;
//     routes.push(module);
// });
// routes.push(aboutRouter);
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const noStatusPage = ['/login'];
router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  const token = sessionStorage.getItem('userInfo');
  const userIsLogin = token ? true : false;
  if (userIsLogin || noStatusPage.includes(_to.path)) {
    next();
  } else {
    next('/login');
  }
});
router.afterEach((_to) => {
  NProgress.done();
});
export default router;
