import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

import _ from 'lodash';
 const prepareStateFromWord = (given_word) => {
	let word = given_word.toUpperCase()
	let chars = _.shuffle(Array.from(word))
	return {
		word,
		chars,
		life: 10,
		attempt: 1,
		guess: [],
		completed: false
	}
 }
export default class WordCard extends Component{
	  constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
			let guess = [this.state.guess]+c
			// console.log(guess + "")`
			this.setState({guess})
			
			// console.log(guess.length + "")
			if(guess.length === this.state.chars.length){
				console.log("trueee")
				if(guess === this.state.word){
					console.log("True")
					this.setState({guess:[], completed: true})
				}else{
					this.setState({guess:[], attempt: this.state.attempt + 1,life : this.state.life - 1})
				}
			}
		}


    render(){
        return(
            <div>
            {
                Array.from(this.props.value).map((c, i)=> <CharacterCard value={c} key={i} activationHandler={this.activationHandler} attempt={this.state.attempt}/>)
              }
					<p>Round : {this.state.attempt}</p>
					<p>Life : {this.state.life}</p>
          <p>{this.state.completed? "you win" : ""}</p>
            </div>
        );
    }
}
