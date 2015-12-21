function CodeOrg( lesson, eventBus ) {
	const self = this;
	this.eventBus = eventBus;
	this.url = 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1';

	this.message = ( msg, url ) => {
		if ( msg === 'WIN' ) {
			eventBus( { remainingInternet: 300 } );
		}
	}

	this.getUrl = () => self.url;
	this.saveUrl = ( url ) => {
		self.url = url;
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
