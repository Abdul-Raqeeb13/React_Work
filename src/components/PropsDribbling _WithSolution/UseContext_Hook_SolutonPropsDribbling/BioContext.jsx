// BioContext.js
import React, { createContext, useState } from 'react';

// Create the Context
export const BioContext = createContext();

// Create a provider component
export function BioContextProvider({ children }) {
    const [bio, setBio] = useState({
        name: "Abdul Raqeeb",
        profession: "Front-end Developer",
        skills: ["React", "React Native", "JavaScript"]
    });

    const updateBio = (newBio) => {
        setBio((prevBio) => ({
            ...prevBio,
            ...newBio
        }));
    };

    return (
        <BioContext.Provider value={{ bio, updateBio }}>
            {children}
        </BioContext.Provider>
    );
}
