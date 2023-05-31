import {IHotels} from "../../../models/IHotels";


export interface HotelsState {
    hotels: IHotels[];
}

export enum HotelsActionEnum {
    SET_HOTELS = "SET_HOTELS",
}

export interface SetHotelsAction {
    type: HotelsActionEnum.SET_HOTELS;
    payload: IHotels[]
}



export type HotelAction =
    SetHotelsAction
