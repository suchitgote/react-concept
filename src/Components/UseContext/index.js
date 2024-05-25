import Parent from './Parent'
import MyContext from './MyContext'
import { MyContext2 } from './MyContext'

const UseContext = ()=>{
    const contextValue = { 
        name : 'suchit'
    }
    const contextValue2 = { 
        age : 22
    }

    return(
        <div>
            UseContext
        <MyContext.Provider value={contextValue} >
            <MyContext2.Provider  value={contextValue2} >
            <Parent />
            </MyContext2.Provider>
        </MyContext.Provider>
        </div>
    )
}

export default UseContext ;