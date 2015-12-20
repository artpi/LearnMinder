var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} = React;

var Browser = require('./browser.js').default;


var LearnMinder = React.createClass({
  render: function() {
    return (
      <Browser
         url = { "http://www.wp.pl" } >
      </Browser>
    );
  }
});

export default LearnMinder;