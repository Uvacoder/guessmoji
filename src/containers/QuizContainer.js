import { h, Component } from 'preact';
import Answer from '../components/QuizContainer/Answer';

import styled from 'styled-components';

import celebrities from '../data/celebrities.json';

import { createOptionsFromObject } from '../helpers/questionHelpers';

export default class QuizContainer extends Component {

  render() {
    const rawChoices = createOptionsFromObject(celebrities[0]);

    const choices = rawChoices.map((choice) =>
        <Answer
          text={choice.text}
          isAnswer={choice.isAnswer}
          checkAnswer={this.props.checkAnswer}
        />
      );

    return (
      <div>
        {choices}
      </div>
    );
  }
}
