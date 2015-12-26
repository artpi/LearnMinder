
const injectedJavaScript = `
if ( !winInterval ) {
	var winInterval = setInterval( function() {
		if( document.querySelector('.win-feedback') ) {
			clearInterval( winInterval );
			WebViewBridge.send('WIN');
		}
	} , 1000 )
};
`;

import React from 'react-native';
import OnlineExam from './OnlineExam';

export default React.createClass( {
	getDefaultProps() {
		return {
			urlChanged: () => {},
			dispatch: () => {},
			url: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1',
			injectedJavaScript: injectedJavaScript
		};
	},
	urlChanged( url ) {
		this.props.dispatch( { codeOrg_url: url } );
	},
	messageReceived( msg ) {
		if ( msg === 'WIN' ) {
			this.props.dispatch( { remainingInternet: 300 } );
		}
	},
	render: function() {
		return (
			<OnlineExam
				url={ this.props.url }
				urlChanged={ this.urlChanged }
				messageReceived={ this.messageReceived }
				injectedJavaScript={ this.props.injectedJavaScript }
			>
			</OnlineExam>
		);
	}
} );
