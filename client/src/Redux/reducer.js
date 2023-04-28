
const initialState = {
    dogs:[],
    currentPage:1,
    itemsPerPage:8
}

const rootReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "GET_DOGS":
            return{
                ...state,
                dogs:[...action.payload]
            }
        case "SET_CURRENT_PAGE":
            return{
                ...state,
                currentPage:action.payload
            }
        
    
        default:
            return{...state}
    }
}
export default rootReducer