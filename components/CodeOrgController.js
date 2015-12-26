function CodeOrg( eventBus ) {
	const self = this;
	this.eventBus = eventBus;
	this.state = {
		url: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1'
	};

	this.message = ( msg, url ) => {
		if ( msg === 'WIN' ) {
			eventBus( { remainingInternet: 300 } );
		}
	}

	this.getUrl = () => self.state.url;

	this.saveUrl = ( url ) => {
		self.state.url = url;
		eventBus();
	}
}

CodeOrg.prototype.getInjectedJavaScript = () => `
if ( !winInterval ) {
	var winInterval = setInterval( function() {
		if( document.querySelector('.win-feedback') ) {
			clearInterval( winInterval );
			WebViewBridge.send('WIN');
		}
	} , 1000 )
};
`;

export default CodeOrg;
