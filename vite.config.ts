import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Pages from 'vite-plugin-pages';
import ViteCompression from 'vite-plugin-compression';
import brotli from 'rollup-plugin-brotli';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path, { resolve } from 'path';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取当前工作目录
  const root = process.cwd();
  // 获取环境变量
  const env = loadEnv(mode, root);
  console.log('env', env);

  return {
    server: {
      host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      port: 9000, // 开发环境预览服务器端口
      open: false, // 启动后是否自动打开浏览器
      proxy: {
        '/api': {
          target: 'https://m1.apifoxmock.com/m1/6136080-5827865-default/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    root, // 项目根目录
    base: './', // 项目部署的基础路径
    publicDir: fileURLToPath(new URL('./public', import.meta.url)), // 无需处理的静态资源位置
    assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)), // 需要处理的静态资源位置
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import '@/styles/variable.less';`
        }
      }
    },
    plugins: [
      vue(), // Vue模板文件编译插件
      vueJsx(), // jsx文件编译插件
      Pages({
        dirs: ['src/pages']
      }),
      brotli({}),
      // ViteCompression({
      //     threshold: 1024 * 20,
      //     ext: '.gz',
      //     algorithm: 'gzip'
      // }),
      ElementPlus({}), // 开启ElementPlus自动引入CSS
      // 自动导入组件
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'], // 定义需要自动引入的框架
        eslintrc: {
          enabled: true // 处理eslint
        },
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(new URL('./types/auto-imports.d.ts', import.meta.url))
      }),
      // 自动注册组件
      Components({
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(new URL('./types/components.d.ts', import.meta.url))
      }),
      Icons({
        autoInstall: true
      }),
      /** SVG */
      createSvgIconsPlugin({
        // 指定 SVG 图标目录（绝对路径）
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        // 定义 symbolId 格式
        symbolId: 'icon-[dir]-[name]',
        // 可选：自定义插入位置
        inject: 'body-last',
        // 可选：启用开发时热更新
        hotUpdate: true
      }),
      VueI18nPlugin({
        include: [
          path.resolve(__dirname, 'src/locales/*.yaml'), // 全局翻译文件
          path.resolve(__dirname, 'src/**/*.vue')
        ], // 处理所有 .vue 文件
        compositionOnly: false // 支持 Options API
      })
    ],

    // 打包配置
    build: {
      sourcemap: false, // 关闭 sorcemap 报错不会映射到源码
      chunkSizeWarningLimit: 400, // 打包大小超出 400kb 提示警告
      rollupOptions: {
        input: {
          index: fileURLToPath(new URL('./index.html', import.meta.url)) // 打包入口文件也就是项目从哪个文件开始打包
        },
        output: {
          // 静态资源分类打包
          format: 'esm',
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    // 配置别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url))
      }
    }
  };
});
