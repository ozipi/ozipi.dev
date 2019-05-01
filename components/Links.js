import styled from 'styled-components'

const Link = styled.a`
    color: red
`

const Links = () => (
    <div>
        <Link href='https://www.twitter.com/ozipi'>twitter</Link>&nbsp;/&nbsp;
        <Link href='https://www.github.com/ozipi'>github</Link>&nbsp;/&nbsp;
        <Link href='https://www.linkedin.com/in/ozipi'>linkedin</Link>
    </div>
  );

export default Links