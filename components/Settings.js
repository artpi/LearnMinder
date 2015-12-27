import React from 'react-native';
import {
	Text,
	View,
	PickerIOS
} from 'react-native';
import style from '../style';

export default React.createClass( {
	getDefaultProps() {
		return {
			save: () => {},
			chosenChallenge: '',
			challenges: {}
		}
	},
	render() {
		const options = Object.keys( this.props.challenges )
			.map( ( val ) => React.createElement( 'PickerItemIOS', { key: val, value: val, label: ( this.props.challenges[val].label ).toString() } ) );
		return (
			<View>
				<Text style={ { ...style.h2, marginTop: 30 } }>Choose a Code.org challenge:</Text>
				<PickerIOS
					onValueChange={ ( value ) => { this.props.save( { chosenChallenge: value } ) } }
					selectedValue={ this.props.chosenChallenge }>
					{ options }
				</PickerIOS>
			</View>
		);
	}
} );
