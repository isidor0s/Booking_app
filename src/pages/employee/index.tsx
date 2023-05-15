import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import RoomCard from '@/components/room-card';
import { FormEvent } from 'react';
import { useQuery } from 'react-query';
import { QueryRooms } from '@/utils/queries';

const Dashboard: NextPage = () => {
    const { data: rooms } = useQuery('rooms', () => QueryRooms());

    const onBook = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('booked');
    };

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Available rooms</div>
            <div className="grid w-fit grid-cols-2 gap-6">
                {rooms?.data?.map((room) => (
                    <RoomCard key={room.id} room={room} onBook={onBook} />
                ))}
            </div>
        </Layout>
    );
};

export default Dashboard;
