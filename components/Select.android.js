import React from 'react-native';
import style from '../style';
import Dropdown from 'react-native-dropdown-android';
import { View } from 'react-native';

export default React.createClass( {
	getDefaultProps() {
		return {
			save: () => {},
			chosenOption: '',
			options: {}
		}
	},
	render() {
		const keys = Object.keys( this.props.options );
		return (
			<View style={ { flexDirection: 'row' } }>
			<Dropdown
				style={{ ...style.select, flex: 1 }}
				values={ keys.map( val => this.props.options[val].label ) }
				selected={ keys.indexOf( this.props.chosenOption ) }
				onChange={ data => this.props.save( keys[ data.selected ] ) } />
			</View>
		);
	}
} );
