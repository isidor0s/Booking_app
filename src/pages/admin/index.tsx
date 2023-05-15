import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
import { useQuery } from 'react-query';
import { QueryRoomsByAdminId } from '@/utils/queries';
import { useUser } from '@supabase/auth-helpers-react';

const Dashboard: NextPage = () => {
    const user = useUser();
    const { data: rooms } = useQuery('adminRooms', () => QueryRoomsByAdminId(user?.id || ''), {
        enabled: !!user?.id,
    });

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="grid w-fit grid-cols-2 gap-6">
                {rooms?.data?.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );
};

export default Dashboard;
