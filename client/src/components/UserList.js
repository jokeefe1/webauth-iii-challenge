import axios from 'axios'
import React, { Component } from 'react'

export default class UserList extends Component {
    state = {
        users: []
    }

    handleGetUsers = async () => {
        const token = localStorage.getItem('token')

        const result = await axios.get('http://localhost:8000/api/users', {
            headers: {
                token
            }
        })

        const users = result.data.allUsers
        this.setState({ users })
    }

    render() {
        return (
            <div>
                <h3>User List</h3>
                <button onClick={this.handleGetUsers}>Get All Users</button>
                <div>
                    <ul>
                        {this.state.users.map(user => (
                            <li key={user.id}>{user.username}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
