import styled from 'styled-components'
import ContactLinks from '../components/Links';

const CenterPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Index() {
  return (
        <CenterPage>
            <div>
              <h1>OZIPI</h1>
            </div>
            <ContactLinks/>
        </CenterPage>
  );
}

export default Index;
