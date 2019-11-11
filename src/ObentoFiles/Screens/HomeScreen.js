import React, { Component } from 'react';
import './css/HomeScreen.css';
import Ichigo from './../Images/ichigo.png';

export default class HomeScreen extends Component {

    render() {
        return(
            <div className="homescreen-main">
                <div className="homescreen-banner-title">
                    <h1>Obento</h1>
                    <h2>Online <b>manga</b> library!</h2>
                </div>

                <div className="homescreen-decoration">
                    <img src={Ichigo}></img>
                </div>

                <div className="homescreen-toplist">
                    <div className="homescreen-toplist-tarjeta">
                        <div className="homescreen-toplist-title">
                            <h3>Ranking</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}