import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './OtherPages/About';
import Menu from './OtherPages/Menu';
import BookingPage from './BookingPage/BookingPage';
import OrderOnline from './OtherPages/OrderOnline';
import Login from './OtherPages/Login';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}