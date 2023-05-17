import axios from "axios"
export const GET_DOGS="GET_DOGS"
export const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
export const RESET_CURRENT_PAGE="RESET_CURRENT_PAGE"
export const GET_TEMPERAMENTS="GET_TEMPERAMENTS"

export const getDogs = ()=>{
    const endpoint = "https://pi-dogs-production-f196.up.railway.app/dogs/"
    return async (dispatch)=>{
        const response = await axios.get(endpoint)
        return dispatch({
            type:GET_DOGS,
            payload:response.data

        })
    }
}
export const getTemperaments = ()=>{
    const endpoint = "https://pi-dogs-production-f196.up.railway.app/temperament"
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
export const resetCurrentPage =()=>{
    return{
        type:RESET_CURRENT_PAGE,
    }
}


