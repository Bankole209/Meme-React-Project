import React from "react";


function Tasks (props){
   const thingsArray = ["thing 1", "thing 2"];
   const thingElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

   function addItem(){
       const newthing = `thing ${thingsArray.length + 1}`;
       thingElement.push(newthing);
       window.console.log(thingElement)
   }

    return (
        <div className="card">
            <p className="capital">{props.id}</p>
            <p className="capital">{props.text}</p>
            <p className="capital">{props.day}</p>
            
        </div>
    )


}

export default Tasks;