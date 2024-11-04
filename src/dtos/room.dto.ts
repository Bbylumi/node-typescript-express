export interface CreateRoomDto {
    name: string;
    capacity: number;
    amenities: string[];
}

export interface UpdateRoomDto {
    name?: string;
    capacity?: number;
    amenities?: string[];
}
