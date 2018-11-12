import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/find/Find'
import Play from '@/components/play/Play'
import MyMusic from '@/components/myMusic/MyMusic'
import Dynamic from '@/components/dynamic/Dynamic'
import Mine from '@/components/mine/Mine'
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
        /* {
          path:'musicDetail/:musicId',
          name:'MusicDetail',
          component:MusicDetail,
        } */
      ],
    },{
        path:'/find/musicDetail/:musicId',
        name:'MusicDetail',
        component:MusicDetail,
      },
    {
      path:'/play',
      name:'Play',
      component:Play,
    },{
      path:'/myMusic',
      name:'MyMusic',
      component:MyMusic,
    },{
      path:'/dynamic',
      name:'Dynamic',
      component:Dynamic,
    },{
      path:'/mine',
      name:'Mine',
      component:Mine,
    }
  ]
})
