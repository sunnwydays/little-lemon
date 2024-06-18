import image from '../assets/logo-vertical.png';

export default function Footer() {
    return (
        <footer>
            <div className="content">
                <div>
                    <img src={image} alt="Little Lemon logo icon" />
                </div>
                <div>
                    <h3>Navigation</h3>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About</a></p>
                    <p><a href="/menu">Menu</a></p>
                    <p><a href="/reservations">Reservations</a></p>
                    <p><a href="/order-online">Order Online</a></p>
                    <p><a href="/login">Login</a></p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>123 Sweet Tooth Road, Chicago</p>
                    <p>123-456-9873</p>
                    <p>contact@littlelemon.com</p>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    )
}