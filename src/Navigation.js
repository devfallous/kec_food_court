import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import FoodItems from './FoodItems';
// import Ccounter from './Ccounter';
import ChatItems from './ChatItems';
import LoginPage from './LoginPage';
// import LoginPage from './LoginPage';
// import AdminPanel from './AdminPanel';
// import LandingPageCategory from './LandingPageCategory';
// import LandingPageTwo from './LandingPageTwo';
import Cart from './Cart';
import './Navigation.css';

import {Routes,Route} from 'react-router-dom'
import LandingPageTwo from './LandingPageTwo';
import JuiceItems from './JuiceItems';

function Navigation() {

  const [isLoading,setIsLoading]= React.useState(false);
  
  return (
    <div className='holder'>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/ordernow' element={<LandingPageTwo/>} />
            <Route path='/fooditems' element={<FoodItems/>} />
            <Route path='/chatitems' element={<ChatItems/>} />
            <Route path='/juiceitems' element={<JuiceItems/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default Navigation