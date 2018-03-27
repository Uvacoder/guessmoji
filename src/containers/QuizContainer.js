import { h, Component } from 'preact';

import Answer from '../components/QuizContainer/Answer';
import Question from '../components/QuizContainer/Question';
import Choices from '../components/QuizContainer/Choices';

import styled from 'styled-components';

import { createOptionsFromObject } from '../helpers/questionHelpers';

export default class QuizContainer extends Component {
  state = {
    currentQuestion: this.getCurrentQuestion()
  }

  componentWillReceiveProps(nextProps) {
    const { questionOrder, celebrities } = this.props;
    const { currentQuestionIndex } = nextProps;

    const index = questionOrder[currentQuestionIndex];
    const currentQuestion = celebrities[index];

    this.setState({
      currentQuestion
    })
  }

  getCurrentQuestion() {
    const { currentQuestionIndex, questionOrder, celebrities } = this.props;

    const index = questionOrder[currentQuestionIndex];
    const currentQuestion = celebrities[index];
    return currentQuestion;
  }

  render() {
    const currentQuestion = this.state.currentQuestion;
    const rawChoices = createOptionsFromObject(currentQuestion);

    const choices = rawChoices.map((choice) =>
      <Answer
        text={choice.text}
        isAnswer={choice.isAnswer}
        checkAnswer={this.props.checkAnswer}
      />
    );

    return (
      <div>
        <Question
          emojis={currentQuestion.emojis}
        />
        <Choices
          choices={choices}
        />
      </div>
    );
  }
}
