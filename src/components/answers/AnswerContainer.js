import { h, Component } from 'preact';
import Answer from './Answer';

import styled from 'styled-components';

export default class AnswerContainer extends Component {
  render() {
    return (
      <div>
        <Answer
          answer = 'test'
          checkAnswer={this.props.checkAnswer}
        />
        <Answer
          answer='test2'
          checkAnswer={this.props.checkAnswer}
        />
        <Answer
          answer='test3'
          checkAnswer={this.props.checkAnswer}
        />
        <Answer
          answer='test4'
          checkAnswer={this.props.checkAnswer}
        />
      </div>
    );
  }
}
