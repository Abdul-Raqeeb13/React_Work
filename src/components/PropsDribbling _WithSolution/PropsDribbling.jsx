// Prop Drilling refers to the process of passing data from a parent component to a deeply nested child component by passing it through intermediate components, even if those intermediate components do not need to use the data themselves. This can make the code harder to maintain and understand.

// means if we want to send the data in the nested component we must pass the props to all nested component to send the data to the component we want . We pass props to the compnent even if he dont need the props but we sent to pass the data to the child compoent  

// for the solutionwe use context api and context hook


import React from 'react';

// Parent component
export default function App() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    return (
        <div>
            <h1>Props Dribbling</h1>
            <div style={{textAlign:"center"}}>
            <h1>Welcome to the App</h1>
            {/* Passing the `user` prop to the Layout component */}
            <Layout user={user} />    
            </div>
            
        </div>
    );
}


// Another intermediate component that doesn't need `user`
function Layout({ user }) {
    return (
        <div>
            <h2>Layout</h2>
            {/* Passing the `user` prop to the Sidebar component */}
            <Sidebar user={user} />
        </div>
    );
}


// Intermediate component that doesn't need `user`, but must pass it down
function Sidebar({ user }) {
    return (
        <div>
            <h2>Sidebar</h2>
            {/* Passing the `user` prop to the UserProfile component */}
            <UserProfile user={user} />
        </div>
    );
}


// Grandchild component that needs the `user` prop
function UserProfile({ user }) {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}



