import React, { Component } from 'react';
import './css/MangaCard.css';

export default class MangaCard extends Component {

    render() {
        return(
                <div className="mangacard">
                    <img className="mangacard-cover" src={this.props.cover}></img>
                    <p>{this.props.title}</p>
                </div>
        );
    }
}