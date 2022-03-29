import NextApp, { AppProps } from 'next/app';

class App extends NextApp {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default App;
