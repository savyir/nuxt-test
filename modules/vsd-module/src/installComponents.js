import * as components from "~/modules/core/src/components/index";
import JsonExcel from "vue-json-excel";
import Helper from '~/modules/core/src/assets/helper'

// const moduleOptions = <%= JSON.stringify(options) %>;
// const mixins = require(`${moduleOptions.scheme}`).default || [];

const ComponentLibrary = {
  install(Vue, options = {}) {
    // console.log(2, {options})
    try {
      Vue.component("downloadExcel", JsonExcel);
      Vue.set(Vue.prototype, 'Helper', Helper);
      // Vue.set(Vue.prototype, '$Helper', Helper);
      for (const componentName in components.default) {
        let component = components.default[componentName]
        // console.log({component, componentName})
        try {
          Vue.component(componentName, component);
        } catch (e) {
          console.error({componentName, e})
        }
      }
    } catch (e) {
      console.error({e})
    }
  }
}

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}
