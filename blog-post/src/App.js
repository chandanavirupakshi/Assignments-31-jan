import React from 'react';
import './App.css';
import SingleComment from './SingleComment';
import UserCard from './UserData';
import profile from './Image/img1.jpeg';

const App = function ()
{  
  return(   
       <div className='ui comments'>  
  <UserCard>
        <SingleComment
           name="Preeti" 
           text="Reactjs"  
           date="Today at 6:00 PM"  
             picture={profile}
   />     
   </UserCard>
   <UserCard>
         <SingleComment
     name="chandana"  
            text="Angular"  
            date="Today at 7:00 PM"   
            picture={profile}
      />  
      </UserCard>
      <UserCard>
         <SingleComment 
      name="Asha" 
          text="UI " 
          date="Today at 8:00 PM"  
         picture={profile}/> 
   </UserCard>
            </div>


 )}
export default App;
