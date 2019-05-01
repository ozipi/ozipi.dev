import Link from "next/link";
import Links from "./Links";
import { styled } from 'styled-components'

function Header() {
  return (
    <header>

      <Links/>
      <Link href="/about">
          <a>Go to About Me</a>
      </Link>
    </header>
    
  );
}

export default Header;
