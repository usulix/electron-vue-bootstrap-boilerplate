import Index from './pages/Index.vue'
import Settings from './pages/Settings.vue'
import File from './pages/File.vue'

module.exports = {
  routes: [
    { path: '/', component: Index },
    { path: '/settings', component: Settings },
    { path: '/file', component: File },
    { path : '*', redirect : '/' }
  ]
};
