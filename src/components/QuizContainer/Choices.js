import { h, Component } from 'preact';

import styled from 'styled-components';

export default class Choices extends Component {
  render() {
    return (
      <div>
        {this.props.choices}
      </div>
    );
  }
}
