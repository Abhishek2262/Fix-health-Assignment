import React from 'react';
import Landingpage from './Pages/Landingpage';
import {BrowserRouter} from "react-router-dom";
import { Route , Routes  } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<Landingpage/>}/>
      </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
