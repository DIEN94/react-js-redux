import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../components/models/IEvent";
import { IUser } from "../../../components/models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const guests = await axios.get('./users.json')
        } catch (e) {
            console.log(e);
            
        }
    }
}