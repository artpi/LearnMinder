import React from 'react-native';
import {
	Text,
	View,
	PickerIOS,
	PickerItemIOS
} from 'react-native';
import style from '../style';


const challenges = {
	starwarsblocks: {
		url: 'https://code.org/api/hour/begin/starwarsblocks',
		label: 'Star Wars'
	},
	frozen: {
		url: 'https://code.org/api/hour/begin/frozen',
		label: 'Frozen with Elsa'
	},
	flappy: {
		url: 'https://code.org/api/hour/begin/flappy',
		label: 'Flappy Bird'
	},
	hourofcode: {
		url: 'https://code.org/api/hour/begin/hourofcode',
		label: 'Hour of Code'
	},
	mc: {
		url: 'https://code.org/api/hour/begin/mc',
		label: 'Minecraft'
	},
};

export default React.createClass( {
	getInitialState() {
		return {
			challenge: 'starwarsblocks'
		}
	},
	render() {
		return (
			<View>
				<Text style={ { ...style.h2, marginTop: 30 } }>Choose a Code.org challenge:</Text>
				<PickerIOS
					onValueChange={ ( value ) => { this.setState( { challenge: value } ) } }
					selectedValue={ this.state.challenge }
				>
					{
						Object.keys( challenges ).map( ( val ) => { return (
							<PickerItemIOS value={ val } key={ val } label={ challenges[val].label } />
						) } )
					}
				</PickerIOS>
			</View>
		);
	}
} );