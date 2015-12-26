import React from 'react-native';
import { View, Text, TouchableHighlight } from 'react-native';

export default React.createClass({
	remainingFormat: function() {
		function zeroFill( num ) {
			if ( num < 10 ) {
				return '0' + num;
			} else {
				return '' + num;
			}
		}

		const seconds = this.props.remainingInternet % 60;
		const minutes = ( this.props.remainingInternet - seconds ) / 60;
		return zeroFill( minutes ) + ':' + zeroFill( seconds );
	},
	render() {
		return (
			<View style={ {flexDirection: 'row', flex:1, backgroundColor: '#f8f8f8', borderTopColor: '#b2b2b2', borderTopWidth: 1, alignItems: 'center', justifyContent: 'center'} }>
				<Text style={ {flex:0.4, color: '#007aff', fontWeight: 'bold', fontSize: 18, textAlign: 'center'} }>{ this.remainingFormat() }</Text>
				<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 4, backgroundColor: '#e3e4e6', margin: 5, borderRadius: 3 } } onPress={ ()=>this.props.dispatch( { scene: 'browser' } ) }>
					<Text style={{color: '#007aff' }}>Browse</Text>
				</TouchableHighlight>
				<TouchableHighlight style={ {flex:0.3, alignItems: 'center', justifyContent: 'center', padding: 4, backgroundColor: '#e3e4e6', margin: 5, borderRadius: 3 } } onPress={ ()=>this.props.dispatch( { scene: 'code' } ) }>
					<Text style={{color: '#007aff'}}>Learn</Text>
				</TouchableHighlight>
			</View>
		);
	}
});
