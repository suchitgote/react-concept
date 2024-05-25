import { useSelector ,useDispatch } from "react-redux";
import { fetchData } from "./Redux/Action/dataAction";

const Child = ()=>{
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataReducer)
    console.log('data =', data);
    return (
        <div>
            {data.data.length > 0 && 
            data.data.map(item=>{
                return(
                    <div>
                        {item}
                    </div>
                )
            })
            
        }
        <button onClick={()=>{dispatch(fetchData())}} >fetch data</button>
        </div>
    )

}
export default Child;