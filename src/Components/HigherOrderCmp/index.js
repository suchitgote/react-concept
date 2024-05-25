import { useState } from "react"

const Counter = ()=>{
    const [count , setCount] = useState(0)
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={()=>{setCount(count + 1)}} >add</button>
        </div>
    )
}

const CounterRed = (props)=>{
    return ( <div style={{background:'red'}} > <props.Counter/>  </div>  )
}
const CounterBlue = (props)=>{
    return ( <div style={{background:'blue'}} > <props.Counter/>  </div>  )
}

const HigherOrderCmp = ()=>{
    return (
        <div>
            <h1>HigherOrderCmp</h1>
            <CounterRed Counter={Counter}/>
            <CounterBlue Counter={Counter}/>
        </div>
    )
}

export default HigherOrderCmp ;