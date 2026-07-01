import {useState} from 'react'

const Counter = () => {
    const [count, setCount]= useState(0)

const handleIncrement = () => setCount(count + 1)
const handleDecrement = () => {
    if(count > 0){
        setCount(count - 1)
    }
}

  return (
    <div>
        <h1>{count}</h1>
        <button style={{color: 'white', backgroundColor: 'black'}} onClick={handleIncrement}>Increment</button>
        <button style={{color: 'white', backgroundColor: 'black'}} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter