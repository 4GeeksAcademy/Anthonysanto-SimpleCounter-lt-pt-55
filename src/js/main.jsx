import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import Secondscounter from './components/SecondsCounter';




 
const manualRoot = ReactDOM.createRoot(document.getElementById('root'))
let number1 = 0
let number2 = 0
let number3 = 0
let number4 = 0
let number5 = 0
let number6 = 0

function Counter(){
  number1++
    if(number1>9){
      number1=0;
      number2++;
        if(number2>9){
            number2=0;
            number3++;
              if(number3>9){
                  number3=0;
                  number4++;
                    if(number4>9){
                        number4=0;
                        number5++;
                          if(number5>9){
                              number5=0;
                              number6++;
                          }
                    }
              }
        }
    }
  manualRoot.render(
     <React.StrictMode>
     <Secondscounter numbers={[number6,number5,number4,number3,number2,number1]}/>
      </React.StrictMode>
  )
}

setInterval(Counter,1000);