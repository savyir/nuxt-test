import MENU from '~/assets/js/menu' ;
import SETTINGS from '~/assets/js/settings' ;

export default {
  LOADER: process.env.LOADER == "true",
  SPLASH: process.env.SPLASH == "true",
  TITLE: process.env.TITLE,
  SINGLE_TITLE: process.env.SINGLE_TITLE,
  PER_PAGE: 10,
  MAIN_LOGO: process.env.MAIN_LOGO,
  ADMIN_DRAWER: MENU.ADMIN_DRAWER,
  FOOTER_LINKS: MENU.FOOTER_LINKS,
  PANEL_DRAWER: MENU.PANEL_DRAWER,
  PANEL_TOP_MENU: MENU.PANEL_TOP_MENU,
  DEFAULT_PHOTO: '/dummy/avatar.png',
  SETTINGS_ITEMS: SETTINGS,
  API_URL: process.env.API_URL,
}
