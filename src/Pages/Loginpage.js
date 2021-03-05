import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../App.css"


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div className="page">
                   
                <div className="row center-row">
                    <div className="col center-col">
                        <div className="box margin-5rem ">
                            <form>
                            <div className="input-row center-row">
                            <h2 className="font-red">Log In To Bear Hugs</h2>
                                </div>
                            
                                <div className="input-row center-row">
                                    <input className="input" type='text' name='Email' placeholder="Email"/>
                                </div>
                                <div className="input-row center-row">
                                    <input className="input" type='password' name='Password' placeholder="Password"/>
                                </div>
                                <div className="center-row padding-top-1rem">
                                    <div className="divider ">
                                    </div>
                                </div>
                                <div className="input-row center-row">
                                    <button className="full-width-button red" type="submit">Log In</button>
                                </div>
                                <div className="row center-row">
                                <p>Don't have an account?  <Link to="/register" className="route-link">Register here! </Link></p>
                                <Link to="/viewmatches" className="route-link">View matches prototype</Link>
                            </div>
                            </form>

                   
                        </div>
                    </div>
                </div>
                <div className="page-gradient">
                        
                        </div>
            </div>
        );
    }
}

export default LoginPage;

