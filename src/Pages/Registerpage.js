import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../App.css"


class RegisterPage extends React.Component {
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
                            <h2 className="font-red">Register for Bear Hugs</h2>
                                </div>
                            
                                <div className="input-row center-row">
                                    <input className="input" type='text' name='WUSTL Email' placeholder="yourwustlemail@wustl.edu"/>
                                </div>
                                <div className="input-row center-row">
                                    <input className="input" type='password' name='Password' placeholder="Password"/>
                                </div>
                                <div className="input-row center-row">
                                    <input className="input" type='password' name='confirm_Password' placeholder="Confirm Password"/>
                                </div>
                                <div className="input-row center-row">
                                    <input className="input" type='number' name='Age' placeholder="Type age here"/>
                                </div>
                                <div className="center-row padding-top-1rem">
                                    <div className="divider ">
                                    </div>
                                </div>
                                <div className="input-row center-row">
                                    <button className="full-width-button red" type="submit">Register!</button>
                                </div>
                                <div className="row center-row">
                                <Link to="/" className="route-link">Back to Login </Link>
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

export default RegisterPage;
