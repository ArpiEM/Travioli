import { DestinationsAction, DestinationsActionEnum, DestinationsState } from "./types";


const initialState: DestinationsState = {
    destinations: []
}

export default function DestinationsReducer(state = initialState, action: DestinationsAction): DestinationsState {
    switch (action.type) {
        case DestinationsActionEnum.SET_DESTINATIONS:
            return {...state, destinations: action.payload}
        default:
            return state;
    }
}
