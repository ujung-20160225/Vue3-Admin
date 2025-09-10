import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from './router';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import './styles/index.less';
import { loadSvg } from '@/icons';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

const app = createApp(App);
// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: localStorage.getItem('v_form_locale') || 'zh', // 默认语言
  fallbackLocale: 'zn',
  globalInjection: true,
  messages
});

loadSvg(app);
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#my-vite-app');
