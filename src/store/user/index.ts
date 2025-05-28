import { createPinia, defineStore } from "pinia";
import { storeUserLogin } from "../../api/user";
const pinia = createPinia();

interface UserInfo {}
export const useUserStoreHook = defineStore("userInfo", {
  state: () => ({
    username: "",
    token: "",
    roles: [],
  }),
  getters: {},
  actions: {
    storeUserLogin(data: any) {
      return storeUserLogin({})
        .then((res: any) => {
          this.username = res.username;
          this.token = res.token;
          this.roles = res.roles;
          return res;
        })
        .catch((e: any) => {
          this.token = "";
          console.error(e);
        });
    },
  },
  persist: {
    key: "userInfo",
    storage: sessionStorage,
    paths: ["token"],
  },
});

export function useUserStore() {
  return useUserStoreHook(pinia);
}
