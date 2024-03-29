export type Availability = 'Available' | 'Unvailable' | 'Cancelled' | 'Finished';

export interface Room {
    id: number;
    admin_id: string;
    name: string;
    date: string;
    type: string;
    capacity: number;
    slots_booked: number;
}
