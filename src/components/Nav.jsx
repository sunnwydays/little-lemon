import logo from '../assets/Logo.svg';

export default function Nav() {
    return (
        <nav className="content">
            <img src={logo} alt="Little Lemon logo"/>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}