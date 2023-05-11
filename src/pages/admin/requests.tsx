import Layout from '@/layouts/layout';
import { NextPage } from 'next';

const RequestsPage: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Requests</div>
        </Layout>
    );
};

export default RequestsPage;
