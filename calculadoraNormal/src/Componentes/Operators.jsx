import PropTypes from "prop-types"

//esta funcion validara los operadores 
// parametros: le pasamos el indice del array como numero y creara los operadores
export const Operators = ({numberPassed,updateDisplay}) =>{

    let operator = "";

    const handleClick = () =>{//hara la cuenta
        updateDisplay(operator)
    }

    //vamos asignando los operadores a sus lugares
    if(numberPassed === 2){

        operator = "x";
        return <button className='operator' onClick={handleClick}>X</button>

    }else if(numberPassed === 5){

        operator = "/";
        return <button className='operator' onClick={handleClick}>/</button>

    }else if(numberPassed === 8){
        operator = "+";
        return <button className='operator' onClick={handleClick}>+</button>

    }else if(numberPassed == "="){
        operator = "-";
        return <button className='operator' onClick={handleClick}>-</button>
    }

    return null
  
}

Operators.propTypes ={
    updateDisplay: PropTypes.func,
    numberPassed: PropTypes.number || PropTypes.string
}