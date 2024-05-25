import { useContext } from "react";
import MyContext from './MyContext'
import { MyContext2 } from "./MyContext";

const Child = ()=>{
    const data = useContext(MyContext)
    const data2 = useContext(MyContext2)

    return(
        <div style={{background:'red'}} >
            Child
            <p>
            {data.name}
            </p>
            <p>
            {data2.age}
            </p>
        </div>
    )
}

export default Child ;