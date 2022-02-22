import React from 'react';
import Haeader from "./header";
import Addcontact from './addcontact';
import Contactlist from './contactlist';
import './App.css';

function App() {

   const contacts = [

      {
         id:10,
         name:"manikanta",
         place:"hyderabad",
      },

      {
        id:11,
        name:"messi",
        place:"argentina",

      }


   ]


  return (
    <div className='ui cointainer'>
     <Haeader/>
     <br/>
     <br/>
     <Addcontact/>
     <br/>
     <Contactlist contacts = {contacts} />
     </div>
  );
}



export default App;
