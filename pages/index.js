import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Typography } from '@material-ui/core';

const Index = props => (
  <Layout>
      <Typography variant="h3">Batman TV Shows</Typography>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Typography variant="body1">
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </Typography>
        </li>
      ))}
    </ul>

    
  </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    
    console.log(`Show data fetched. Count: ${data.length}`);
    
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
