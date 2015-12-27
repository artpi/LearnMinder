
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
			saveChallenges: () => {},
			win: () => {},
			injectedJavaScript: injectedJavaScript,
			chosenChallenge: '',
			challenges: {}
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
		console.log('czel', challenge);
		if ( challenge ) {
			return challenge.lastUrl || challenge.url;
		}
	},
	render: function() {
		return (
			<OnlineExam
				url={ this.getUrl() }
				urlChanged={ this.urlChanged }
				messageReceived={ this.messageReceived }
				injectedJavaScript={ this.props.injectedJavaScript }
			>
			</OnlineExam>
		);
	}
} );
