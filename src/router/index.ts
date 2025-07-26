import pagesRoutes from '~pages';
import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '@/views/layout/index.vue'

const routes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/index.vue'),
    meta: {
      hidden: true
    },
    alias: '/:pathMatch(.*)*'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        meta: {
          svgIcon: 'dashboard',
          title: '首页'
        },
        component: () => import('@/pages/dashboard/index.vue')
      },
      {
        name: 'About',
        path: '/about',
        meta: {
          svgIcon: 'hot',
          title: '其它'
        },
        component: () => import('@/pages/about/index.vue')
      },
      {
        name: 'Settings',
        path: '/settings',
        redirect: '/settings/user',
        meta: {
          svgIcon: 'setting',
          title: '系统设置'
        },
        children: [
          {
            name: 'user',
            path: '/settings/user',
            meta: {
              svgIcon: 'user',
              title: '用户设置'
            },
            component: () => import('@/pages/settings/user/index.vue')
          },
          {
            name: 'role',
            path: '/settings/role',
            meta: {
              svgIcon: 'role',
              title: '角色设置'
            },
            component: () => import('@/pages/settings/role/index.vue')
          },
          {
            name: 'menu',
            path: '/settings/menu',
            meta: {
              svgIcon: 'menu',
              title: '菜单设置'
            },
            component: () => import('@/pages/settings/menu/index.vue')
          }
        ]
      }
    ]
  }
];
// const routes = [
//   {
//     path: '/',
//     component: () => import('@/views/layout/index.vue'),
//     redirect: 'dashboard',
//     children: pagesRoutes
//   },
//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error-page/index.vue'),
//     hidden: true
//   }
// ];

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
