import { Component } from "react";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <section>
         {/* <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>
            You can reload to see how the page change. Ozipi
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>  */}
          O'z
        </section>
      </main>
    );
  }
}

export default AboutPage;