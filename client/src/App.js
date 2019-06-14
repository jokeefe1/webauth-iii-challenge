import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

function App() {
    return (
        <>
        <nav>
            <h3>Hello World</h3>
        <div>
          <ul>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='logout'>Logout</NavLink>
            </li>
          </ul>
        </div>
        </nav>
            <main>
                <Switch>
                    <Route component={Register} path="/register" />
                    <Route component={Login} path="/login" />
                    <Route component={Logout} path="/logout" />
                </Switch>
            </main>
        </>
    );
}

export default App;
