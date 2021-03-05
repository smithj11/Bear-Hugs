import React, { Component } from 'react';
import "../App.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

class MatchProfile extends React.Component {

    render() {
        return (
            <div className="row center-row">

                <div className="col">
                    <div className="box">
                        <div className="col center-col">
                            <div className="row center-row">
                                <div className="img-container">
                                    <img className="match-img" src="possum-on-horse.png"></img>
                                </div>
                            </div>
                            <div className="row center-row">
                                <h2 className="display-block">Paul Possum, 22</h2>
                                <br></br>
                                <h3 className="light-gray block-display">Art History BA</h3>
                            </div>
                            <div className="scroll-box margin-1rem">
                                <div className="row center-row">
                                    <p>I love to stand on top of art installations</p>
                                </div>
                            </div>
                            <div className="row center-row fit-container-width red">
                            <div className="col center-col padding-left-right-2">
                                <div className="red">
                                    <FontAwesomeIcon icon={faHeart}
                                        color="#ffffff"
                                        size="4x"
                                    />
                                </div>
                            </div>
                            <div className="col center-col padding-left-right-2 margin-left-right-1 ">
                                    <div className="red">
                                        <FontAwesomeIcon icon={faHeartBroken}
                                            color="#ffffff"
                                            size="4x"
                                        />
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default MatchProfile;