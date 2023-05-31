import {HotelAction, HotelsActionEnum, HotelsState} from "./types";


const initialState: HotelsState = {
    hotels: []
}

export default function HotelsReducer(state = initialState, action: HotelAction): HotelsState {
    switch (action.type) {
        case HotelsActionEnum.SET_HOTELS:
            return {...state, hotels: action.payload}
        default:
            return state;
    }
}
