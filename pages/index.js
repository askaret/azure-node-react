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

// Data Source=KJELLER\KJELLER2019;Initial Catalog=BouvetBeertastingDbFromAzure;Integrated Security=True
// import Layout from '../components/layout';
// import Link from 'next/link';

// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}&poop=${props.poop}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello Next.js" poop="fuckaroni"/>
//                 <PostLink title="Learn Next.js is awesome" />
//                 <PostLink title="Deploy apps with Zeit" />
//             </ul>
//         </Layout>
//     );
// }

// import Layout from '../components/layout';
// import Link from 'next/link';

// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }