import styled from 'styled-components'
import ContactLinks from '../components/Links';
import ReactGA from 'react-ga';

const CenterPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class Index extends React.Component {
	constructor(props) {
		super(props)
		//console.log('suerp::props', props)
		this.trackEvent()
	}

	trackEvent() {
    ReactGA.pageview('/home');
	}

	render() {
		return (
      <CenterPage>
      <div>
        <h1>OZIPI</h1>
      </div>
      <ContactLinks/>
      </CenterPage>
	);
  }
}

export default Index;
