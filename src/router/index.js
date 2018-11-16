import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/find/Find'
import FindMain from '@/components/find/FindMain'
import MusicDetail from '@/components/find/MusicDetail'
import MyMusic from '@/components/myMusic/MyMusic'
import MySong from '@/components/myMusic/MySong'
import Play from '@/components/play/Play'
import Dynamic from '@/components/dynamic/Dynamic'
import Mine from '@/components/mine/Mine'

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
      redirect:'/myMusic/mySong',
      children:[
        {
          path:'mySong',
          name:'MySong',
          component:MySong,
        },
      ],
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
