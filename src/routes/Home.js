import { h, Component } from 'preact';
import styled from 'styled-components';

import QuizContainer from '../containers/QuizContainer';
import Score from '../components/shared/Score';

import celebrities from '../data/celebrities.json';
import { shuffleChoices } from '../helpers/questionHelpers';

export default class Home extends Component {
	constructor () {
		super();
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	state = {
		celebrities,
		score: 0,
		currentQuestionIndex: 0,
		questionOrder: this.createQuestionOrder()
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
		const currentQuestionIndex = this.state.currentQuestionIndex + 1;

		this.setState({
			score,
			currentQuestionIndex
		});
	}

	resetScore = () => {
		this.setState({
			score: 0,
			currentQuestionIndex: 0
		})
	}

  createQuestionOrder() {
    const length = celebrities.length;
    const questionOrder = Array.from(
      { length }, (v, i) => i
    );
    shuffleChoices(questionOrder);
    return questionOrder;
  }

	render() {
		return (
			<div>
				<Score
					score={this.state.score}
				/>
				<p>Did this work?</p>
				<QuizContainer
					celebrities={this.state.celebrities}
					currentQuestionIndex={this.state.currentQuestionIndex}
					questionOrder={this.state.questionOrder}
					checkAnswer={this.checkAnswer}
				/>
			</div>
		);
	}
}
