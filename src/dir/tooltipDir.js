export default {
  bind(el, { value }) {
    window.M.Tooltip.init(el, { html: value })
  }
}