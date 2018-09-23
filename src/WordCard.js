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
		life: 5,
		attempt: 1,
		guess: [],
		completed: false,
		uncompleted : false
	}
 }
export default class WordCard extends Component{
	  constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
			if(this.state.life > 0){
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
					if(this.state.life === 1 )
						this.setState({uncompleted: true})
				}
			}
		}
		}


    render(){
        return(
            <div>
            {
                Array.from(this.state.chars).map((c, i)=> <CharacterCard value={c} key={i} activationHandler={this.activationHandler} attempt={this.state.attempt}/>)
              }
					<p>Round : {this.state.attempt}</p>
					<p>Life : {this.state.life}</p>
          <p>{this.state.completed? "You Winnnnn !! :D" : ""}</p>
          <p>{this.state.uncompleted? "You Lose !! :(" : ""}</p>
            </div>
        );
    }
}
