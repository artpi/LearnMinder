import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import OnlineExam from './OnlineExam';

const LearnMinder = React.createClass( {
	getInitialState: function() {
		return {
			scene: 'locked',
			url: 'http://www.wp.pl',
			nextLesson: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1',
			injectedJavaScript: 'alert("ziemniak")'
		};
	},
	update: function( change ) {
		this.setState( change );
	},
	render: function() {
		switch ( this.state.scene ) {
			case 'locked':
				return ( <Locked update={this.update}></Locked> );
			case 'browser':
				return ( <Browser update={this.update} url={ this.state.url }></Browser> );
			case 'code':
				return ( <OnlineExam update={this.update} url={ this.state.nextLesson } injectedJavaScript={ this.state.injectedJavaScript } ></OnlineExam> );
		}
	}
} );

export default LearnMinder;
