import PropTypes from "prop-types"
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