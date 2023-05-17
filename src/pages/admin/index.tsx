import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
import { useQuery } from 'react-query';
import { QueryRoomsByAdminId } from '@/utils/queries';
import { useUser } from '@supabase/auth-helpers-react';
import dayjs from 'dayjs';
import { useMemo } from 'react';

const Dashboard: NextPage = () => {
    const user = useUser();
    const { data: rooms } = useQuery('adminRooms', () => QueryRoomsByAdminId(user?.id || ''), {
        enabled: !!user?.id,
    });

    const currentRooms = useMemo(() => {
        // Remove the rooms which are full and whose date has passed
        return rooms?.data?.filter((room) => dayjs(room.date).isAfter(dayjs())) || [];
    }, [rooms]);

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="grid w-fit grid-cols-2 gap-6">
                {currentRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );
};

export default Dashboard;
