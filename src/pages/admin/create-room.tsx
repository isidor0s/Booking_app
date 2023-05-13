import Layout from '@/layouts/layout';
import { Room } from '@/types/room';
import { _supabaseClient } from '@/utils/supabase';
import { useUser } from '@supabase/auth-helpers-react';
import { NextPage } from 'next';
import { FormEvent, useRef, useState } from 'react';

const CreateRoom: NextPage = () => {
    const user = useUser();

    const formRef = useRef<HTMLFormElement>(null);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [capacity, setCapacity] = useState(0);
    const [date, setDate] = useState(new Date().toISOString());

    const [success, setSuccess] = useState(false);

    const resetForm = () => {
        if (formRef.current) formRef.current.reset();
    };

    const createRoom = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await _supabaseClient
            .from('room')
            .insert({
                admin_id: user?.id,
                name: name,
                date: date,
                type: type,
                capacity: capacity,
                availability: 'Available',
            })
            .select()
            .single<Room>();

        resetForm();

        if (data) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        }
    };

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Create room</div>
            <form ref={formRef} className={'flex flex-col gap-6'} onSubmit={createRoom}>
                <div className={'flex w-48 flex-col gap-1.5'}>
                    <label htmlFor={'name'} className={'w-fit text-base font-medium text-slate-700'}>
                        Name
                    </label>
                    <input
                        id={'name'}
                        type="text"
                        className={'rounded-lg border border-slate-400 p-2.5 text-sm text-slate-900'}
                        placeholder={'e.g. Auditorium'}
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></input>
                </div>
                <div className={'flex w-48 flex-col gap-1.5'}>
                    <label htmlFor={'date'} className={'w-fit text-base font-medium text-slate-700'}>
                        Date
                    </label>
                    <input
                        id={'date'}
                        type="datetime-local"
                        className={'rounded-lg border border-slate-400 p-2.5 text-sm text-slate-900'}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    ></input>
                </div>
                <div className={'flex w-72 flex-row gap-6'}>
                    <div className={'flex w-2/3 flex-col gap-1.5'}>
                        <label htmlFor={'type'} className={'w-fit text-base font-medium text-slate-700'}>
                            Type
                        </label>
                        <input
                            id={'type'}
                            type="text"
                            className={'rounded-lg border border-slate-400 p-2.5 text-sm text-slate-900'}
                            placeholder={'e.g. Course'}
                            onChange={(e) => setType(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className={'flex w-1/3 flex-col gap-1.5'}>
                        <label htmlFor={'capacity'} className={'w-fit text-base font-medium text-slate-700'}>
                            Capacity
                        </label>
                        <input
                            id={'capacity'}
                            type="number"
                            className={'rounded-lg border border-slate-400 p-2.5 text-sm text-slate-900'}
                            onChange={(e) => setCapacity(parseInt(e.target.value))}
                            required
                        ></input>
                    </div>
                </div>
                <div className={'flex flex-row items-center gap-6'}>
                    <button
                        type="submit"
                        className={
                            'w-fit rounded-lg bg-slate-800 p-2.5 text-white focus:border-slate-800 focus:ring-slate-800'
                        }
                    >
                        Create
                    </button>
                    {success && <div className={'text-sm font-medium text-green-500'}>Room created successfully!</div>}
                </div>
            </form>
        </Layout>
    );
};

export default CreateRoom;
