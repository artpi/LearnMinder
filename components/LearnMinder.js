import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import CodeOrg from './CodeOrg';
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native';

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
	remainingFormat: function() {
		function zeroFill( num ) {
			if ( num < 10 ) {
				return '0' + num;
			} else {
				return '' + num;
			}
		}

		const seconds = this.state.remainingInternet % 60;
		const minutes = ( this.state.remainingInternet - seconds ) / 60;
		return zeroFill( minutes ) + ':' + zeroFill( seconds );
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
					<View style={ {flexDirection: 'row', flex:1, backgroundColor: '#f8f8f8', borderTopColor: '#b2b2b2', borderTopWidth: 1, alignItems: 'center', justifyContent: 'center'} }>
						<Text style={ {flex:0.4, color: '#007aff', fontWeight: 'bold', fontSize: this.state.remainingSize, textAlign: 'center'} }>{ this.remainingFormat() }</Text>
						<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 4, backgroundColor: '#e3e4e6', margin: 5, borderRadius: 3 } } onPress={ ()=>this.update( { scene: 'browser' } ) }>
							<Text style={{color: '#007aff' }}>Browse</Text>
						</TouchableHighlight>
						<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 4, backgroundColor: '#e3e4e6', margin: 5, borderRadius: 3 } } onPress={ ()=>this.update( { scene: 'code' } ) }>
							<Text style={{color: '#007aff'}}>Learn</Text>
						</TouchableHighlight>
					</View>
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
		}
	}
} );

export default LearnMinder;
