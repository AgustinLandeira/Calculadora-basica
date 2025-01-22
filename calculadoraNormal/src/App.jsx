import { useState } from 'react'
import './App.css'
import {BottonNumbers} from "./Componentes/Buttons.jsx"
import { Operators } from './Componentes/Operators.jsx'
import { Deleter } from './Componentes/Deleters.jsx'

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
