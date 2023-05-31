import {HotelsActionEnum, SetHotelsAction} from "./types";
import {AppDispatch} from "../../index";
import {IHotels} from "../../../models/IHotels";
import HotelsService from "../../../api/HotelsService";

export const HotelsActionCreators = {
    setHotels: (payload: IHotels[]): SetHotelsAction => ({type: HotelsActionEnum.SET_HOTELS, payload}),
    fetchHotels: () =>  (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                const response = await HotelsService.getHotels()
                dispatch(HotelsActionCreators.setHotels(response.data));
            }, 1000)
        } catch (e) {
            console.log(e);
        }
    },
}
