import {AppDispatch} from "../../index";
import {DestinationsActionEnum, SetDestinationsAction} from "./types";
import {IDestinations} from "../../../models/IDestinations";
import DestinationsService from "../../../api/DestinationsService";

export const DestinationsActionCreators = {
    setDestinations: (payload: IDestinations[]): SetDestinationsAction => ({type: DestinationsActionEnum.SET_DESTINATIONS, payload}),
    fetchDestinations: () =>  async (dispatch: AppDispatch) => {
        try {
            const response = await DestinationsService.getDestinations()
            dispatch(DestinationsActionCreators.setDestinations(response.data));
        } catch (e) {
            console.log(e);
        }
    },
}
