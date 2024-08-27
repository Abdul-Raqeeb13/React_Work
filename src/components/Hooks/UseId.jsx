// usedId is used to generate the unique id for the component insytance but not use for generating unique li keys

import React, { useId } from 'react';

export default function FormWithIds() {
    // Generate unique IDs for the form elements
    const nameId = useId();
    const emailId = useId();

    return (
        <>
        <h1>Use ID hook</h1>
        <h1></h1>
        <form>
            {/* Label and input for the name field */}
            <label htmlFor={nameId}>Name:</label>
            <input type="text" id={nameId} name="name" />

            {/* Label and input for the email field */}
            <label htmlFor={emailId}>Email:</label>
            <input type="email" id={emailId} name="email" />
        </form>
        </>

    );
}
