
// Event propagation in web development refers to the process by which an event (like a click, keypress, etc.) moves through the DOM (Document Object Model) hierarchy. Understanding how events propagate through the DOM is crucial for handling events effectively. Event propagation consists of three phases:

// Capturing Phase (Event Capture):
// The event starts from the root of the DOM and travels downwards towards the target element.

// Target Phase:
// The event reaches the target element where it was initially triggered.
// Event listeners on the target element respond to the event during this phase.

// Bubbling Phase (Event Bubbling):
// After reaching the target, the event bubbles back up through the DOM hierarchy, moving from the target element to the root.



// importnant points

// click the child event and it goes upto the DOM this is bubbling phase
// use onClickCapture the events goes down the tree this is bubbling phase
// use event.stopPropagation to run only the clicked event not other 

import React from 'react'

export default function EventPropagation() {

    const grandParent = (event) => {
        // IS USED TO ONLY RU THE TARHET PROPAGATION NOT DOM PROPAGATION
        event.stopPropagation()
        alert("i am grandParent")
    }

    const parent = (event) => {
        // IS USED TO ONLY RU THE TARHET PROPAGATION NOT DOM PROPAGATION
        event.stopPropagation()
        alert("i am parent")
    }

    const child = (event) => {
        // IS USED TO ONLY RU THE TARHET PROPAGATION NOT DOM PROPAGATION
        event.stopPropagation()
        alert("i am child")
    }
    return (
        <div>
            <h1>Event Propagation</h1>
            {/* Wse without Captore in onClick the event flows work form  bottom to top with Capture its work flow from top to bottom*/}
            <div onClick={grandParent} style={{ backgroundColor: 'blue', padding: "50px" }}>Grand PArent Button
                <div onClick={parent} style={{ backgroundColor: 'red', padding: "30px" }}>parent Button
                    <div onClick={child} style={{ backgroundColor: 'yellow', padding: "10px" }}>Child Button

                    </div>
                </div>
            </div>
        </div>
    )
}



//  see thapa technical video no 25 of reactv19 course to understand the event propagation 