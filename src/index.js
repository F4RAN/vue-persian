// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.prototype.$persianDigits = (value) => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return value
            .toString()
            .split('')
            .map(x => farsiDigits[x])
            .join('');
    }
    Vue.prototype.$stringDigits = (value) => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        let index;
        for (var i = 0; i < value.length; i++) {
            index = value.toString().search(/[0-9]/);
            value = value.replace(value[index], farsiDigits[value[index]])
        }
        return value
    }
}
const vuePersian = install
    // Create module definition for Vue.use()
const plugin = {
    install,
};
// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default vuePersian;