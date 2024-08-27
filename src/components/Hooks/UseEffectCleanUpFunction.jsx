import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Start a timer that increments the count every second
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function to clear the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
            console.log('Timer cleaned up');
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
        </div>
    );
}
