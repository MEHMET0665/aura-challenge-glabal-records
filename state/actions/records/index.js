import{mockFetch} from"../../../util/mockFetch/index";
const actionTypes={
  LOAD_RECORDS_ERROR:'records/loadRecordsError',
  LOAD_RECORDS_REQUEST:'records/loadRecordsRequest',
  LOAD_RECORDS_SUCCESS:'records/loadRecordsSuccess',

}
const loadRecordsRequest=(payload)=>{
  return(dispatch)=>{
    dispatch({
      type:actionTypes.LOAD_RECORDS_REQUEST,
    })
    mockFetch()
    .then((response)=>{
      dispatch({
        payload:response,
        type:actionTypes.LOAD_RECORDS_SUCCESS
      })
    })
    .catch((error)=>{
      dispatch({
        payload:error,
        type:actionTypes.LOAD_RECORDS_ERROR
      })
    })
  }
}
const actionCreators={
  loadRecordsRequest,
};
export{actionCreators,actionTypes};