import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
	render() {
		return (
			<header>
				<h1>Guessmoji 😃</h1>
			</header>
		);
	}
}
