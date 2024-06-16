import image from '../assets/Mario and Adrian vertical.jpg';

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <img src={image} width="156" alt="Mario and Adrian" />
                </div>
                <div>
                    <h3>Navigation</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservations</p>
                    <p>Order Online</p>
                    <p>Login</p>
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