import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';

const Dashboard: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="grid w-fit grid-cols-2 gap-6">
                <RoomCard title={'Course'} type={'lesson'} date={'Thu 5, May 2023'} slots_booked={0} capacity={200} />
                <RoomCard title={'Course'} type={'lesson'} date={'Thu 5, May 2023'} slots_booked={0} capacity={200} />
                <RoomCard title={'Course'} type={'lesson'} date={'Thu 5, May 2023'} slots_booked={0} capacity={200} />
                <RoomCard title={'Course'} type={'lesson'} date={'Thu 5, May 2023'} slots_booked={0} capacity={200} />
            </div>
        </Layout>
    );
};

export default Dashboard;
