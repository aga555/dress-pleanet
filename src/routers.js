import Home from "@/components/Home";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import NewDress from "@/components/NewDress";
import Admin from "@/components/Admin";
import Login from "@/components/Login";

import Guide from "@/components/Guide";
import History from "@/components/History";
import Delivery from "@/components/Delivery";
//import Stock from "@/components/Stock";
const Stock =()=> import( /* webpackChunkName:"stockGroup"  */ "@/components/Stock")
//import DressDetail from "@/components/DressDetail";
const DressDetail =()=> import( /* webpackChunkName:"stockGroup"  */  "./components/DressDetail")

export const routers = [
    {
        path: '/home',
        name: Home,
        component: Home
    },
    {path: '/stock', name: 'stockLink', component: Stock},
    {path: '/contact', component: Contact},

    {
        path: '/about', component: AboutUs,
        children: [
            {path: '/history', component: History},
            {path: '/guide', component: Guide},
            {path: '/delivery', component: Delivery},

        ]
    },
    {
        path: '/admin',
        component: Admin,
        children: [        {path: '/newDress', component: NewDress},]
   /*     beforeEnter: (to, from, next) => {
            alert(' this area is only for administrator')
            next()
        }*/
    },
    {path: '/login', component: Login},
    {path: '/newDress', component: NewDress},
    {path: '*', redirect: '/home'},
    { path: '/details/:id',  name: 'details',component: DressDetail }

];
