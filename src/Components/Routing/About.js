
import { useNavigate ,useLocation } from "react-router-dom";
 
const About  = ()=>{
    const navigate = useNavigate()
    const location = useLocation();
    const state = location.state 
    console.log('state =' , state);

    return(
        <div>
            About
            <button onClick={()=>{navigate('/')}} >home</button>
        </div>
    )
}

export default About ;