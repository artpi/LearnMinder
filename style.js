const fontTitle = 'Blogger Sans';
const fontText = fontTitle;
const colorBG = '#e0e4cc';
const colorAccent = '#fa6900';
const colorText = colorAccent;
const colorButton = '#69d2e7';

export default {
	bg: {
		backgroundColor: colorBG
	},
	h2: {
		fontSize: 32,
		textAlign: 'center',
		fontFamily: fontTitle,
		color: colorAccent
	},
	select: {
		margin: 20,
		height: 40
	},
	title: {
		textAlign: 'center',
		fontSize: 50,
		marginTop: 20,
		marginBottom: 20,
		fontFamily: fontTitle,
		color: colorAccent
	},
	p: {
		fontFamily: fontText,
		color: colorText,
		marginLeft: 15,
		marginRight: 15,
		fontSize: 22,
		lineHeight: 28
	},
	button: {
		justifyContent: 'center',
		padding: 20,
		backgroundColor: colorButton,
		borderRadius: 35,
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		fontFamily: fontTitle
	},
	navbar: {
		height: 40
	},
	innerNavbar: {
		flexDirection: 'row',
		flex:1,
		backgroundColor: '#f8f8f8',
		borderTopColor: '#b2b2b2',
		borderTopWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	navbarButton: {
		flex: 0.4,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 4,
		backgroundColor: colorButton,
		margin: 5,
		borderRadius: 20
	},
	navbarButtonText: {
		fontFamily: fontTitle,
		fontSize: 18
		// fontWeight: 'bold'
	}

}
