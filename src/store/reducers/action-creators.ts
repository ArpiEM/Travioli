import {HotelsActionCreators} from "./hotels/hotels-creators";
import {DestinationsActionCreators} from "./destinations/destinations-creators";

export const allActionCreators = {
    ...HotelsActionCreators,
    ...DestinationsActionCreators
}
