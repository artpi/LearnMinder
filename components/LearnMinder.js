import React from 'react-native';
import Locked from './Locked';
import Browser from './Browser';
import OnlineExam from './OnlineExam';
import CodeOrg from './CodeOrgController';

const LearnMinder = React.createClass( {
	getInitialState: function() {
		return {
			scene: 'locked',
			url: 'http://www.wp.pl',
			nextLesson: 1
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
				return ( <Browser url={ this.state.url }></Browser> );
			case 'code':
				let controller = new CodeOrg( this.state.nextLesson, this.update );
				return ( <OnlineExam controller={ controller }></OnlineExam> );
		}
	}
} );

export default LearnMinder;
