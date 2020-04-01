import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}&poop=${props.poop}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" poop="fuckaroni"/>
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}