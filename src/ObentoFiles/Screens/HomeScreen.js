import React, { Component } from 'react';
import './css/HomeScreen.css';
import Ichigo from './../Images/ichigo.png';

export default class HomeScreen extends Component {

    render() {
        return(
            <div className="homescreen-main">
                <div className="homescreen-cabecera">
                    <div className="homescreen-banner-title">
                        <h1>Obento</h1>
                        <h2>Online <b>manga</b> library!</h2>
                        <div className="homescreen-searchbar">
                            <input type="text" placeholder="manga title..."/>
                        </div>
                    </div>

                    <div className="homescreen-decoration">
                        <img src={Ichigo}></img>
                    </div>

                    

                </div>
                
                <div className="homescreen-toplist">
                    <div className="homescreen-toplist-tarjeta">
                        <div className="homescreen-toplist-title">
                            <h3>Ranking</h3>
                        </div>
                        <p>1. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                    </div>
                </div>
            </div>
        );
    }
}