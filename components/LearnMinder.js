import React from 'react-native';
import Locked from './Locked';
import Browser from './browser';

const LearnMinder = React.createClass( {
	getInitialState: function() {
		return {
			scene: 'locked',
			url: 'http://www.wp.pl'
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
		}
	}
} );

export default LearnMinder;
