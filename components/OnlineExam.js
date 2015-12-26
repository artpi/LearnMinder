import React from 'react-native';
import { View } from 'react-native';
import WebView from 'react-native-webview-bridge';

export default React.createClass( {
	getInitialState: function() {
		return {
			url: this.props.controller.getUrl(),
			status: 'No Page Loaded',
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
			scalesPageToFit: true,
		};
	},

	handleTextInputChange: function( event ) {
		this.inputText = event.nativeEvent.text;
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
					onBridgeMessage={ ( msg )=> this.props.controller.message( msg, this.state.url ) }
					injectedJavaScript = { this.props.controller.getInjectedJavaScript() } />
			</View>
		);
	},

	onShouldStartLoadWithRequest: function( event ) {
		// Implement any custom loading logic here, don't forget to return!
		return true;
	},

	onNavigationStateChange: function( navState ) {
		this.props.controller.saveUrl( navState.url );
		this.setState( {
			url: navState.url,
			status: navState.title,
			loading: navState.loading,
			scalesPageToFit: true
		} );
	}
} );
