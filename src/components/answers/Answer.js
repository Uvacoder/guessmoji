import { h, Component } from 'preact';

import styled from 'styled-components';

export default class Answer extends Component {
  render() {
    const isAnswer = this.props.answer === 'test';

    return (
      <button
        onClick={() => this.props.checkAnswer(isAnswer)}
      >
        {this.props.answer}
      </button>
    );
  }
}
