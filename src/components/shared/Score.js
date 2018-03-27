import { h, Component } from 'preact';

import styled from 'styled-components';

const Number = styled.h1`
	font-size: 2rem;
`;

export default class Score extends Component {
  render() {
    return (
      <Number>{this.props.score}</Number>
    );
  }
}
