
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
import { View } from 'react-native';
import WebView from 'react-native-webview-bridge';

export default React.createClass( {
	getDefaultProps() {
		return {
			saveChallenges: () => {},
			win: () => {},
			injectedJavaScript: injectedJavaScript,
			chosenChallenge: '',
			challenges: {}
		};
	},
	getInitialState: function() {
		return {
			status: 'No Page Loaded',
			loading: true,
			scalesPageToFit: true,
		};
	},
	messageReceived( msg ) {
		if ( msg === 'WIN' ) {
			this.props.win();
		}
	},
	urlChanged( url ) {
		this.props.challenges[ this.props.chosenChallenge ].lastUrl = url;
		this.props.saveChallenges( this.props.challenges );
	},
	getUrl() {
		let challenge = this.props.challenges[ this.props.chosenChallenge ];
		if ( challenge ) {
			return challenge.lastUrl || challenge.url;
		}
	},
	onShouldStartLoadWithRequest: function( event ) {
		// Implement any custom loading logic here, don't forget to return!
		return true;
	},

	onNavigationStateChange: function( navState ) {
		this.urlChanged( navState.url );
		this.setState( {
			url: navState.url,
			status: navState.title,
			loading: navState.loading,
			scalesPageToFit: true
		} );
	},
	render: function() {
		return (
			<View style={ { flex: 1 } }>
				<WebView
					ref={ 'onlineExam' }
					automaticallyAdjustContentInsets={false}
					url={ this.getUrl() }
					javaScriptEnabledAndroid={true}
					onNavigationStateChange={this.onNavigationStateChange}
					onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
					startInLoadingState={true}
					scalesPageToFit={this.state.scalesPageToFit}
					onBridgeMessage={ this.messageReceived }
					injectedJavaScript = { this.props.injectedJavaScript } />
			</View>
		);
	}
} );
