import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

export default class WordCard extends Component{
    activationHandler = c => {console.log(`${c} has been activated.`)}

     //<CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>
    render(){
        return(
            <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>
        );
    }
}