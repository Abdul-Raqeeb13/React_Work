import React, { useState, useEffect } from 'react';
import './TodoApp.css';
import { MdDelete } from 'react-icons/md';

export default function TodoApp() {
    // Retrieve the initial state from local storage or set it to an empty array
    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [inputValue, setInputValue] = useState('');
    const [dateTime, setDateTime] = useState('');

    // Effect to update local storage whenever the todo state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo]);

    // Function to handle adding a new task
    const addTask = () => {
        if (inputValue.trim() !== '') {
            const now = new Date();
            const newTask = {
                text: inputValue,
                time: now.toLocaleString(), // Store the current date and time as a string
            };
            setTodo([...todo, newTask]);
            setInputValue(''); // Clear the input field after adding
        }
    };

    // Function to handle deleting a task
    const deleteTask = (index) => {
        console.log(todo);
        
        const newTodoList = todo.filter((_, i) => i !== index );
        setTodo(newTodoList);
    };

    // Update the current date and time every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currDate = now.toLocaleDateString();
            const currTime = now.toLocaleTimeString();
            setDateTime(`${currDate} - ${currTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>Todo App Project with Date and Time</h1>
            <div className="body">
                <div className="Todocontainer">
                    <h2 style={{ color: 'white', textAlign: 'center' }}>{dateTime}</h2>
                    <div className="inputArea">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Todo"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className="Btn" onClick={addTask}>Add Task</button>
                    </div>
                    <div className="todoAres">
                        {todo.map((item, index) => (
                            <div className="todoText" key={index}>
                                <span>{item.text}</span>
                                <br />
                                <small>{item.time}</small>
                                <span onClick={() => deleteTask(index)}>
                                    <MdDelete className="deleteicon" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
