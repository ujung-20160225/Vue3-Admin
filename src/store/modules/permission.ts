const Layout = () => import('@/views/layout/index.vue');
export const usePermissionStore = defineStore('permissionInfo', () => {
  //实际开发中从后端接口获取
  const routes = ref([
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
            svgIcon: 'menu',
            title: '系统设置'
          },
          children: [
            {
              name: 'user',
              path: '/settings/user',
              meta: {
                svgIcon: '',
                title: '用户设置'
              },
              component: () => import('@/pages/settings/user/index.vue')
            },
            {
              name: 'role',
              path: '/settings/role',
              meta: {
                svgIcon: '',
                title: '角色设置'
              },
              component: () => import('@/pages/settings/role/index.vue')
            },
            {
              name: 'menu',
              path: '/settings/menu',
              meta: {
                svgIcon: '',
                title: '菜单设置'
              },
              component: () => import('@/pages/settings/menu/index.vue')
            }
          ]
        }
      ]
    }
  ]);

  return { routes };
});
