import { Booking } from '@/types/booking';
import { _supabaseClient } from './supabase';
import { Room } from '@/types/room';

export const CreateRoomQuery = async (adminId: string, room: Partial<Room>) => {
    return await _supabaseClient
        .from('room')
        .insert({
            admin_id: adminId,
            name: room.name,
            date: room.date,
            type: room.type,
            capacity: room.capacity,
            slots_booked: 0,
        })
        .select()
        .single<Room>();
};

export const QueryBookings = async (employee_id: string) => {
    return await _supabaseClient.from('booking').select().eq('employee_id', employee_id).returns<Booking[]>();
};
export const QueryRequests = async (admin_id: string) => {
    return await _supabaseClient.from('booking').select().eq('admin_id', admin_id).returns<Booking[]>();
};

export const QueryRooms = async () => {
    return await _supabaseClient.from('room').select().returns<Room[]>();
};

export const QueryRoomsByAdminId = async (adminId: string) => {
    return await _supabaseClient.from('room').select().eq('admin_id', adminId).returns<Room[]>();
};

export const QueryRoomByRoomId = async (id: number) => {
    return await _supabaseClient.from('room').select().eq('id', id).single<Room>();
};

export const CreateBooking = async (booking: Omit<Booking, 'id'>) => {
    return await _supabaseClient
        .from('booking')
        .insert({
            room_id: booking.room_id,
            admin_id: booking.admin_id,
            employee_id: booking.employee_id,
            status: booking.status,
            room_name: booking.room_name,
            date: booking.date,
        })
        .select()
        .single<Booking>();
};

export const changeRequest = async (id: number, state: string) => {
    return await _supabaseClient
        .from('booking')
        .update({
            status: state,
        })
        .eq('id', id);
};

export const updateSlot = async (id: number, value: number) => {
    return await _supabaseClient
        .from('room')
        .update({
            slots_booked: value,
        })
        .eq('id', id);
};
