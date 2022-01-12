import React, { useState } from 'react';
export default function Textform(props) {
   

  const handleUpclick =()=>{
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleLoclick =()=>{
    let newText= text.toLowerCase();
    setText(newText)
  }
  const handleResetclick=()=>{
    let resetText=("");
    setText(resetText)
 }
  const handleOnchange = (event)=>{
    //console.log("on change")
    setText(event.target.value)
  }
 
  const [text, setText] = useState(' ');
  return(
    <>
    <div>
   <h1>{props.heading}</h1>
   <div className="container">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"> </textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to UpperCase</button>
  <button className="btn btn-danger mx-2 my-2" onClick={handleLoclick}>Convert to Lowercase</button>
  <button className="btn btn-success mx-2 my-2" onClick={handleResetclick}>Reset</button>
  <div class="input-group input-group-sm mb-3">
  <h3 className="my-3 my-2">Your length is : {text.length} and average word count time is : {0.02*text.length} Mintues</h3>
  </div>
  <h4>Your Text Here:</h4>

  <p>{text}</p>
 
  </div>
  </div>
    </>
    )
}
