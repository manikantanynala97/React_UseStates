import React from "react";

// class component 
class Addcontact extends React.Component
{
    render(){

        return(
            <div className="ui main">
                <h2>Add Contact</h2>
              <form className="ui form">
                   <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                   </div>
                   <div className="field">
                        <label>Email</label>
                        <input type="email" email="email" placeholder="Email"></input>
                   </div>
                   <div className="ui button blue"> Button</div>    
              </form>
            </div>
          );
    }
}

export default Addcontact;