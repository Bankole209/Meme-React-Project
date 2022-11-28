import React from "react";
import { FaRegFileImage } from "react-icons/fa";
import data from "./data";

const Input = (props) => {
  // const thingsArray = ["thing 1", "thing 2"];
  // const thingElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  // function addItem(){
  //     const newthing = `thing ${thingsArray.length + 1}`;
  //     thingsArray.push(newthing);
  //     window.console.log(thingsArray)
  // }

  // const [things, setThings] = React.useState(["thing 1","thing 2"]);

  // function addItem(){
  //   const newThing = `thing ${things.length + 1}`
  //   setThings(prevState => [...prevState, newThing])
  // }
  // const thingsElement = things.map(thing => {
  //   return (
  //     <p key={thing} style={{textTransform: 'capitalize'}}>{thing}</p>
  //   )
  // })

  // TERNARY OPERATOR
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  function changeBoolean() {
    setIsGoingOut((prevState) => !prevState);
  }
  // end of ternary operator

  // meme code block
  const [memeImage, setMemeImage] = React.useState("");

  function changeMeme() {
    const memesArray = data;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prevState) => memesArray[randomNumber].imageUrl);
  }

  // end meme code block

  // count code block
  const [count, setCount] = React.useState(0);

  function addCount() {
    const add = `${+count + 1}`;
    setCount(add);
  }
  function minusCount() {
    const minus = `${+count - 1}`;
    setCount(minus);
  }
  // end count code block

  // best practices of setting count in react using react useState
  // function addCount (){
  //   setCount ( prevCount => prevCount + 1)
  // }
  // function minusCount (){
  //   setCount (prevCount => prevCount -1)
  // }

  // things code block
  const [things, setThings] = React.useState(["thing 1", "thing 2"]);

  function addItem() {
    const newThing = `thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThing]);
  }

  
  
  

  const thingsElement = things.map((thing) => {
    return (
      <p key={thing} style={{ textTransform: "capitalize" }}>
        {thing}
      </p>
    );
  });
  // end of things code block

  // result code block
  const result = React.useState("Hello");
  const resultElement = result.map((item) => {
    return <p key={item}>{item}</p>;
  });
  window.console.log(resultElement);

  // end of result code block

  return (
    <div>
      <div className="image">
        <div className="counter">
          <button onClick={minusCount} className="counter-minus">
            -
          </button>
          <div className="counter-count">
            <h1>{count}</h1>
          </div>
          <button onClick={addCount} className="counter-plus">
            +
          </button>
        </div>
      </div>

      <div className="image">
        <div onClick={changeBoolean} className="counter-count">
          <h1>{count % 2 === 0 ? "Even" : "Odd"}</h1>
        </div>
      </div>

      <div className="input-section">
        <input className="input" type={"text"} placeholder={"Top Text"} />
        <input className="input" type={"text"} placeholder={"Bottom Text"} />
      </div>
      <div className="butn">
        <button
          onClick={changeMeme}
          className="btn btn-block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <span>Get a new meme image</span>
          <FaRegFileImage style={{ fontSize: "20px" }}></FaRegFileImage>
        </button>
      </div>
      <div className="image">
        <img src={memeImage} className="finger" />
      </div>

      <div className="image">
        <button onClick={addItem} className="btn-add">
          Add Item
        </button>
        
      </div>
      <div className="image">
        <h5>{thingsElement}</h5>
      </div>
    </div>
  );
};

export default Input;
