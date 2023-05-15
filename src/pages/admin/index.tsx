import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
const Dashboard: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="grid grid-cols-2 gap-6">
                <RoomCard title ={ "Course"} type={'lesson'} date={"Thu 5, May 2023"} slot={13} max_slots={15}/>
                <RoomCard title ={ "Course"} type={'lesson'} date={"Thu 5, May 2023"} slot={13} max_slots={15}/>
            </div>
        </Layout>
    );
};

export default Dashboard;
