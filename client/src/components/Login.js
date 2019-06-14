import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    handleSubmit = async evt => {
        evt.preventDefault()

        const result = await axios.post('http://localhost:8000/api/login', {
            username: this.state.username,
            password: this.state.password
        })

        const token = result.data.token

        localStorage.setItem('token', token)
        this.props.history.push('/user-list')
        
    }

    render() {
        return (
            <>
                <h3>Login</h3>
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
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
