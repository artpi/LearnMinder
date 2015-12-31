import React from 'react-native';
import { View, Text, TouchableHighlight } from 'react-native';
import style from '../style';

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
			<View style={ style.innerNavbar }>
				<Text style={ {flex:0.3, color: '#007aff', fontWeight: 'bold', fontSize: 18, textAlign: 'center'} }>{ this.remainingFormat() }</Text>
				<TouchableHighlight style={ style.navbarButton } onPress={ ()=>this.props.dispatch( { scene: 'browser' } ) }>
					<Text style={ style.navbarButtonText }>Browse</Text>
				</TouchableHighlight>
				<TouchableHighlight style={ style.navbarButton } onPress={ ()=>this.props.dispatch( { scene: 'code' } ) }>
					<Text style={ style.navbarButtonText }>Learn</Text>
				</TouchableHighlight>
				<TouchableHighlight style={ { ...style.navbarButton, flex: 0.1 } } onPress={ ()=>this.props.dispatch( { scene: 'settings' } ) }>
					<Text style={ style.navbarButtonText }>S</Text>
				</TouchableHighlight>
			</View>
		);
	}
});
