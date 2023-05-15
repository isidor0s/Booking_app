export type BookingStatus = 'Approved' | 'Pending' | 'Rejected' | 'Ended';

export interface Booking {
    id: number;
    room_id: number;
    admin_id: string;
    employee_id: string;
    status: BookingStatus;
    room_name: string | null;
    date: string | null;
}
