export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.prototype.$message = function (text) {
            window.M.toast({ html: text })
        }
        // eslint-disable-next-line no-unused-vars
        Vue.prototype.$error = function (html) {
            // eslint-disable-next-line no-unused-vars
            window.M.toast({ html: `[Ошибка]: ${html}` })
        }
    }
}

