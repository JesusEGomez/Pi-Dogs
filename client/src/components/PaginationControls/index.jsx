import { useSelector,useDispatch } from "react-redux"
import { setCurrentPage } from "../../Redux/actions"
const PaginationControls = ({arrayLength})=>{
    const currentPage = useSelector((state)=>state.currentPage)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(arrayLength/8)

    const handlePreviousClick = () => {
        if (currentPage > 1) {
          dispatch(setCurrentPage(currentPage - 1)) 
        }
      };

      const handleNextClick = () => {
        if (currentPage < totalPages) {
         dispatch(setCurrentPage(currentPage + 1)) 
        }
      };
    

    return(
        <div >
      <button onClick={handlePreviousClick}>Anterior</button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
    )
}
export default PaginationControls