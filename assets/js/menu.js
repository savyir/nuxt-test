import path from 'path';
let menu = [];
const envName = process.env.envName;

try {
  menu = require(`~/assets/js/${envName}.js`).default;
} catch (e) {
  console.warn(`build a menu for your dashboard admin. ~/assets/js/${envName}.js`)
}
export default menu
