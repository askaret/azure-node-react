import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import { Typography } from '@material-ui/core';

const Post = props => (
  <Layout>
    <Typography variant="h3">{props.show.name}</Typography> 
    <p>
      <Typography variant="body1">{props.show.summary.replace(/<[/]?[pb]>/g, '')}</Typography>      
      </p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;

// import { useRouter } from 'next/router';
// import Layout from '../../components/layout';

// export default function Post() {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }