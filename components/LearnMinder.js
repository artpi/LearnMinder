import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import CodeOrg from './CodeOrg';
import NavBar from './NavBar';
import Settings from './Settings';
import { View, AsyncStorage } from 'react-native';
import style from '../style';

const challenges = {
	starwarsblocks: {
		url: 'https://code.org/api/hour/begin/starwarsblocks',
		label: 'Star Wars'
	},
	frozen: {
		url: 'https://code.org/api/hour/begin/frozen',
		label: 'Frozen with Elsa'
	},
	flappy: {
		url: 'https://code.org/api/hour/begin/flappy',
		label: 'Flappy Bird'
	},
	hourofcode: {
		url: 'https://code.org/api/hour/begin/hourofcode',
		label: 'Hour of Code'
	},
	mc: {
		url: 'https://code.org/api/hour/begin/mc',
		label: 'Minecraft'
	},
};

const LearnMinder = React.createClass( {
	getInitialState: function() {
		AsyncStorage.getItem( 'STATE' ).then( value => {
			let state = JSON.parse( value );
			console.log( 'LOADING DATA', state );
			this.setState( state );
		} );

		AsyncStorage.getItem( 'CHALLENGES' ).then( value => {
			let state = JSON.parse( value );
			if ( value ) {
				this.setState( { challenges: state } );
			}
		} );

		return {
			scene: 'locked',
			url: 'http://www.wp.pl',
			remainingInternet: 30,
			remainingSize: 18,
			challenges: challenges,
			chosenChallenge: 'starwars'
		};
	},
	update: function( change = {} ) {
		if ( change.remainingInternet ) {
			change.remainingInternet += this.state.remainingInternet;
		}

		if ( change.remainingInternet === 0 ) {
			clearInterval( this.counterTimer );
			if ( this.state.scene === 'browser' ) {
				change.scene = 'locked';
			}
		} else if ( this.state.remainingInternet < 1 && change.scene === 'browser' ) {
			change.scene = 'locked';
		} else if ( this.state.scene !== 'browser' && change.scene === 'browser' ) {
			this.counterTimer = setInterval( this.tick, 1000 );
		}	else if ( this.state.scene === 'browser' && 'scene' in change && change.scene !== 'browser' ) {
			clearInterval( this.counterTimer );
		}

		let save = {
			url: this.state.url,
			remainingInternet: this.state.remainingInternet,
			chosenChallenge: this.state.chosenChallenge
		}

		AsyncStorage.setItem( 'STATE', JSON.stringify( save ) );

		this.setState( change );
	},
	winChallenge() {
		this.update( { remainingInternet: 300 } );
	},
	saveChallenges( challenges ) {
		this.setState( { challenges: challenges } );
		AsyncStorage.setItem( 'CHALLENGES', JSON.stringify( challenges ) );
	},
	counterTimer: null,
	tick() {
		this.update( { remainingInternet: -1 } );
	},
	render: function() {
		return (
			<View style={ { ...style.bg, flex: 1 } }>
				<View style={ {flex: 1} }>{ this.renderScene() }</View>
				<View style={ style.navbar }>
					<NavBar dispatch={ this.update } remainingInternet={ this.state.remainingInternet }></NavBar>
				</View>
			</View>
		);
	},
	renderScene: function() {
		switch ( this.state.scene ) {
			case 'locked':
				return ( <Locked dispatch={ this.update }></Locked> );
			case 'browser':
				return ( <Browser url={ this.state.url } urlChanged={ url => { this.update( { url } ) } }></Browser> );
			case 'code':
				return ( <CodeOrg
					win={ this.winChallenge }
					challenges={ this.state.challenges }
					chosenChallenge={ this.state.chosenChallenge }
					saveChallenges={ this.saveChallenges }
				></CodeOrg> );
			case 'settings':
				return ( <Settings
					challenges={ this.state.challenges }
					chosenChallenge={ this.state.chosenChallenge }
					save={ this.update }
				></Settings> );
		}
	}
} );

export default LearnMinder;
