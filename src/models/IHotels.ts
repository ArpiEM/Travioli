export interface IHotels {
    id: number,
    name: string,
    address: string,
    city: string,
    state?: string,
    country_code: string,
    hotel_rating: number,
    phone_number: string,
    website?: string
}