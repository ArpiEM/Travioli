import axios, {AxiosResponse} from "axios";
import {IDestinations} from "../models/IDestinations";

export default class DestinationsService {
    static async getDestinations(): Promise<AxiosResponse<IDestinations[]>> {
        return axios.get<IDestinations[]>('./destinations.json')
    }
}
