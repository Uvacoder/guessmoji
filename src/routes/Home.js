import { h, Component } from 'preact';
import styled from 'styled-components';

import AnswerContainer from '../containers/AnswerContainer';
import Score from '../components/shared/Score';

export default class Home extends Component {
	constructor () {
		super();
		this.addScore = this.addScore.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	state = {
		score: 0,
		questionsAsked: [],
		currentQuestion: 0
	}

	checkAnswer = (userGuess) => {
		if(userGuess) {
			this.addScore();
		} else {
			this.resetScore();
		};
	}

	addScore = () => {
		const score = this.state.score + 1;
		this.setState({
			score
		});
	}

	resetScore = () => {
		this.setState({
			score: 0
		})
	}

	render() {
		return (
			<div>
				<Score
					score={this.state.score}
				/>
				<AnswerContainer
					addScore={this.addScore}
					checkAnswer={this.checkAnswer}
				/>
			</div>
		);
	}
}
