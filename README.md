# react_travel
**学习React，做一个简单Demo旅游网项目**

涉及技术: React + Typescript + Antd + React-Router + Redux(thunk+toolkit) + JWT

主要包版本：
```json
  "react": "^18.1.0",
  "react-router-dom": "5.2.0",
  "redux": "4.0.5",
  "antd": "^4.20.7",
  "typescript": "^4.7.2",
  "@reduxjs/toolkit": "^1.8.2",
```
---
## 运行说明
需要Node环境及Npm或Yarn

下载解压后在根文件夹使用命令：
`npm install` 或 `yarn install`

成功后使用命令：
`npm start` 或 `yarn start`运行即可


---
## 更新日志：

### 2022.6.12
- **修复进入不同商品页面详情的遗留数据问题**

进入某商品页面后，进行一系列其他操作，再进入另一商品页面会显示上次商品页面残留的数据，原因是状态在组件销毁后仍保持不变。
<font size="3">*解决方案*</font>
组件销毁后初始化状态即可
<br/>

- **修复购物车页面刷新后数据丢失问题**

进入购物车页面刷新后会导致数据丢失进而页面崩溃，原因是刷新后redux会将state初始化
<font size="3">*解决方案*</font>
添加到redux-persist白名单（临时处理）
<br/>

- **增加购物车页面单独删除购物车商品功能**

之前只有清空购物车功能，现添加单独删除购物车商品功能
<br/>

### 2022.6.13
- **对价格展示进行优化，优化购物车页面星级功能**

之前的价格未做处理，会出现三位小数甚至更多位小数
支持购物车页面星级评价展示半星
<br/>

- **引入nonoid作为key生成器**

使用nanoid生成key
<br/>

- **重构Menu组件**

之前使用Antd的Menu组件的写法被警告已经不被推荐且在下一个主要版本会被移除，将其改写为官方推荐写法
<br/>

- **使用react-i18n的Hook**

之前使用的`<Trans></Trans>`的方法感觉不好用，使用useTranslation替代，类组件暂时维持等待替换为函数式组件
<br/>

### 2022.6.19
- **将类组件重构为函数式组件**

首页、银行卡之前使用类组件，重构为函数式组件
<br/>

---
## 学习日志
### 2022.6.1 - CRA初始配置
使用Create-react-app脚手架构建初始应用
<br/>

### 2022.6.2 - 首页简单布局+使用craco初始配置路径
布局首页，并进行部分开发配置

*错误记录*
- 引入antd.min.css而不是antd.css
- Antd中ButtonGroups组件已被Space组件取代
- 水平导航栏中padding-right失效，内部元素不能居中，使用justify-content: space-between代替
- 使用craco 配置开发环境，使用`"@"`代替根路径目录,除了修改craco.config.ts外还需修改tsconfig.json如下：
```json
 "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@": ["src"],
      "@/*": ["src/*"]
    },
  "include": ["src", "craco.config.ts"]
  }
```
<br/>

### 2022.6.3 - 引入react-router
使用react-router对页面进行路由

*错误记录*
- 调用React-Router中的BrowserRouter组件报错：
  `TS2769:No overload matches this call`,Google的解决方案均无作用，此时安装的TS对React-Router的声明文件版本较低，升级到latest(@types/react-router-dom@5.3.3)后解决
- history.push跳转页面，地址栏变化而界面未刷新，解决办法：在TS项目中不要使用`<React.StrictMode></React.StrictMode>`
<br/>

### 2022.6.4 - 引入redux与i18n
引入redux进行状态管理，引入i18n进行国际化操作

*错误记录*
- i18n问题：按官网的示例代码进行配置无法渲染变量，如下:
```Typescript
class HomeComonent extends React.Component<any & WithTranslation> {
  render(){
	const {t} = this.props
	return (<>
  	{
  	t('home.title')
  	}
  </>)
  }
}
export const Home = withTranslation()(HomeComonent)
```
报错`TS2322: Type 'TFunctionResult' is not assignable to type 'ReactNode'.
  Type 'object' is not assignable to type 'ReactNode'.
`
TS阻塞了正常渲染。使用`<Trans><Trans/>`进行包裹代替，如下
```Typescript
<p>
  <Trans>home.title</Trans>
</p>
```
<br/>

### 2022.6.5 - 引入axios、redux中间件
- 引入Axios进行Api调用，引入redux-thunk进行异步action并自定义中间件

*错误记录*

暂无
<br/>

### 2022.6.6 - 实现路线搜索、路线详情页面，引入redux toolkit
对相关页面搭建完成，引入redux-tookit并运用

*错误记录*

- React函数式组件中的props参数自带children，但在TS项目中仍需申明，如下：
```Typescript
type Props = {
  children?: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
```
<br/>

### 2022.6.7 - 实现注册登录页面，引入JWT并持久化登录
使用Antd的Form组件完成页面，并引入JWT进行鉴权，使用redux-persist插件进行localStorage持久化

*错误记录*

暂无
<br/>

### 2022.6.9 - 完成购物车与订单功能，Demo完成
