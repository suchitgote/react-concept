
import { useReducer , dispatch} from "react";
import counterReducer from "./Reducer";
const Child1 = ()=>{
    const [state , dispatch] = useReducer(counterReducer,  { count: 0 })
    return(
        <div style={{background:'blue' , padding : 20}}>
            Child1 { state.count }
            
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    )
}

export default Child1 ;