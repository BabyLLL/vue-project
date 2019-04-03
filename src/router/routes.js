import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'
import Discern from '../pages/Discern/Discern.vue'
import Shop from '../pages/Shop/Shop.vue'
import Advise from '../pages/Home/Advise/Advise.vue'
import Search from '../pages/Search/Search.vue'
import Suggest from '../pages/Discern/Suggest/Suggest.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'/home/advise',
        component:Advise,
        meta:{
          isShow:true
        }
      },
      {
        path:'/home',
        redirect:'/home/advise'
      }
    ]
  },
  {
    path:'/classify',
    component:Classify,
    meta:{
      isShow:true
    }
  },
  {
    path:'/person',
    component:Person,
    meta:{
      isShow:true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/discern',
    component:Discern,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'/discern/suggest',
        component:Suggest,
        meta:{
          isShow:true
        }
      },
      {
        path:'/discern',
        redirect:'/discern/suggest'
      }
    ]
  },
  {
    path:'/shop',
    component:Shop,
    meta:{
      isShow:true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  }
]
