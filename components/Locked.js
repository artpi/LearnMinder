import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

var Locked = React.createClass({
  go: function() {
    this.props.update( {scene: 'browser'} );
  },
  render: function() {
    return (
      <View>
        <Text>Oh noes</Text>

          <TouchableOpacity
            onPress={ this.go }>
            <Text>
               {'DAWAJ'}
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
});

export default Locked;
