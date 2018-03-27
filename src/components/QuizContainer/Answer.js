import { h, Component } from 'preact';

import styled from 'styled-components';

export default class Answer extends Component {
  render() {
    const { isAnswer } = this.props;

    return (
      <button
        onClick={() => this.props.checkAnswer(isAnswer)}
      >
        {this.props.text}
      </button>
    );
  }
}
