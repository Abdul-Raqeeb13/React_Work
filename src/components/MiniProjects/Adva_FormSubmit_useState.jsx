import React, { useState } from 'react';

export default function AdvaFormSubmituseState() {
    const [UserData, SetUserData] = useState({
        Name: "",
        Email: "",
        Password: "",
        PhoneNo: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        SetUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(UserData);
    };

    return (
        <>
            <style>
                {`
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 20px;
                    }

                    h1 {
                        text-align: left;
                        color: #333;
                    }

                    .form-container {
                        max-width: 500px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    label {
                        display: block;
                        margin-bottom: 8px;
                        color: #555;
                        font-weight: bold;
                    }

                    input[type="text"] {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 15px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        box-sizing: border-box;
                        font-size: 16px;
                    }

                    button {
                        display: block;
                        width: 100%;
                        padding: 10px;
                        background-color: #28a745;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    button:hover {
                        background-color: #218838;
                    }
                `}
            </style>

            <h1>Advance Contact Form Using useState</h1>
            <div className="form-container">
                <h1>Personal Information Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="Name" value={UserData.Name} onChange={handleInputChange} />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="Email" value={UserData.Email} onChange={handleInputChange} />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="Password" value={UserData.Password} onChange={handleInputChange} />

                    <label htmlFor="phoneNo">Phone No</label>
                    <input type="text" name="PhoneNo" value={UserData.PhoneNo} onChange={handleInputChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
