import React from 'react-native';
import {
	Text,
	View
} from 'react-native';
import style from '../style';
import Select from './Select';

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
				<Select options={ this.props.challenges } chosenOption={ this.props.chosenChallenge } save={ value => this.props.save( { chosenChallenge: value } ) }/>
			</View>
		);
	}
} );
