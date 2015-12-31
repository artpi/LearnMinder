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
				<TouchableHighlight style={ style.navbarButton } onPress={ ()=>this.props.dispatch( { scene: 'browser' } ) }>
					<Text style={ style.navbarButtonText }>{ this.remainingFormat() }</Text>
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
