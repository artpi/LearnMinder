import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../style';

var Locked = React.createClass( {
	go: function( scene ) {
		this.props.dispatch( {scene: scene} );
	},
	render: function() {
		return (
			<View style={ style.bg }>
				<Text style={ style.title }>OH NoeS!</Text>
				<Text style={ style.p }>
The Internet is broken and you need to help us repair it.
For every solved coding challenge you will have 5 min of Internet.
You can change to a different challenge set in Settings.

				</Text>
					<TouchableOpacity style={ style.button }
						onPress={ this.go.bind( this, 'code' ) }>
						<Text style={ style.buttonText }>
							Start learning to unlock internet!
						</Text>
					</TouchableOpacity>
			</View>
		);
	}
} );

export default Locked;
