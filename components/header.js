import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/about">
          <a>Go to About Me</a>
      </Link>
    </header>
    
  );
}

export default Header;
