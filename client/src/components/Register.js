import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        department: ''
    }

    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    handleSubmit = async evt => {
        const { username, password } = this.state
        evt.preventDefault()
        try {
            const result = await axios.post(
                'http://localhost:8000/api/register',
                {
                    username: username,
                    password: password
                }
            )
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <>
                <h3>Register</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
