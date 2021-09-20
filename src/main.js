import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import 'buefy/dist/buefy.css'

import Buefy, {
  Button,
  Input,
  Field,
  Menu,
  Dropdown,
  Tooltip,
  Switch,
  Checkbox,
  Numberinput,
  Datetimepicker,
  Collapse,
  Icon } from 'buefy';

import store from './store'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Button);
Vue.use(Input);
Vue.use(Field);
Vue.use(Menu);
Vue.use(Dropdown);
Vue.use(Tooltip);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(Numberinput);
Vue.use(Datetimepicker);
Vue.use(Collapse);
Vue.use(Icon);
Vue.use(Buefy)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
