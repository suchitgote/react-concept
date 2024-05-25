import { useCallback, useEffect, useMemo, useState } from "react";

const UseCallBack = ()=>{
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);

   const cal = useMemo( ()=>{
        return (count * 5)
    },[count])
    const cal2 = useCallback( (item)=>{
        return ((count * 5)*item)
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
            <h1>mul * 5  :{cal}</h1>
            <h1>mul * 5 * 2 : {cal2(2)}</h1>
        </div>
    )
}

export default UseCallBack;