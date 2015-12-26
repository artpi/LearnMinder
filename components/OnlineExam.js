import React from 'react-native';
import { View } from 'react-native';
import WebView from 'react-native-webview-bridge';

export default React.createClass( {
	getDefaultProps() {
		return {
			urlChanged: () => {},
			messageReceived: () => {},
			injectedJavaScript: ''
		};
	},
	getInitialState: function() {
		return {
			url: this.props.url,
			status: 'No Page Loaded',
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
			scalesPageToFit: true,
		};
	},
	render: function() {
		this.inputText = this.state.url;

		return (
			<View style={ { flex: 1 } }>
				<WebView
					ref={ 'onlineExam' }
					automaticallyAdjustContentInsets={false}
					url={this.state.url}
					javaScriptEnabledAndroid={true}
					onNavigationStateChange={this.onNavigationStateChange}
					onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
					startInLoadingState={true}
					scalesPageToFit={this.state.scalesPageToFit}
					onBridgeMessage={ this.props.messageReceived }
					injectedJavaScript = { this.props.injectedJavaScript } />
			</View>
		);
	},

	onShouldStartLoadWithRequest: function( event ) {
		// Implement any custom loading logic here, don't forget to return!
		return true;
	},

	onNavigationStateChange: function( navState ) {
		this.props.urlChanged( navState.url );
		this.setState( {
			url: navState.url,
			status: navState.title,
			loading: navState.loading,
			scalesPageToFit: true
		} );
	}
} );
