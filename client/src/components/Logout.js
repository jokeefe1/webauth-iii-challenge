import React from 'react';

export default function Logout(props) {
    const handleLogout = () => {
        localStorage.removeItem('token')
        props.history.push('/login')
    }

    return (
        <>
            <p>{console.log(props)}</p>
            <h3>Log Out</h3>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}
