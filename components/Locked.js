import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

var Locked = React.createClass( {
	go: function( scene ) {
		this.props.update( {scene: scene} );
	},
	render: function() {
		return (
			<View>
				<Text>Oh noes</Text>

					<TouchableOpacity
						onPress={ this.go.bind( this, 'browser' ) }>
						<Text>
							{ 'ODPAL BROWSER' }
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={ this.go.bind( this, 'code' ) }>
						<Text>
							{ 'CODE.oRG' }
						</Text>
					</TouchableOpacity>
			</View>
		);
	}
} );

export default Locked;
