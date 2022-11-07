import React from 'react';
// import './App.css';

// import LandingPageCategory from './LandingPageCategory';

import Navigation from './Navigation';
import AdminPanel from './AdminPanel';
import {Routes,Route} from 'react-router-dom';



function App() {
  return (

      <Routes>

        <Route path='/nav*' element={<Navigation/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
       
 
      </Routes>
   



      

   
    
  );
}

export default App;
