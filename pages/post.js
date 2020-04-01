import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Content = () => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the bløg post content.</p>
            <b>{router.query.poop}</b>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

/*
const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
            <b>{router.query.poop}</b>
        </Layout>
    );
};
*/
export default Page;