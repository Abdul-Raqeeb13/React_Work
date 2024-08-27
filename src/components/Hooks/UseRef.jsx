// Purpose: useState is used to store and manage state that triggers re-renders when updated, while useRef holds a mutable reference that does not cause re-renders when changed.

// Reactivity: Updating useState causes the component to re-render, whereas changing the value of useRef does not trigger a re-render.

// Usage: useState is ideal for stateful logic that needs to reflect in the UI, while useRef is useful for accessing DOM elements or storing persistent values across renders without causing re-renders.



// Personal Text

// usestate is controlled means ehen we use useState the react handle the component when the component change the use stata rerender the component

// usref is used to controlled the uncontrolled component means when we use useref we manage the component  when the component change the use ref will not  rerender the component.




import React, { useRef } from 'react';

export default function InputFocus() {
  // Step 1: Create a ref using useRef
  const inputRef = useRef(null);

  // Step 2: Create a function to focus the input field
  const focusInput = () => {
    // Step 3: Access the current value of the ref to focus the input
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  return (
    <div>
        <h1>Use ref hook</h1>
      {/* Step 4: Attach the ref to the input element */}
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />

      {/* Step 5: Button to trigger the focus function */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
