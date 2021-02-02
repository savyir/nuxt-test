import Vue from 'vue'

import Helper from '~/modules/core/src/assets/helper'
import CommonStore from '~/modules/core/src/store/common'
import CommonSelectStore from '~/modules/core/src/store/commonSelect'
import Components from '~/modules/core/src/installComponents'
export default function (ctx, inject) {
  // Options
  // Inject it to nuxt context
  // components

  inject('Helper', Helper)
  inject('$Helper', Helper)
  ctx.Helper = Helper
  ctx.$Helper = Helper

  ctx.store.registerModule('common', CommonStore)
  ctx.store.registerModule('commonSelect', CommonSelectStore)

  // Vue.use(ComponentLibrary)
  ComponentLibrary.install(Vue);
}


