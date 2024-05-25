import {useEffect, useRef, useState} from 'react'

const UseRef = ({age , setAge})=>{


    // useRef focus
    const [name , setName] = useState("");
    const inputRef = useRef(0);
    const focus =()=>{
        inputRef.current.focus()
    }


    // useRef render
    const renderRef = useRef(0);
    useEffect(()=>{
        renderRef.current = renderRef.current + 1 ;
    })


    return(
        <div style={{background : 'skyblue'}}>
            
{/* useRef focus */}
            <input value={name} ref={inputRef} onChange={e=>{setName(e.target.value)}} ></input>
            <h1>name : {name}</h1>
            <button onClick={()=>{focus()}} >focus</button>

{/* useRef render */}
            <h1>renderREf render : {renderRef.current}</h1>

        </div>
    )
}

export default UseRef;