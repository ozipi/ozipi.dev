import styled from 'styled-components'

const Link = styled.a`
    color: red
`

const ContactLinks = () => (
    <div>
        <Link href='https://www.twitter.com/ozipi' target='blank'>twitter</Link>&nbsp;/&nbsp;
        <Link href='https://www.github.com/ozipi' target='blank'>github</Link>&nbsp;/&nbsp;
        <Link href='https://www.linkedin.com/in/ozipi' target='blank'>linkedin</Link>
    </div>
  );

export default ContactLinks