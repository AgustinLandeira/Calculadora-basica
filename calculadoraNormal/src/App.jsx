import { useState } from 'react'
import './App.css'

const BottonNumbers = ({children,updateDisplay}) => {

  const handleClick = () =>{

    updateDisplay(children)
  }


    return <button onClick={handleClick}>{children}</button>
  }

const Operators = ({numberPassed,updateDisplay}) =>{

  let operator = "";

  const handleClick = () =>{
    updateDisplay(operator)
  }
  if(numberPassed === 2){

    operator = "x";
    return <button className='operator' onClick={handleClick}>X</button>

  }else if(numberPassed === 5){

    operator = "/";
    return <button className='operator'>/</button>

  }else if(numberPassed === 8){
    operator = "+";
    return <button className='operator'>+</button>

  }else if(numberPassed == "."){
    operator = "-";
    return <button className='operator'>-</button>
  }

  return null

}

//creamos nueve espacios vacios y despues le decimos que lo vamos a rellenar
//.map((_, index) => index) usamos el segundo param del map para usar sus indices como valores

const keys = Array(11).fill().map((__,index) => index === 10 ? "." : index);


function App() {

  const showDisplay = (numSelected) =>{

    number += String(numSelected);

    setNumber(number)

    setResult(number)
    
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

            <BottonNumbers className="Number" key={index} updateDisplay={showDisplay}>{index}</BottonNumbers>
            <Operators numberPassed={index} updateDisplay={showDisplay}></Operators>
          
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
