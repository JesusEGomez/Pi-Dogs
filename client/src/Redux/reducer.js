import { GET_DOGS,GET_TEMPERAMENTS,SET_CURRENT_PAGE } from "./actions"
const initialState = {
    dogs:[],
    currentPage:1,
    itemsPerPage:8,
    temperaments:[]
}

const rootReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs:[...action.payload]
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:action.payload
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments:[...action.payload]
            }
        
    
        default:
            return{...state}
    }
}
export default rootReducer