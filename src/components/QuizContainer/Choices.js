import { h, Component } from 'preact';

import styled from 'styled-components';

const ChoicesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default class Choices extends Component {
  render() {
    return (
      <ChoicesContainer>
        {this.props.choices}
      </ChoicesContainer>
    );
  }
}
