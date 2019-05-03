import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import ReactGA from 'react-ga';

import { AppGlobalStyles } from './AppGlobalStyles'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
	height: 100%;
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
	max-width: ${props => props.theme.maxWidth};
	height: 100%;
`;

class Page extends Component {
	constructor(props) {
		super(props)
		//console.log('suerp::props', props)
		this.initializeReactGA()
	}

	initializeReactGA() {
		ReactGA.initialize('UA-8550666-8');
		ReactGA.pageview('/homepage');
	}

	render() {
		return (
		<ThemeProvider theme={theme}> 
			<StyledPage>
				<AppGlobalStyles />
				<Meta />
				{/* <Header /> */}
				<Inner>{this.props.children}</Inner>
			</StyledPage>
		</ThemeProvider>
	);
  }
}

export default Page;
