import Vue from 'vue'
import { Button, Container, Aside, Main, Header, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownMenu, DropdownItem,Row,Col,Card,Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag,Input,Select,Option,Switch,DatePicker,Dialog,Form,FormItem,Pagination, MessageBox, Message,}from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
// 引入样式
import '@/assets/less/index.less'
// 引入路由router
import router from './router'
// 引入store
import store from '@/store'
// 引入axios
import http from 'axios'
// 引入mock
import '../api/mock.js'
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Pagination);

// 使用axios插件
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
