import { useState } from 'react'

export const useCounter = ( inicialValue = 10 ) => {

  const [counter, setCounter] = useState(inicialValue)

  const increment = ( value = 1 ) => {
    // setCounter( counter + value );
    // cambio para hacer test con el current value
    setCounter( (current) => current + value );
  }

  const reset = () => {   
    setCounter( inicialValue );
    
  }

  const decrement = ( value = 1 ) => {
    // valida que  no permitira valores negativos
    if(counter <= 0) return
      // setCounter( counter - value );
      // cambio para hacer test con el current value
      setCounter( (current) => current - value );
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}