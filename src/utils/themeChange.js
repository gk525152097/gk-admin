/**
 * 修改主题
 * @param theme 样式对象
 */
function themeChange (theme) {
  console.log(Object.keys(theme).length)
  if (Object.keys(theme).length) {
    for (let key in theme) {
      document.documentElement.style.setProperty(`${key}`, `${theme[key]}`)
    }
  }
}
export default themeChange
