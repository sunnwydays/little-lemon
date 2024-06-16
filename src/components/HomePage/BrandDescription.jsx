import chef from '../../assets/restaurant chef B.jpg';
import restaurant from '../../assets/restaurant.jpg';

export default function BrandDescription() {
    return (
        <section className="brand-description">
            <div>
                <div>
                    <h1>Little Lemon</h1>
                    <h2 className="markazi-32">Chicago</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
                <img src={restaurant} alt="restaurant" />
                <img src={chef} alt="chef" />
            </div>
        </section>
    )
}