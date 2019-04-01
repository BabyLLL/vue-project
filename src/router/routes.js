import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Person from '../pages/Person/Person.vue'
import Discern from '../pages/Discern/Discern.vue'
import Shop from '../pages/Shop/Shop.vue'
import Advise from '../pages/Home/Advise/Advise.vue'

export default [
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/home/advise',
        component:Advise
      },
      {
        path:'/home',
        redirect:'/home/advise'
      }
    ]

  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/discern',
    component:Discern
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/',
    redirect:'/home'
  }
]
