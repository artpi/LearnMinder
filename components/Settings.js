import React from 'react-native';
import {
	Text,
	View,
	PickerIOS,
	PickerItemIOS
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
		return (
			<View>
				<Text style={ { ...style.h2, marginTop: 30 } }>Choose a Code.org challenge:</Text>
				<PickerIOS
					onValueChange={ ( value ) => { this.props.save( { chosenChallenge: value } ) } }
					selectedValue={ this.props.chosenChallenge }>
					{
						Object.keys( this.props.challenges ).map( ( val ) => { return (
							<PickerItemIOS value={ val } key={ val } label={ this.props.challenges[val].label }></PickerItemIOS>
						) } )
					}
				</PickerIOS>
			</View>
		);
	}
} );