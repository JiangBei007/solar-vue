const context = require.context('./../demo/', true, /.vue$/)
const routes = []
context.keys().forEach(path => {
  const v = context(path)
  routes.push({
    path: '/' + v.default.path,
    tags: v.default.tags,
    label: v.default.label,
    component: v.default
  })
})

export default routes
