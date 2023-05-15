import Layout from '@/layouts/layout';
import { NextPage } from 'next';

const Dashboard: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
        </Layout>
    );
};

export default Dashboard;
