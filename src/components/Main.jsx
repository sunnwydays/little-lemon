import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './OtherPages/About';
import Menu from './OtherPages/Menu';
import BookingPage from './BookingPage/BookingPage';
import OrderOnline from './OtherPages/OrderOnline';
import Login from './OtherPages/Login';
import ConfirmedBooking from './BookingPage/ConfirmedBooking';

export default function Main() {
    /* seededRandom, fetchAPI, submitAPI provided by the API */
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return fetchAPI(action.date);
            default:
                return state;
        }
    };
    const initializeTimes = () => {
        const today = new Date()
        return fetchAPI(today)
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate()
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirmed')
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}