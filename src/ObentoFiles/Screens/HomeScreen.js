import React, { Component } from 'react';
import './css/HomeScreen.css';
import Ichigo from './../Images/ichigo.png';

//Components
import MangaCard from '../Components/Manga/MangaCard';
import Cover from './../Images/Covers/jojo.jpg';
import CoverMHA from './../Images/Covers/mha.jpg';
import CoverOP from './../Images/Covers/op.jpg';

export default class HomeScreen extends Component {

    render() {
        return(
            <div className="homescreen-main">
                <div className="homescreen-cabecera">
                    <div className="homescreen-banner-title">
                        <h1>Obento</h1>
                        
                        <div className="homescreen-searchbar">
                            <input type="text" placeholder="manga title..."/>
                        </div>
                    </div>
                    {/*}
                    <div className="homescreen-decoration">
                        <img src={Ichigo} alt="ichigo"></img>
                    </div>
                    */}

                </div>
                
                <div className="homescreen-toplist">
                    <div className="homescreen-toplist-tarjeta">
                        <div className="homescreen-toplist-title">
                            <h3>Ranking</h3>
                        </div>
                        <p>1. One Piece</p>
                        <p>2. Naruto</p>
                        <p>3. Bleach</p>
                        <p>4. Boku no Hero Academia</p>
                        <p>5. Black Clover</p>
                        <p>5. Berserk</p>
                        <p>6. Jojo's Bizarre Adventure</p>
                        <p>7. Fairy Tail</p>
                        <p>2. ADBSAJDBSA</p>
                        <p>2. ADBSAJDBSA</p>
                    </div>
                </div>

                <div className="homescreen-manga">
                    <MangaCard cover={Cover} title="Jojo's Bizarre Adventure"/>
                    <MangaCard cover={CoverMHA} title="My Hero Academia"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                    <MangaCard cover={CoverOP} title="One Piece"/>
                </div>
            </div>
        );
    }
}