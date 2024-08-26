import React, { useState } from 'react';
import './AdvancedCounter.css';

export default function AdvancedCounterUsing_UseState() {

    const [counter, setCounter] = useState(0);
    const [incrementValue, setIncrementValue] = useState('');

    const counterIncrement = () => {
        if (incrementValue) {
            let value = counter + Number(incrementValue);
            if(value >  100){
                setCounter(counter)
            }
            else{
                setCounter(value);
            }
        } else {
            setCounter(counter + 1);
        }
    };

    const counterDecrement = () => {
        if (incrementValue) {
            let value = counter - Number(incrementValue);
            if(value < 0){
                setCounter(counter)
            }
            else{
                setCounter(value);
            }
        } else {
            setCounter(counter - 1);
        }
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <>
            <h1 >Advanced Counter App Project Using useState</h1>
            <div className="counter-container">
                <h1 className="counter-title">Advanced Counter App</h1>
                <div className="counter-display">
                    <h4 className="counter-value">{counter}</h4>
                    <input
                        type="text"
                        className="increment-input"
                        placeholder="Enter increment value"
                        value={incrementValue}
                        onChange={(e) => setIncrementValue(e.target.value)}
                    />
                    <div className="button-group">
                        <button className="counter-button" onClick={counterIncrement}>Increment</button>
                        <button className="counter-button" onClick={counterDecrement}>Decrement</button>
                        <button className="counter-button reset-button" onClick={resetCounter}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}
