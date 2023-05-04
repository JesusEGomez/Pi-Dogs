import axios from "axios"
export const GET_DOGS="GET_DOGS"
export const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
export const GET_TEMPERAMENTS="GET_TEMPERAMENTS"

export const getDogs = ()=>{
    const endpoint = "http://localhost:3001/dogs/"
    return async (dispatch)=>{
        const response = await axios.get(endpoint)
        return dispatch({
            type:GET_DOGS,
            payload:response.data

        })
    }
}
export const getTemperaments = ()=>{
    const endpoint = "http://localhost:3001/temperament"
    return async (dispatch)=>{
        const response = await axios.get(endpoint)
        return dispatch({
            type:GET_TEMPERAMENTS,
            payload:response.data

        })
    }
}

export const setCurrentPage =(currentPage)=>{
    return{
        type:SET_CURRENT_PAGE,
        payload:currentPage
    }
}


