'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} = React;

var OnlineExam = require('./components/onlineExam.js').default;


var LearnMinder = React.createClass({
  render: function() {
    return (
      <OnlineExam
         injectedJavaScript = { "if (!winInterval) { var winInterval = setInterval( function() { if( document.querySelector('.win-feedback') ) { clearInterval( winInterval ); alert('WIN'); } } , 1000 ) };" }
         url = { "https://studio.code.org/s/frozen/stage/1/puzzle/1" } >
      </OnlineExam>
    );
  }
});
AppRegistry.registerComponent('LearnMinder', () => LearnMinder);
