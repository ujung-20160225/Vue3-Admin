import { createPinia, defineStore } from 'pinia';
import { userLoginApi } from '../../api/user';
const pinia = createPinia();

export const useUserStoreHook = defineStore('userInfo', {
  state: () => ({
    username: '',
    token: '',
    roles: []
  }),
  getters: {},
  actions: {
    async storeUserLogin(data: any) {
      const res = await userLoginApi(data);
      this.$patch({
        username: data.userName,
        token: res
      });
    },
    logout() {
      this.$reset();
    }
  },
  persist: {
    key: 'userInfo',
    storage: sessionStorage,
    paths: ['username', 'token']
  }
});

export function useUserStore() {
  return useUserStoreHook(pinia);
}
