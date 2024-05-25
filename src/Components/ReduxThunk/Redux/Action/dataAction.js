export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
  });
  
  export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });
  
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest());
      // Simulate API call
      setTimeout(() => {
        const dummyData = ['item1', 'item2', 'item3'];
        dispatch(fetchDataSuccess(dummyData));
      }, 2000);
    };
  };
  