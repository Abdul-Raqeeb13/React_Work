// UpdateBio.js
import React, { useContext, useState } from 'react';
import { BioContext } from './BioContext';

export default function UpdateBio() {
    const { updateBio } = useContext(BioContext);
    const [newName, setNewName] = useState('');

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBio({ name: newName });
        setNewName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Update Name:</label>
            <input 
                type="text" 
                id="name" 
                value={newName} 
                onChange={handleChange} 
            />
            <button type="submit">Update</button>
        </form>
    );
}
