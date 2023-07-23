import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../components/models/IEvent";
import { IUser } from "../../../components/models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction } from "./types";
import UserService from "../../../components/api/UserService";
import { log } from "console";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            console.log(e);
            
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {

        try{
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {
            console.log(e);
            
        }
    }
}