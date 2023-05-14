

export default function RoomCard() {
    return (
        <div className="flex h-[116px] w-[425px] gap-[14px] rounded-lg border border-slate-400 p-4">
        <div className="h-full w-[120px] rounded-lg bg-slate-200"></div>
        <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col">
                <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                <div className="font-medium text-[#5A5A5D]">Team</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-xs font-medium ">Thu 5, May 2023</div>
                <div className="text-sm font-medium">17/20 slots</div>
            </div>
        </div>
        </div>
    );

}