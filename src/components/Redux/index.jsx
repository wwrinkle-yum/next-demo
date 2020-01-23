import React from 'react';

// SEO
// import { NextSeo } from 'next-seo';
import Head from 'next/head';

// MUI Components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// Components
import Link from '../Common/Link';
import Examples from './Examples';

class Index extends React.Component {
  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Head>
            <title>Redux</title>
            <meta
              name="description"
              content="This is the components/Redux page. This is being set by the next/head component."
            ></meta>
          </Head>
          <Examples />
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/"
          >
            Go to the main page
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Index;
