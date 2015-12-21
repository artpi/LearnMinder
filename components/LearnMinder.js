import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import OnlineExam from './OnlineExam';
import CodeOrg from './CodeOrgController';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const LearnMinder = React.createClass( {
	getInitialState: function() {
		return {
			scene: 'locked',
			url: 'http://www.wp.pl',
			nextLesson: 1,
			remainingInternet: 20
		};
	},
	update: function( change ) {
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
		this.setState( { remainingInternet: ( this.state.remainingInternet - 1 ) } );
	},
	componentWillUpdate( nextProps, nextState ) {
		if ( this.state.scene !== 'browser' && nextState.scene === 'browser' ) {
			this.counterTimer = setInterval( this.tick, 1000 );
		}	else if ( this.state.scene === 'browser' && nextState.scene !== 'browser' ) {
			clearInterval( this.counterTimer );
		}
	},
	render: function() {
		return (
			<View style={ { flex:1 } }>
				<View style={ {flex:0.925} }>{ this.renderScene() }</View>
				<View style={ {flex:0.075} }>
					<View style={ {flexDirection: 'row', flex:1, backgroundColor: '#f8f8f8', borderTopColor: '#b2b2b2', borderTopWidth: 1, alignItems: 'center', justifyContent: 'center'} }>
						<Text style={ {flex:0.4, color: '#007aff'} }>Remaining: { this.remainingFormat() }</Text>
						<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 7, backgroundColor: '#e3e4e6', margin: 7, borderRadius: 3 } } onPress={ ()=>this.update( { scene: 'browser' } ) }>
							<Text style={{color: '#007aff' }}>Browse</Text>
						</TouchableHighlight>
						<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 7, backgroundColor: '#e3e4e6', margin: 7, borderRadius: 3 } } onPress={ ()=>this.update( { scene: 'code' } ) }>
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
				return ( <Locked update={this.update}></Locked> );
			case 'browser':
				return ( <Browser url={ this.state.url }></Browser> );
			case 'code':
				let controller = new CodeOrg( this.state.nextLesson, this.update );
				return ( <OnlineExam controller={ controller }></OnlineExam> );
		}
	}
} );

export default LearnMinder;
