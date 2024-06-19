import logo from '../assets/Logo.svg';

export default function Nav() {
    return (
        <nav className="content">
            <a href="/"><img src={logo} alt="Little Lemon logo" /></a>
            <ul>
                <li>
                    <a href="/little-lemon/">Home</a>
                </li>
                <li>
                    <a href="/little-lemon/about">About</a>
                </li>
                <li>
                    <a href="/little-lemon/menu">Menu</a>
                </li>
                <li>
                    <a href="/little-lemon/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/little-lemon/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/little-lemon/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}