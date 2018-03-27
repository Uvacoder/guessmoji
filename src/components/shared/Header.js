import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1em;
	text-align: center;
	color: palevioletred;
	background-color: tomato;
`;

export default class Header extends Component {
	render() {
		return (
			<Title>
				<h1>Guessmoji 😃</h1>
			</Title>
		);
	}
}
