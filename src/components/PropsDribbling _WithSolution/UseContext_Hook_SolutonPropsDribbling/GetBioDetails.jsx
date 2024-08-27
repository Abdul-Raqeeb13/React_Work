// BioDetails.js
import React, { useContext } from 'react';
import { BioContext } from './BioContext';

export default function BioDetails() {
    const { bio } = useContext(BioContext);

    return (
        <div>
            <h2>Bio Details</h2>
            <p><strong>Name:</strong> {bio.name}</p>
            <p><strong>Profession:</strong> {bio.profession}</p>
            <p><strong>Skills:</strong> {bio.skills.join(", ")}</p>
        </div>
    );
}
