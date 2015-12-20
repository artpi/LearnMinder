function CodeOrg() {
}

CodeOrg.prototype.getUrl = () => 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1'
CodeOrg.prototype.getInjectedJavaScript = () => "if (!winInterval) { var winInterval = setInterval( function() { if( document.querySelector('.win-feedback') ) { clearInterval( winInterval ); alert('WIN'); } } , 1000 ) };";

export default CodeOrg;
