import { useState } from "react";
import "./App.css"

const Counter = () => {
    

    const [name,setName] = useState("Godfrey");
    
     function handleClick(){
       setName("Charles");
       console.log(name);
    }
    return (
        <>
        <h1>{name}</h1>
        <button onClick= {handleClick}>Click me</button>
        </>
      );
}
 
export default Counter

