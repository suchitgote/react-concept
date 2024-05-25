
const initialState = {
    loading: false,
    data: [],
    error: null,
}
const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return { ...state, loading: true }
            break;
        case 'FETCH_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload, error: null };
        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, data: [], error: action.payload };
        default:
            return state
            break;
    }
}

export default dataReducer;