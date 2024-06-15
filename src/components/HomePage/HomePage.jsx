import Hero from "./Hero";
import SpecialCard from "./SpecialCard";
import RatingCard from "./RatingCard";
import BrandDescription from "./BrandDescription";

export default function Home() {
    const specials = [
        {
            name: "Greek Salad",
            description: "This is a special description",
            price: 10.99,
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Bruchetta",
            description: "This is a special description",
            price: 12.99,
            image: "https://via.placeholder.com/150"

        },
        {
            name: "Lemon Desert",
            description: "This is a special description",
            price: 5.00,
            image: "https://via.placeholder.com/150"

        }
    ]
    const reviews = [
        {
            name: "John Doe",
            image: "🌟🌟🌟🌟🌟",
            comments: "This is a review"
        },
        {
            name: "Jane Doe",
            image: "🌟🌟🌟🌟🌟",
            comments: "This is a review"
        },
        {
            name: "John Smith",
            image: "🌟🌟🌟🌟🌟",
            comments: "This is a review"
        }
    ]
    return (
        <div>
            <Hero />
            <div>
                <div>
                    <h1>This week's specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div>
                    {specials.map((special, index) => (
                        <SpecialCard key={index} dish={special} />
                    ))}
                </div>
            </div>
            <div>
                <h2>Testimonials</h2>
                {reviews.map((review, index) => (
                    <RatingCard key={index} review={review} />
                ))}
            </div>
            <BrandDescription />
        </div>
    )
}