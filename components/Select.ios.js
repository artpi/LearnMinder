import React from 'react-native';
import { PickerIOS } from 'react-native';
import style from '../style';

export default React.createClass( {
	getDefaultProps() {
		return {
			save: () => {},
			chosenOption: '',
			options: {}
		}
	},
	render() {
		return (
			<PickerIOS
				onValueChange={ value => this.props.save( value ) }
				selectedValue={ this.props.chosenOption }>
				{
					Object.keys( this.props.options )
					.map( ( val ) => React.createElement( 'PickerItemIOS', { key: val, value: val, label: ( this.props.options[val].label ).toString() } ) );
				}
			</PickerIOS>
		);
	}
} );
