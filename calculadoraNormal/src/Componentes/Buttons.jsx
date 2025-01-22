import PropTypes from "prop-types"

//esta funcion creara los botones
// parametros: le pasaremos dos funciones: updateDisplay(actualiza el display de la calculadora) y showresult(muestra el resultado de la cuenta)
export const BottonNumbers = ({children,updateDisplay,showResult}) => {

    const handleClick = () =>{

        updateDisplay(children)
    }

    const click = () =>{

        showResult()
    }

    //si el children tiene este valor = este boton tendra otra funcion(mostrara el resultado)
    if(children === "=") return <button onClick={click}>{children}</button>


        return <button onClick={handleClick}>{children}</button>
    }

BottonNumbers.propTypes = {

    updateDisplay:PropTypes.func.isRequired,
    showResult: PropTypes.func.isRequired,
    children: PropTypes.number
}