import { useState } from 'react'
import './App.css'

const BottonNumbers = ({children,updateDisplay,showResult}) => {

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

const Operators = ({numberPassed,updateDisplay}) =>{

  let operator = "";

  const handleClick = () =>{
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

//creamos nueve espacios vacios y despues le decimos que lo vamos a rellenar
//.map((_, index) => index) usamos el segundo param del map para usar sus indices como valores

const keys = Array(12).fill().map((__,index) => {

  //si el numero de indice es 10 o 11 tendra los siguientes valores sino,su valor sera igual al de su indice
  if(index == 10)return "."
  else if(index == 11) return "="

  return index
});


function App() {

  const showDisplay = (numSelected) =>{

    number += String(numSelected); //juntamos los numeros que vamos seleccionando con los botones

    setNumber(number)

    setResult(number)
    
  }

  const showResult = () =>{

    let numbers = [];
    let newNumber = number;

    //vemos si el caracter esta incluido en el string
    if(number.includes("x")){
      
      numbers = number.split("x");

      newNumber = numbers[0] * numbers[1];

    }else if(number.includes("+")){

      numbers = number.split("+");

      newNumber = parseInt((numbers[0])) + parseInt(numbers[1]);

    }else if(number.includes("-")){

      numbers = number.split("-");

      newNumber = parseInt((numbers[0])) - parseInt(numbers[1]);

    }else if(number.includes("/")){

      numbers = number.split("/");

      newNumber = parseInt((numbers[0])) / parseInt(numbers[1]);
    }

    setNumber(newNumber)

    setResult(newNumber)
  }

  const [result,setResult] = useState("0")
  let [number,setNumber] = useState("")

  return (
    <>
    <div className="calculator">

      <input type="text" value={result} className='display' />
      <div className='buttons'>

      {
        keys.map((index)=>{

          return (
            <>

            <BottonNumbers className="Number" key={index} updateDisplay={showDisplay} showResult={showResult}>{index}</BottonNumbers>
            <Operators numberPassed={index} updateDisplay={showDisplay} ></Operators>
          
          </>
          )
          
          
        })
      }

      </div>

    </div>
      
    </>
  )
}
export default App
