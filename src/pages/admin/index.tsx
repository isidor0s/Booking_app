import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
const Dashboard: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="grid grid-cols-2 gap-6">
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
        </Layout>
    );
};

export default Dashboard;
