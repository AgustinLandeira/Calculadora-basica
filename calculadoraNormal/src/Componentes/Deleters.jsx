import PropTypes from "prop-types"
export const Deleter = ({drop,dropAll}) =>{

    const handleClickDelete = () =>{

    drop()

    }

    const handleClickDeleteAll = () =>{
    dropAll();
    }

    return (

    <>

    <button className="delete" onClick={handleClickDelete}
            type="button" id="calc_back"><svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            ><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg></button>


    <button className='delete' onClick={handleClickDeleteAll}  type="button" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>


    </>



    )
}

Deleter.propTypes = {
    dropAll: PropTypes.func.isRequired, // Asegura que sea una función y es obligatorio
    drop: PropTypes.func.isRequired, // También es una función obligatoria
  };