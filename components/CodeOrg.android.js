const injectedJavaScript = `
if ( !winInterval ) {
	var winInterval = setInterval( function() {
		if( document.querySelector('.win-feedback') ) {
			clearInterval( winInterval );
			document.location.href += "?WIN";
		}
	} , 1000 )
};
`;

import React from 'react-native';
import WebView from 'react-native-webview-android';

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
		console.log(url);
		if ( url.indexOf( '?WIN' ) !== -1 ) {
			this.messageReceived( 'WIN' );
		} else {
			this.props.challenges[ this.props.chosenChallenge ].lastUrl = url;
			this.props.saveChallenges( this.props.challenges );
		}
	},
	getUrl() {
		let challenge = this.props.challenges[ this.props.chosenChallenge ];
		if ( challenge ) {
			return challenge.lastUrl || challenge.url;
		}
		return '';
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
			loading: navState.loading
		} );
	},
	render: function() {
		return (
			<WebView
				style={ { flex: 1 } }
				ref={ 'onlineExam' }
				automaticallyAdjustContentInsets={false}
				url={ this.getUrl() }
				javaScriptEnabledAndroid={true}
				onNavigationStateChange={this.onNavigationStateChange}
				onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
				startInLoadingState={true}
				scalesPageToFit={this.state.scalesPageToFit}
				injectedJavaScript = { this.props.injectedJavaScript } >
			</WebView>
		);
	}
} );
