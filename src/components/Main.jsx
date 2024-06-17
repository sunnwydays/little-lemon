import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './OtherPages/About';
import Menu from './OtherPages/Menu';
import BookingPage from './BookingPage/BookingPage';
import OrderOnline from './OtherPages/OrderOnline';
import Login from './OtherPages/Login';

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00'];
        default:
            return state;
    }
};

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}