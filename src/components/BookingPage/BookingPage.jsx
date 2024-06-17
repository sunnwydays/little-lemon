import { useReducer } from 'react';

import BookingForm from "./BookingForm"
import restaurant from '../../assets/restaurant.jpg';

export default function BookingPage() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_DATE':
                return { ...state, date: action.payload };
            case 'SET_TIME':
                return { ...state, time: action.payload };
            case 'SET_NUM_DINERS':
                return { ...state, numDiners: action.payload };
            case 'SET_OCCASION':
                return { ...state, occasion: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        date: '',
        time: '',
        numDiners: '',
        occasion: ' '
    });

    return (
        <div className="booking-page">
            <div className="hero">
                <div className="content">
                    <div>
                        <h1>Reserve a table</h1>
                        <h2 className="markazi-32">Find a table for any occasion</h2>
                    </div>
                    <img src={restaurant} alt="restaurant" />
                </div>
            </div>
            <div className="content">
                <BookingForm
                    state={state}
                    dispatch={dispatch}
                />
                <p>fname</p>
                <p>lname</p>
                <p>phone email</p>
            </div>

            <button>Reserve</button>
        </div>
    );
}