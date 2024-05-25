import { useEffect, useMemo, useState } from "react"

const UseMemoDemo = ()=>{
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);
    const [color , setColor] = useState(true);

   const cal = useMemo( ()=>{
        setColor(!color)
        return (count * 5)
    },[count])

    // // working same 
    // useEffect( ()=>{
    //     console.log(count * 5)
    // },[count]);

    return(
        <div>
            <h1>count : {count}</h1>
            <h1>count : {count2}</h1>
            <button onClick={()=>{setCount(count + 1)}} >add</button>
            <button onClick={()=>{setCount2(count2 + 1)}} >add2</button>
            <h1 style={{background : color ? 'red':'blue'}} >mul * 5 : {cal}</h1>
        </div>
    )
}

export default UseMemoDemo