import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';

import styled from 'styled-components';

const Title = styled.h1`
	font-size: 2.5rem;
	padding-top: 1rem;
	text-align: center;
`;

export default class Header extends Component {
	render() {
		return (
			<Title>Guessmoji 😃</Title>
		);
	}
}
