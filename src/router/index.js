import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const context = require.context('./../views/', true, /.vue$/)
const routes = []
context.keys().forEach(path => {
	const v = context(path)
	routes.push({
		path: '/' + v.default.path,
		component: v.default
	})
})
const router = new Router({
	routes
})



export default router
