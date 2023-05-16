import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
import { useQuery } from 'react-query';
import { QueryBookings, QueryRooms } from '@/utils/queries';
import { useUser } from '@supabase/auth-helpers-react';
import { useMemo } from 'react';
import dayjs from 'dayjs';

const Dashboard: NextPage = () => {
    const user = useUser();
    const { data: rooms } = useQuery('rooms', () => QueryRooms());
    const { data: bookings } = useQuery(['bookings', user?.id], () => QueryBookings(user?.id || ''), {
        enabled: !!user?.id,
    });

    const availableRooms = useMemo(() => {
        // Use bookings to filter out the booked ones
        let avRooms =
            rooms?.data?.filter((room) => !bookings?.data?.some((booking) => booking.room_id === room.id)) || [];

        // Remove the rooms which are full and whose date has passed
        avRooms = avRooms.filter((room) => dayjs(room.date).isAfter(dayjs()) && room.slots_booked < room.capacity);

        return avRooms;
    }, [rooms, bookings]);

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Available rooms</div>
            <div className="grid w-fit grid-cols-2 gap-6">
                {availableRooms.map((room) => (
                    <RoomCard key={room.id} room={room} canBook />
                ))}
            </div>
        </Layout>
    );
};

export default Dashboard;
