# vue-template

使用 vue3.0 搭建的基础模板,模板中主要集成了 vue-router、vuex、element-ui、sass、axios

## 开始使用

开发流程：
1. `git clone` 此项目
2. `npm install` 安装项目依赖
3. `npm run serve` 启动项目，进入开发模式

正式环境流程：
1. `npm run test` 测试项目
2. `npm run lint` 依据规则检查项目代码
3. `npm run build` 打包正式项目包

# 项目目录结构说明
``````
vue-template
|---------dist                            项目编译打包后的文件(打包以后才有)
|---------public                          静态资源，不经过webpack
|---------src                             项目开发文件
          |-----------assets                          公共资源
                      |--------style                      样式资源
                              |-------common.scss             公共样式文件
          |-----------components                      开发组件文件（页面）
          |-----------router                          路由模块
          |-----------vuex                            vuex数据状态管理
                      |--------getters
                      |--------mutations
                      |--------state
                      |--------store
          |-----------App.vue                         页面总入口
          |-----------main.js                         主js文件
|---------package.json                    npm初始文件
|---------README.md                       项目说明文件
|---------.gitignore                      上传git时，指定忽略上传文件的配置文件
``````

