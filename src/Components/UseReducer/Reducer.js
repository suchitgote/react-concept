// // Reducer function
// const counterReducer = (state, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { count: state.count + 1 };
//       case 'DECREMENT':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   export default counterReducer


const counterReducer = (state , action)=>{
    switch (action.type) {

        case 'INCREMENT':
                return {
                    ...state,
                    count : state.count + 1
                }
            break;
        case 'DECREMENT':
                return {
                    ...state,
                    count : state.count - 1
                }
            break;
        default:
            return state
            break;
    }

}
  export default counterReducer
