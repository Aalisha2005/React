import { useState } from "react"
export default function Statefunction()
{
    const[carname,setcarname]=useState("Supra");
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
                <h1>My car name is {carname}</h1>
                <button onClick={()=>setcarname("BMW")}>Click me</button>
                <h1>Count {count}</h1>
                <button onClick={changeCount}>increment</button>
                <button onClick={decrCount}>decrement</button>
        </div>
    )
}