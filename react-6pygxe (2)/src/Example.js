import React, { useState } from "react";

function Example() {

const [count,setCount]=useState(0);

function myClickcounter(){

setCount(count+1)

}


  return <> you clicked  {count}
  <button onClick={myClickcounter}>Click thie count</button>
   </>;
}

export default Example;
