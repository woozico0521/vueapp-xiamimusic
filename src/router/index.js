import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/find/Find'
import FindMain from '@/components/find/FindMain'
import MusicDetail from '@/components/find/MusicDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/find/findMain',
    },{
      path:'/find',
      name:'Find',
      component:Find,
      children:[
        {
          path:'findMain',
          name:'FindMain',
          component:FindMain,
        },
        {
          path:'musicDetail/:musicId',
          name:'MusicDetail',
          component:MusicDetail,
        }
      ],
    }
  ]
})
