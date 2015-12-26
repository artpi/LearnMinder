import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import CodeOrg from './CodeOrg';
import NavBar from './NavBar';
import Settings from './Settings';
import { View, AsyncStorage } from 'react-native';

const LearnMinder = React.createClass( {
	getInitialState: function() {
		AsyncStorage.getItem( 'STATE' ).then( value => {
			let state = JSON.parse( value );
			console.log( 'LOADING DATA', state );
			this.setState( state );
		} );

		return {
			scene: 'locked',
			url: 'http://www.wp.pl',
			remainingInternet: 30,
			remainingSize: 18,
			codeOrg_url: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1'
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
			codeOrg_url: this.state.codeOrg_url
		}

		AsyncStorage.setItem( 'STATE', JSON.stringify( save ) );

		this.setState( change );
	},
	counterTimer: null,
	tick() {
		this.update( { remainingInternet: -1 } );
	},
	render: function() {
		return (
			<View style={ { flex:1 } }>
				<View style={ {flex:0.925} }>{ this.renderScene() }</View>
				<View style={ {flex:0.075} }>
					<NavBar dispatch={ this.update } remainingInternet={ this.state.remainingInternet }></NavBar>
				</View>
			</View>
		);
	},
	renderScene: function() {
		switch ( this.state.scene ) {
			case 'locked':
				return ( <Locked></Locked> );
			case 'browser':
				return ( <Browser url={ this.state.url } urlChanged={ url => { this.update( { url } ) } }></Browser> );
			case 'code':
				return ( <CodeOrg dispatch={ this.update } url={ this.state.codeOrg_url } ></CodeOrg> );
			case 'settings':
				return ( <Settings></Settings> );
		}
	}
} );

export default LearnMinder;
