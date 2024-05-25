import { useNavigate } from "react-router-dom";

const Home  = ()=>{
    const navigate = useNavigate()

// To set the token in a cookie
document.cookie = 'validationToken=yourTokenValue; path=/; secure; HttpOnly';

// To retrieve the token from cookies
const token = document.cookie.replace(/(?:(?:^|.*;\s*)validationToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
console.log('token =', token);
    return(
        <div>
            home
            <button onClick={()=>{navigate('/about' , { state: { department: 'IT' } } )}} >about</button>
        </div>
    )
}

export default Home ;