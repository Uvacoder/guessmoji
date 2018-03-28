import { h, Component } from 'preact';

import styled from 'styled-components';

import { transitions } from '../../styles/sharedVariables';

const AnswerButton = styled.button`
  color: white;
  background: ${props => props.isAnswer ? 'green' : 'tomato'};
  padding: 0.5rem;
  width: 10rem;
  transition: ${ transitions.fast };

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default class Answer extends Component {
  render() {
    const { isAnswer } = this.props;

    return (
      <AnswerButton isAnswer={isAnswer} onClick={() => this.props.checkAnswer(isAnswer)}>
        {this.props.text}
      </AnswerButton>
    );
  }
}
