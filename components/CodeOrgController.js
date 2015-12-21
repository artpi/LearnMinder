function CodeOrg( lesson, eventBus ) {
	this.eventBus = eventBus;

	this.message = ( msg ) => {
		if ( msg === 'WIN' ) {
			eventBus( { scene: 'browser' } );
		}
	}
}

CodeOrg.prototype.getUrl = () => 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1'
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
