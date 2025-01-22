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

  //usamos un hook en donde cambiara el estado de las propiedades
  const [result,setResult] = useState("0")
  let [number,setNumber] = useState("")

  //reiniciamos todo tal como se habia inicializado
  const dropAll = () =>{

    setResult(0)
    setNumber("")
  }

  //esta funcion eliminara un numero a la vez
  
  const drop = () =>{

    let stringNumber ="";

    //si la propiedad no es string lo parseamos al tipo de dato string
    if(number != String){

      stringNumber = String(number)

    } else{  stringNumber = number   }
    
    const list = stringNumber.split("")//lo convertimos a lista
    
    list.pop();//eliminamos el ultimo elemento
    
    const lastNumber = list.join("")//unimo la lista creada para que se haga la cadena

    //seteamos los valores
    setNumber(lastNumber)

    setResult(lastNumber)

  }

  //actualiza la pantalla de la calculadora
  const showDisplay = (numSelected) =>{

    number += String(numSelected); //juntamos los numeros que vamos seleccionando con los botones

    setNumber(number)

    setResult(number)

  }

  //esta funcion realiza las cuentas de forma distinta,segun el operador que tenga
  const showResult = () =>{

    let numbers = [];
    let newNumber = number;

    //vemos si el caracter esta incluido en el string
    if(number.includes("x")){//vamos comparando si el caracter buscado esta adentro de la cadena,asi sabemos la operacion

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
