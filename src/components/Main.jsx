import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookingPage from './BookingPage/BookingPage';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage />} />
                {/* home, about, menu, reservations, order online, login*/}
            </Routes>
        </BrowserRouter>
    );
}