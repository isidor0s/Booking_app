import dayjs from 'dayjs';
import { FC, FormEvent } from 'react';

type RoomCardProps = {
    title: string;
    type: string;
    date: string;
    capacity: number;
    slots_booked: number;
    onBook?: (e: FormEvent<HTMLFormElement>) => void;
};

const RoomCard: FC<RoomCardProps> = ({ title, type, date, capacity, slots_booked, onBook }) => {
    return (
        <div className="flex h-[116px] w-[425px] gap-[14px] rounded-lg border border-slate-400 p-4">
            <div className="h-full w-[120px] rounded-lg bg-slate-200"></div>
            <div className="relative flex w-full flex-col justify-between">
                <div className="flex flex-col">
                    <div className={'text-[20px] font-semibold text-slate-800'}>{title}</div>
                    <div className="font-medium text-slate-500">{type}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-xs font-medium ">{dayjs(date).format('ddd, DD MMM YYYY')}</div>
                    <div className="text-sm font-medium">
                        {slots_booked}/{capacity} slots
                    </div>
                </div>
                {onBook && (
                    <form onSubmit={onBook}>
                        <button
                            type="submit"
                            className={
                                'absolute right-0 top-0 w-fit rounded-lg bg-slate-800 p-2.5 text-white focus:border-slate-800 focus:ring-slate-800'
                            }
                        >
                            Book
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};
export default RoomCard;
