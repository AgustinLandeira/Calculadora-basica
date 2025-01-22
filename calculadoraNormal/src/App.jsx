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

const Deleter = ({drop,dropAll}) =>{

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

//creamos nueve espacios vacios y despues le decimos que lo vamos a rellenar
//.map((_, index) => index) usamos el segundo param del map para usar sus indices como valores

const keys = Array(12).fill().map((__,index) => {

  //si el numero de indice es 10 o 11 tendra los siguientes valores sino,su valor sera igual al de su indice
  if(index == 10)return "."
  else if(index == 11) return "="

  return index
});


function App() {

  const [result,setResult] = useState("0")
  let [number,setNumber] = useState("")

  const dropAll = () =>{

    setResult(0)
    setNumber("")
  }

  const drop = () =>{

    let stringNumber ="";

    if(number != String){
      stringNumber = String(number)
    } else{  stringNumber = number   }
    
    const list = stringNumber.split("")
    
    list.pop();
    
    const lastNumber = list.join("")

    setNumber(lastNumber)

    setResult(lastNumber)

  }

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

      newNumber = parseFloat((numbers[0])) + parseFloat(numbers[1]);

    }else if(number.includes("-")){

      numbers = number.split("-");

      newNumber = parseFloat((numbers[0])) - parseFloat(numbers[1]);

    }else if(number.includes("/")){

      numbers = number.split("/");

      newNumber = parseFloat((numbers[0])) / parseFloat(numbers[1]);
    }

    setNumber(newNumber)

    setResult(newNumber)
  }

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

            { index === "=" &&

            <Deleter drop={drop} dropAll={dropAll}></Deleter>


            }

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
