import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

var Locked = React.createClass( {
	go: function( scene ) {
		this.props.dispatch( {scene: scene} );
	},
	render: function() {
		return (
			<View>
				<Text style={ { textAlign: 'center', fontSize: 40, marginTop: 20, marginBottom: 20 } }>Oh noes!</Text>
				<Text> 
The Internet is broken and you need to help us repair it.
For every solved coding challenge you will have 5 min of Internet.
You can change to a different challenge set in Settings.

				</Text>
					<TouchableOpacity 
						onPress={ this.go.bind( this, 'code' ) }>
						<Text style={ { textAlign: 'center', fontSize: 20, marginTop: 20, marginBottom: 20 } }>
							Start learning to unlock internet!
						</Text>
					</TouchableOpacity>
			</View>
		);
	}
} );

export default Locked;
