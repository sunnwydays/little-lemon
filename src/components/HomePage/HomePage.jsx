import Hero from "./Hero";
import Specials from "./Specials";
import Ratings from "./Ratings";
import BrandDescription from "./BrandDescription";

export default function Home() {
    const specials = [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            price: 12.99,
            image: "../../assets/greek-salad.jpg"
        },
        {
            name: "Bruchetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            price: 5.99,
            image: "../../assets/bruchetta.svg"

        },
        {
            name: "Lemon Desert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00,
            image: "../../assets/lemon dessert.jpg"

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
        <div>
            <Hero />
            <Specials specials={specials} />
            <Ratings ratings={ratings} />
            <BrandDescription />
        </div>
    )
}