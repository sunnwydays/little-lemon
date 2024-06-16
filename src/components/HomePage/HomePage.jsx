import Hero from "./Hero";
import Specials from "./Specials";
import SpecialCard from "./SpecialCard";
import Ratings from "./Ratings";
import RatingCard from "./RatingCard";
import BrandDescription from "./BrandDescription";

import greekSaladImage from "../../assets/greek salad.jpg";
import bruchettaImage from "../../assets/bruchetta.svg";
import lemonDessertImage from "../../assets/lemon dessert.jpg";

export default function Home() {
    const specials = [
        {
            name: "Greek Salad",
            description: "p ",
            price: 12.99,
            image: greekSaladImage
        },
        {
            name: "Bruchetta",
            description: "p. ",
            price: 5.99,
            image: bruchettaImage

        },
        {
            name: "Lemon Desert",
            description: "p.",
            price: 5.00,
            image: lemonDessertImage

        }
    ]
    const ratings = [
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
        },
        {
            name: "Jane Smith",
            image: "🌟🌟🌟🌟🌟",
            comments: "This is a review"
        }
    ]
    return (
        <div className="homepage">
            <Hero />
            {/* <Specials specials={specials} /> */}
            <section className="specials">
                <div>
                    <div>
                        <h1>This week&apos;s specials!</h1>
                        <button>Online Menu</button>
                    </div>
                    <div>
                        {specials.map((special, index) => (
                            <SpecialCard key={index} special={special} />
                        ))}
                    </div>
                </div>
            </section>
            {/* <Ratings ratings={ratings} /> */}
            <section className="testimonials">
                <div>
                    <h1>Testimonials</h1>
                    <div>
                        {ratings.map((rating, index) => (
                            <RatingCard key={index} rating={rating} />
                        ))}
                    </div>
                </div>
            </section>
            <BrandDescription />
        </div>
    )
}