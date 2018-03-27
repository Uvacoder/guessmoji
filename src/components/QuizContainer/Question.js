import { h, Component } from 'preact';

import styled from 'styled-components';

const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Emoji = styled.span`
  height: 3.5rem;
  width: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Question extends Component {
  render() {
    return (
      <EmojiContainer>
        {this.props.emojis.map(emoji => <Emoji>{emoji}</Emoji>)}
      </EmojiContainer>
    );
  }
}
