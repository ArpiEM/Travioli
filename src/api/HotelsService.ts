import axios, {AxiosResponse} from "axios";
import {IHotels} from "../models/IHotels";

export default class HotelsService {
    static async getHotels(): Promise<AxiosResponse<IHotels[]>> {
        return axios.get<IHotels[]>('./hotels.json')
    }
}
