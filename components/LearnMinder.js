import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import OnlineExam from './OnlineExam';
import CodeOrg from './CodeOrgController';
import { View, Text, TouchableOpacity } from 'react-native';

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
	counterStart() {
		this.counterTimer = setInterval( this.tick, 1000 );
	},
	counterStop() {
		clearInterval( this.counterTimer );
	},
	render: function() {
		return (
			<View style={ { flex:1 } }>
				<View style={ {flex:0.9} }>{ this.renderScene() }</View>
				<View style={ {flex:0.1} }>
					<View style={ {flexDirection: 'row', flex:1} }>
						<Text style={ {flex:0.4} }>Remaining: { this.remainingFormat() }</Text>
						<TouchableOpacity style={ {flex:0.3} } onPress={ ()=>this.update( { scene: 'browser' } ) }>
							<Text>Browse</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ {flex:0.3} } onPress={ ()=>this.update( { scene: 'code' } ) }>
							<Text>Learn to unlock</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	},
	renderScene: function() {
		switch ( this.state.scene ) {
			case 'locked':
				this.counterStop();
				return ( <Locked update={this.update}></Locked> );
			case 'browser':
				this.counterStart();
				return ( <Browser url={ this.state.url }></Browser> );
			case 'code':
				this.counterStop();
				let controller = new CodeOrg( this.state.nextLesson, this.update );
				return ( <OnlineExam controller={ controller }></OnlineExam> );
		}
	}
} );

export default LearnMinder;
