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

export const QueryRooms = async () => {
    return await _supabaseClient.from('room').select().returns<Room[]>();
};

export const QueryRoomsByAdminId = async (adminId: string) => {
    return await _supabaseClient.from('room').select().eq('admin_id', adminId).returns<Room[]>();
};
