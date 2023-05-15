import { FC } from "react";


const RoomCard: FC <({title:string; type:string; date:string; slot:number, max_slots:number})> = ({title, type, date, slot,max_slots}) => {
    return (
        <div className="flex h-[116px] w-[425px] gap-[14px] rounded-lg border border-slate-400 p-4">
        <div className="h-full w-[120px] rounded-lg bg-slate-200"></div>
        <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col">
                <div className={'text-[20px] font-semibold text-slate-800'}>{title}</div>
                <div className="font-medium text-[#5A5A5D]">{type}</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-xs font-medium ">{date}</div>
                <div className="text-sm font-medium">{slot}/{max_slots} slots</div>
            </div>
        </div>
        </div>
    );

}
export default RoomCard;