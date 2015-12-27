import React from 'react-native';
import style from '../style';
import Dropdown from 'react-native-dropdown-android';

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
			<Dropdown
				style={{ height: 20, width: 200}}
				values={ keys.map( val => this.props.options[val].label ) }
				selected={ keys.indexOf( this.props.chosenOption ) }
				onChange={ data => this.props.save( keys[ data.selected ] ) } />
		);
	}
} );
