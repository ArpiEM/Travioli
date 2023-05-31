import {IDestinations} from "../../../models/IDestinations";


export interface DestinationsState {
    destinations: IDestinations[];
}

export enum DestinationsActionEnum {
    SET_DESTINATIONS = "SET_DESTINATIONS",
}

export interface SetDestinationsAction {
    type: DestinationsActionEnum.SET_DESTINATIONS;
    payload: IDestinations[]
}


export type DestinationsAction =
    SetDestinationsAction
