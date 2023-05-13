export type Availability = 'Available' | 'Unvailable' | 'Cancelled' | 'Finished';

export interface Room {
    id: string;
    admin_id: string;
    name: string;
    date: string;
    type: string;
    capacity: number;
    availability: Availability;
}
