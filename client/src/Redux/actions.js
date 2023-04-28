import axios from "axios"

export const getDogs = ()=>{
    const endpoint = "http://localhost:3001/dogs/"
    return async (dispatch)=>{
        const response = await axios.get(endpoint)
        return dispatch({
            type:"GET_DOGS",
            payload:response.data

        })
    }
}

export const setCurrentPage =(currentPage)=>{
    return{
        type:"SET_CURRENT_PAGE",
        payload:currentPage
    }
}