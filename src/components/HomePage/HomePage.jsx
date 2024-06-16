import { Link } from "react-router-dom";

import Hero from "./Hero";
import SpecialCard from "./SpecialCard";
import TestimonialCard from "./TestimonialCard";
import BrandDescription from "./BrandDescription";

import greekSaladImage from "../../assets/greek salad.jpg";
import bruchettaImage from "../../assets/bruchetta.svg";
import lemonDessertImage from "../../assets/lemon dessert.jpg";
import customer1 from "../../assets/customer1.jpeg";
import customer2 from "../../assets/customer2.jpeg";
import customer3 from "../../assets/customer3.jpeg";
import customer4 from "../../assets/customer4.jpeg";

export default function Home() {
    const specials = [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            price: 12.99,
            image: greekSaladImage
        },
        {
            name: "Bruchetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            price: 5.99,
            image: bruchettaImage

        },
        {
            name: "Lemon Desert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00,
            image: lemonDessertImage

        }
    ]
    const testimonials = [
        {
            header: "Great home food",
            name: "John Doe",
            image: customer1,
            comments: "The dishes remind me of my grandmother's cooking. Absolutely heartwarming!"
        },
        {
            header: "Lovely atmosphere",
            name: "Jane Doe",
            image: customer2,
            comments: "The cozy decor and friendly staff made our dinner extra special."
        },
        {
            header: "My kid loved it!",
            name: "John Smith",
            image: customer3,
            comments: "Not only was the food delicious, but the kids' menu was a hit with my little one."
        },
        {
            header: "smelled pretty good",
            name: "Jane Smith",
            image: customer4,
            comments: "i was greeted by the most inviting aromas, food bussing fr fr"
        }
    ]
    return (
        <div className="homepage">
            <Hero />
            <section className="specials">
                <div className="content">
                    <div>
                        <h1>This week&apos;s specials!</h1>
                        <Link to="/Menu" style={{ textDecoration: 'none' }}>
                            <button>Online Menu</button>
                        </Link>
                    </div>
                    <div>
                        {specials.map((special, index) => (
                            <SpecialCard key={index} special={special} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div className="content">
                    <h1>Testimonials</h1>
                    <div>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
            <BrandDescription />
        </div>
    )
}