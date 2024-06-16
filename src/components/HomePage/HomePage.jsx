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
    const testimonials = [
        {
            name: "John Doe",
            image: customer1,
            comments: "This is a review"
        },
        {
            name: "Jane Doe",
            image: customer2,
            comments: "This is a review"
        },
        {
            name: "John Smith",
            image: customer3,
            comments: "This is a review"
        },
        {
            name: "Jane Smith",
            image: customer4,
            comments: "This is a review"
        }
    ]
    return (
        <div className="homepage">
            <Hero />
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
            <section className="testimonials">
                <div>
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