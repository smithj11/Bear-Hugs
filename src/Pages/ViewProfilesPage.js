import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../App.css"
import MatchProfile from '../Components/MatchProfile';
class ViewProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        }

    }
    render() {
        return (
            <div className="page">
                <div className="row center-row">
                    <div className="col center-col">
                        <MatchProfile></MatchProfile>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProfilePage;
