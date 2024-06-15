import food from '../../assets/restauranfood.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <div>
                <h1>Little Lemon</h1>
                <p className="markazi-32">Chicago</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={food} alt="restaurant food" />
        </section>
    )
}