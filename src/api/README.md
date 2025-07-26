## api 文件介绍

| 文件                     | 说明                  | 备注                                               |
| ------------------------ | --------------------- | -------------------------------------------------- |
| request.ts               | axios 封装            |                                                    |
| README.md                | api 文件说明          |                                                    |
| login/index.ts           | 登录-请求接口         | login/types/login.ts (请求参数类型定义 )           |
| recommended-web/index.ts | 推荐网站管理-请求接口 | recommended-web/types/login.ts (请求参数类型定义 ) |
| ...                      | ...                   | ...                                                |

## 请求接口文件说明

```
├── hot-zone-recommendation              # 热区推荐管理文件, 按照页面划分api
│   └──types
|   |   └──hot-zone-recommendation.ts    # 热区推荐管理类型
|   └──index.ts                          # 热区推荐管理接口
├── recommended-web                      # 推荐网站管理
│   └──types
|   |   └── recommended-web.ts
|   └──index.ts
├── script-instructions                  # 热区推荐管理
│   └──types
|   |   └──script-instructions.ts
|   └──index.ts
```

## request.ts 介绍

1. 实现请求拦截
2. 实现响应拦截
3. 常见错误信息处理
4. 请求头设置
5. api 集中式管理
6. 重复发送请求
