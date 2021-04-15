 const reducer = (state,action)=>{
 if (action.type === "GET_FORM"){
     return { ...state, formData: action.payload };
 }
  return state;
}
export default reducer