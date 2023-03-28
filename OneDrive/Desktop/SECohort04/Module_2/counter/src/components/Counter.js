import { useState } from "react";

function Counter () {
    // Declare the state
    const [counter, setCounter] = useState(0)


    // Function to add one to the state    
    const handleClick = () => {

        // sets counter to its current value + 1
        setCounter(counter + 1)
    }

    // Function to add two to the state
    const handleClickPlusTwo = () => {

        // sets counter to its current value + 2
        setCounter(counter + 2)
    }

    // Function to multiply state by 3
    const handleClickMultByThree = () => {

        // sets counter to current value * 3
        setCounter(counter * 3)
    }

    // h2 displays the counter value.. buttons run the math functions
    return (
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={handleClick}>+ 1</button>
            <button onClick={handleClickPlusTwo}>+ 2</button>
            <button onClick={handleClickMultByThree}>* 3</button>
        </div>
    )
}

export default Counter;