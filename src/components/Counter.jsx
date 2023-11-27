import './Counter.css';
import React, { useState } from 'react';

function Counter(){
    // const [counter, setCounter] = useState(0)
    // function incrementCounter() {
    //     setCounter((prevCounter) => counter + 1)
    // }

    // function decrementCounter() {
    //     setCounter((prevCounter) => prevCounter - 1)
    // }

    // const [cart, setCart] = useState({
    //     item: 'apple', 
    //     quantity: '0'
    // });

    // function removeApple(){
    //     // 1. use callback to get the previous value
    //     // 2. spread out all the properties of the prev state
    //     // 3. only chage the property that you need to change.
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }

    // function addApple(){
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }

    // return (
    //     <div>
    //       {/* Left button */}
    //       <button onClick={removeApple}>-</button>
    //       {cart.quantity}
    //       {cart.item}
    //       {/* Right button */}
    //       <button onClick={addApple}>+</button>
    //     </div>
    // )

    // ["+", "-"] <= create array 
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [ ...prevArr, '+'])
    }

    function addMinus(){
        setArr(prevArr => [ ...prevArr, '-'])
    }

    return (    
        <div>
          <button onClick={addMinus}>-</button>
          <button onClick={addPlus}>+</button>
          {arr.toString()}
        </div>
    )
}

export default Counter

// # => setNum(#)
// want to change the number
// add callback (prevNum => prevNum + 10)

// booleans => setBool(true or false)
// want to change the number
// add callback (prevBool => !prevBool)

// strings => setStr('some text for strings')
// want to change the number
// add callback (prevStr => prevStr + 'Simplified')

// Objects
// setObj(prevObj => ({ ...prevObj, quantity: prevObj.quanity + 1}));

// Arrays
// setArr(prevArr => ([ ...preArr, 5]))


// parent
// function Parent(){
//     function clicked(){
//         console.log('Parent notified!')
//     }
//     return(
//         <Child clicked={clicked} />
                    //pass props 
//     )
// }

// Child
// function Child({ clicked }){
//     return(
                                    //Emit event
//         <button onClick={clicked}>Child Button</button>
//     )
// }